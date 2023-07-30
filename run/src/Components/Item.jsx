import { Link } from "react-router-dom";

const Item = ({name,gender,image,status,id}) => {
    return (  
        <div className="content__item">
          <Link to={`${id}`}>
        <img className="content__item-img" src={image} alt="characterImg"/>
        {(()=>{
          if(status === 'Dead'){
            return (
              <div className="status-badge dead">{status}</div>
              ) 
            }else if(status ==='Alive'){
              return ( <div className="status-badge alive">{status}</div>)
            } else if(status === 'unknown'){
              return ( <div className="status-badge unknown">{status}</div>)
            }
        })()}
         <h4 className="content__item-name">
         {name}
         </h4>
         <p className="content__item-gender">
           {gender}
         </p>
         </Link>
       </div>
    );
}
 
export default Item;