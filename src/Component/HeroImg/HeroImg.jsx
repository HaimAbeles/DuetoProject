import './HeroImg.css';
import HeroImage from '../../assets/hero.png';


function Img() {
  return (
    <div className='hero-container'>
      <div className='img-hero-container'>
        <img src={HeroImage} className='hero-img' />
      </div>
    </div>
  );
}

export default Img;
