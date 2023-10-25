import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { add } from "./Redux/slice";
import { openSplit } from "./Redux/splitInfo";

import DetaildEmail from './Components/DetaildEmail';
import Email from './Components/Email';

function App() {

  const dispatch = useDispatch();
  const emails = useSelector((store) => store.emailStore);
  const splitInfo = useSelector((store) => store.splitInfo);

  const [filterOption, setFilterOption] = useState('all');

  const filterOptionUpdater = (e) => {

    const activeClassFixture = (element) => {
      [...element.parentNode.children].forEach(et => et.classList.remove('active'));
      element.classList.add('active');
    }

    if (e.target.textContent === 'All') {
      dispatch(openSplit('close'));
      setFilterOption('all')
      activeClassFixture(e.target);
    }
    if (e.target.textContent === 'Unread') {
      dispatch(openSplit('close'));
      setFilterOption('unread')
      activeClassFixture(e.target);
    }
    if (e.target.textContent === 'Read') {
      dispatch(openSplit('close'));
      setFilterOption('read')
      activeClassFixture(e.target);
    }
    if (e.target.textContent === 'Favorites') {
      dispatch(openSplit('close'));
      setFilterOption('favorite')
      activeClassFixture(e.target);
    }
  }

  const customFilter = (emails) => {
    if (filterOption === 'read') {
      return emails.filter(em => em.isRead === true);
    }
    if (filterOption === 'unread') {
      return emails.filter(em => em.isRead === false);
    }
    if (filterOption === 'favorite') {
      return emails.filter(em => em.isFavorite === true);
    }
    if (filterOption === 'all') {
      return emails;
    }
  }

  useEffect(() => {
    fetch('https://flipkart-email-mock.now.sh/').then(res => res.json()).then((res) => dispatch(add(res?.list)));
  }, []);

  return (
    <div className="App">
      <div className="filterOptions" onClick={(e) => filterOptionUpdater(e)}>
        Filtr By:
        <span className='active'>All</span>
        <span >Unread</span>
        <span>Read</span>
        <span>Favorites</span>
      </div>
      <div className="emailContainer">
        <div className="emailsList" style={splitInfo.split ? {} : { flex: '1' }}>
          {/* {(filteredEmails ? filteredEmails : emails)?.map(item => (
            <Email
              key={item.id}
              data={item}
              splitInfo={splitInfo}
            />))
          } */}
          {customFilter(emails).map(item => (
            <Email
              key={item.id}
              data={item}
              splitInfo={splitInfo}
            />))
          }
        </div>
        {
          splitInfo.split ? (< DetaildEmail data={splitInfo} />) : (<></>)
        }
      </div>

    </div>
  );
}

export default App;
