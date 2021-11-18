import EmployersListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const EmployersList = () => {
  return (
    <ul className="app-list list-group">
      <EmployersListItem name="Max" lastname="Bilanych" />
      <EmployersListItem name="Max" lastname="Bilanych"/>
      <EmployersListItem name="Max" lastname="Bilanych"/>
    </ul>
  );
};

export default EmployersList;