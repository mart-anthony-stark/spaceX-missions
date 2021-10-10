import React, { useState, useEffect } from 'react';
import Welcome from './component/Welcome';
import Mission from './component/Mission';
import History from './component/History';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import Search from './component/Search';
import './style.css';

export default function App() {
  const [info, setInfo] = useState({});
  const [links, setLinks] = useState({});
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const searchRegex = new RegExp(search, 'i');

  const getInfo = async () => {
    const res = await fetch('https://api.spacexdata.com/v3/info');
    const json = await res.json();

    setLinks(json.links);
    setInfo(json);
  };

  const getMissions = async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');
    const info = await res.json();

    setData(info);
  };

  const getHistory = async () => {
    const res = await fetch('https://api.spacexdata.com/v3/history');
    const info = await res.json();

    setHistory(info);
  };

  useEffect(() => {
    getMissions();
    getHistory();
    getInfo();
  }, []);

  function missionIsEmpty() {
    return (
      data.filter((m) => {
        if (search == '') return m;
        return (
          m.mission_name.match(searchRegex) || m.description.match(searchRegex)
        );
      }).length == 0
    );
  }

  var missions = data.filter((m) => {
    if (search == '') return m;
    return (
      m.mission_name.match(searchRegex) || m.description.match(searchRegex)
    );
  });

  var filteredHistory = history.filter((history) => {
    if (search == '') return history;
    return history.title.match(searchRegex);
  });

  return (
    <div className="app-main">
      <Navbar tab={tab} setTab={setTab} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        tab={tab}
        setTab={setTab}
      />
      <Search
        search={search}
        setSearch={setSearch}
        isEmpty={missionIsEmpty()}
        tab={tab}
      />

      <Welcome info={info} tab={tab} setTab={setTab} links={links} />

      <div className={'wrapper ' + (tab == 'mission' ? 'show' : 'hide')}>
        {missions.map((mission, index) => {
          return <Mission info={mission} key={data.mission_id} />;
        })}
      </div>

      <div className={'wrapper ' + (tab == 'history' ? 'show' : 'hide')}>
        {filteredHistory.map((history) => {
          return <History history={history} tab={tab} />;
        })}
      </div>

      <div className="wrapper" id={tab == 'history' ? 'show' : 'hide'} />

      <Footer />
    </div>
  );
}
