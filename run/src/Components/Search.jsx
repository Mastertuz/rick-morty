const Search = ({searchValue,setSearchValue,setPageNumber}) => {
    return ( 
        <div className="search">
        <input className="search__input" type="text" placeholder="Поиск" value={searchValue} onChange={(e)=>{
          setPageNumber(1)
          setSearchValue(e.target.value)}
        } />
      </div>
     );
}
 
export default Search;