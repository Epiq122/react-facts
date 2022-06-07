import logo from '../../img/react-icon-small.png';
import './Nav.css';
function Nav() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='' className='img' />
      <h3 className='facts-header'>ReactFacts</h3>
      <h4 className='course-header'>React Course - Project 1</h4>
    </nav>
  );
}

export default Nav;
