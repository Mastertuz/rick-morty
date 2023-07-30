import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import ItemDetails from '../Components/ItemDetails';
const Details = () => {
    
  return (
    <>
      <Header />
      <div className="container">
        <main className="main">
          <Link to={'/'} className="cardDetails__btn">
            Назад
          </Link>
          <ItemDetails />
        </main>
      </div>
    </>
  );
};

export default Details;
