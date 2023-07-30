const FilterBtn = ({ name, index,item ,statusName,task,setPageNumber}) => {
  return (
    <div className="filters__item-box">
      <input onClick={()=>{setPageNumber(1) ;task(item)}} className="filters__item-input" name={name} type="radio" 
      id={`${name}-${index}`
    } />
      <label className="filters__item-name" htmlFor={`${name}-${index}`}>
        {statusName}
      </label>
    </div>
  );
};

export default FilterBtn;
