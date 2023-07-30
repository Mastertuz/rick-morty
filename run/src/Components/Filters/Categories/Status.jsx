import FilterBtn from '../FilterBtn';

const StatusFilter = ({ setPageNumber, setStatus }) => {
  const statusFetch = ['Alive','Dead','unknown'];
  const statusName =['Жив','Мертв','Неизвестно']
  return (
    <div className="filters__item status">
      <h6 className="filters__item-title">Статус</h6>
      {statusFetch.map((item, index) => (
        <FilterBtn
          setPageNumber={setPageNumber}
          key={index}
          index={index}
          name="status"
          task={setStatus}
          statusName={statusName[index]}
          item={item}
        />
        ))}
    </div>
  );
};

export default StatusFilter;
