import { useContext, useState } from 'react';
import Filter from '../Components/Filters/Filter';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Item from '../Components/Item';
import Pagination from '../Components/Pagination';
import Search from '../Components/Search';
import { AppContext } from '../App';
import GoTopBtn from '../Components/GoTopBtn';
const Home = () => {
  const {
    setPageNumber,
    setSearchValue,
    searchValue,
    setStatus,
    setSpecies,
    setGender,
    info,
    results,
    pageNumber,
  } = useContext(AppContext);
 
  
  return (
    <>
      <Header />
      <div className="container">
        <main className="main" id="header">
          <div className="main__inner">
            
            <h2 className="main__title">Персонажи</h2>
            <Search
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setPageNumber={setPageNumber}
            />
            <section className="content">
              <div className="content__inner">
                <Filter
                  setStatus={setStatus}
                  setSpecies={setSpecies}
                  setGender={setGender}
                  setPageNumber={setPageNumber}
                />
                <div className="content__items">
                  {results && results.map((item) => <Item key={item.id} {...item} />)}
                </div>
              </div>
            </section>
          </div>
        </main>
        <GoTopBtn/>
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
