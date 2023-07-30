import FilterBtn from '../FilterBtn';
const SpeciesFilter = ({ setPageNumber, setSpecies }) => {
  const speciesName = [
    'Человек',
    'Пришелец',
    'Гуманоид',
    'Задница',
    'Мифологическое существо',
    'Неизвестно',
    'Животное',
    'Робот',
    'Кроненберг',
  ];
  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Robot',
    'Cronenberg',
  ];
  return (
    <div className="filters__item species">
      <h6 className="filters__item-title">Вид</h6>
      {species.map((item, index) => (
        <FilterBtn
          setPageNumber={setPageNumber}
          key={index}
          index={index}
          name="species"
          task={setSpecies}
          statusName={speciesName[index]}
          item={item}
        />
      ))}
    </div>
  );
};

export default SpeciesFilter;
