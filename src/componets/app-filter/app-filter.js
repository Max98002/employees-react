import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button 
        className="btn btn-light">
          Всі працівники
        </button>
      <button 
        className="btn btn-outline-light">
          Працівника на підвищення
        </button>
      <button 
        className="btn btn-outline-light">
          З/П більше 1000$
        </button>
    </div>
  );
};

export default AppFilter;