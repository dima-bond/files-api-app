import { useEffect, useMemo, useState } from 'react';
import { bake_cookie, read_cookie } from 'sfcookies';
import { FilesList } from './components/FilesList/FilesList';
import { dateFromString, compareSize } from './components/helpers';
import './App.css';

function App() {

  const [files, setFiles] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [isReverse, setIsReverse] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [serverError, setserverError] = useState(false);

  useEffect(() => {
    fetch('https://fs.mh.net.ua/ajax/lsjson.php?dir=global/video&idu=1')
      .then(response => response.json())
      .then(result => {
        setFiles(result)
        setFilteredFiles(result)
        setSortBy(read_cookie('sortCookie'))
      })
      .catch(() => setserverError(true));
  }, []);

  useMemo (() => {
    let filesToShow = [...filteredFiles];
    switch(read_cookie('sortCookie')) {
      case 'name':
        filesToShow.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'size':
        filesToShow.sort((a, b) => compareSize(a.size_now) - compareSize(b.size_now));
        break;

      case 'created':
        filesToShow.sort((a, b) => dateFromString(a.ctime) - dateFromString(b.ctime));
        break;

      default:
        break;
    };

    setFilteredFiles(filesToShow);
  }, [files, sortBy]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
    bake_cookie('sortCookie', e.target.value);
    setSearchQuery('')
    setIsReverse(false);
  };

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleReverse = () => {
    const reversed = [...filteredFiles].reverse()
    setFilteredFiles(reversed)
    setIsReverse(prev => !prev)
  };

  useMemo(() => {
    const tmpFilter = files.filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()));

    setFilteredFiles(tmpFilter)
  }, [searchQuery]);

  return (
    <div className="App">
      <div className="header">
        <select
          name="sortBy"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="" disabled>Sort by</option>
          <option value="name">Name</option>
          <option value="size">Size</option>
          <option value="created">Created</option>
        </select>
        <button 
          type="button"
          onClick={handleReverse}
          className="header__button"
        >
          {isReverse ? `Ascending order` : 'Descending order'} &#8594;
        </button>
        <input 
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleInput}
          placeholder="Search file by name"
        />
      </div>
      {(serverError)
        ? <h2>
            Server is temporarily unavailable. <br/>
            Please, try again later.
          </h2>
        : (filteredFiles.length === 0) ?
          <h2>No files were found...</h2>
          : <FilesList files={filteredFiles}/>
          }
    </div>
  );
}

export default App;
