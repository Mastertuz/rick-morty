import FilterBtn from '../FilterBtn';

const GenderFilter = ({ setGender, setPageNumber }) => {
  const gendersName = ['Женщина', 'Мужчина', 'Без пола', 'Неизвестно'];
  const genders = ['Female', 'Male', 'Genderless', 'Unknown'];

  return (
    <div className="filters__item gender">
      <h6 className="filters__item-title">Пол</h6>
      {genders.map((item, index) => (
        <FilterBtn
          setPageNumber={setPageNumber}
          key={index}
          index={index}
          name="gender"
          task={setGender}
          statusName={gendersName[index]}
          item={item}
        />
      ))}
    </div>
  );
};

export default GenderFilter;
