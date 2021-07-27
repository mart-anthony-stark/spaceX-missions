import React, { useState, useEffect } from 'react';
import Mission from './component/Mission';
import History from './component/History';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import Search from './component/Search';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('mission');
  const [isOpen, setIsOpen] = useState(false);
  const searchRegex = new RegExp(search, 'i');

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
  }, []);

  function missionIsEmpty() {
    return (
      data.filter(m => {
        if (search == '') return m;
        return (
          m.mission_name.match(searchRegex) || m.description.match(searchRegex)
        );
      }).length == 0
    );
  }

  var missions = data.filter(m => {
    if (search == '') return m;
    return (
      m.mission_name.match(searchRegex) || m.description.match(searchRegex)
    );
  });

  var filteredHistory = history.filter(history => {
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

      <div
        className={'missions-wrapper ' + (tab == 'mission' ? 'show' : 'hide')}
      >
        {missions.map((mission, index) => {
          return <Mission info={mission} key={data.mission_id} />;
        })}
      </div>

      <div
        className={'missions-wrapper ' + (tab == 'history' ? 'show' : 'hide')}
      >
        {filteredHistory.map(history => {
          return <History history={history} tab={tab} />;
        })}
      </div>

      <div
        classNmae="missions-wrapper"
        id={tab == 'history' ? 'show' : 'hide'}
      />

      <Footer />
    </div>
  );
}
