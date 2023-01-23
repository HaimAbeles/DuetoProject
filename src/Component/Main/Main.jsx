
import './Main.css';
import Rocket from '../Rocket/Rocket';
import MsgMars from '../MsgMars/MsgMars';
import HeroImg from '../HeroImg/HeroImg';
import Timer from '../Timer/Timer';


function Main() {

  return (
    <div className='main'>
      <div className='top-container'>
        <Rocket />
      </div>
      <div className='middle-container'>
        <MsgMars />
        <HeroImg />
      </div>
      <div className='footer-container'>
        {Array.from(new Array(3)).map((x, i) => <Timer indexTimer={i} key={i} />)}
      </div>
    </div>
  );
}

export default Main;
