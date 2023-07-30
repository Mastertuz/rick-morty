import { useState } from 'react';
import GenderFilter from './Categories/Gender';
import SpeciesFilter from './Categories/Species';
import StatusFilter from './Categories/Status';

const Filter = ({ setPageNumber, setStatus, setSpecies, setGender }) => {
  const clearFilter = () => {
    setStatus('');
    setSpecies('');
    setPageNumber(1);
    setGender('');
    window.location.reload(false);
  };
  const [filterMenu, setFilterMenu] = useState(false);
  const openFilter = () => {
    setFilterMenu(!filterMenu);
  };
  let body = document.querySelector("body");
  body.classList = filterMenu ? "overflow" : "";

  return (
    <>
      <button onClick={()=>openFilter()} className="filterOpener">
        <img src="images/menuOpen.svg" alt="burger" />
      </button>
      <div className={`filters ${filterMenu ? 'show' : 'hide'}`}>
        <div onClick={() => clearFilter()} className="filters__reset">
          очистить фильтры
        </div>
        <div className="filters__inner">
          <StatusFilter setPageNumber={setPageNumber} setStatus={setStatus} />
          <GenderFilter setPageNumber={setPageNumber} setGender={setGender} />
          <SpeciesFilter setPageNumber={setPageNumber} setSpecies={setSpecies} />
        </div>
      </div>
    </>
  );
};

export default Filter;
