import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ItemDetails = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const { id } = useParams();
  const { name, status, gender, image, location, species } = fetchedData;
  const apiLink = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(apiLink);
        setFetchedData(data.data);
      } catch (err) {
        alert('произошла ошибка при загрузке данных', err);
      }
    }
    fetchData();
  }, [apiLink]);

  return (
    <div className="cardDetails">
      <div className="cardDetails__inner">
        <div className="cardDetails__img-box">
          <img className="cardDetails-img" src={image} alt="detailsImg" />
          <div className={`cardDetails__status status-badge ${status?.toLowerCase()}`}>
            {status}
          </div>
        </div>
        <div className="cardDetails__info">
          <h4 className="cardDetails__name">{name}</h4>
          <p className="cardDetails__text">{`gender : ${gender}`}</p>
          <p className="cardDetails__text">{`location : ${location?.name}`}</p>
          <p className="cardDetails__text">{`species : ${species}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
