import './Rocket.css';
import RocketImage from '../../assets/rocket.png';

function Rocket() {
  return (
    <div className='rocket-container'>
      <div className='img-rocket-container'>
        <img src={RocketImage} className='rocket-img' />
      </div>
    </div>
  );
}

export default Rocket;
