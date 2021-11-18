import './employers-add-form.css';

const EmployersAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Добавити нового працівника</h3>
      <form className="add-form d-flex">
        <input 
          type="text"
          className="form-control new-post-label"
          placeholder="Як його звати ?" />
        <input 
          type="text" 
          className="form-control new-post-label"
          placeholder="З/П в $?" />
        <button
          className="btn btn-outline-light">
            Додати
        </button>
      </form>
    </div>
  );
};

export default EmployersAddForm;