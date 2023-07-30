import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './Pages/Details';
import Home from './Pages/Home';
export const AppContext = createContext(null);

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const { info, results } = fetchedData;
  const apiLink = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchValue}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(apiLink);
        setFetchedData(data.data);
      } catch (err) {
        alert('произошла ошибка при загрузке данных,возможно,вы неправильно ввели имя персонажа', err);
      }
    }
    fetchData();
  }, [apiLink]);
  return (
    <AppContext.Provider value={{setPageNumber,setSearchValue,searchValue,setStatus,setSpecies,setGender,info,results,pageNumber}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/:id" element={<Details />} exact />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
