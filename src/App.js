import './App.css';
import Countdown from 'react-countdown';
import DateBox from "./DateBox";
import {useState} from 'react';
import imgOne from "./assets/1.jpg";
import musicIcon from './assets/karaoke.png';
function App() {

    const [song, setSong] = useState([]);
    const [img, setImg] = useState([])
    const [isOpen, setIsOpen] =useState(false)
    var comeBack = new Date(2021,3,18);
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({days,hours, minutes, seconds, completed }) => {
        return  (
            <div className="count__boxes">
                <DateBox num={days} info={"days"} />
                <DateBox num={hours}  info={"hours"}/>
                <DateBox num={minutes}  info={"min"}/>
                <DateBox num={seconds}  info={"sec"} />
            </div>

        )
    }

    function displayMeme() {
        if(!isOpen) {
            return (
                <button onClick={() => setIsOpen(true)} className={!isOpen ? "button" : "button-hidden"}>
                        GET READY FOR MEME!
                </button>
                )

        }  else {
            return (
                <div className={"meme__holder"}>
                    <img className={"meme"} src={imgOne} alt="memendo meme"/>
                </div>
                )
        }
    }

  return (
      <>
          <div className={"bg__filter"}>

          </div>
    <div className="App">

        <section className={"counter"}>
        <h1 className={"heading"}> YOUR ADVENTURE & COCONUT TIME! </h1>
            {/*<span className={"cross__word"}>ADVENTURE</span>*/}
      <Countdown
          date={comeBack}
          renderer={renderer}
      />
      <div className={"song"}>
      <img src={musicIcon} />   Music from onion climate:  <img src={musicIcon} />
          <br/>
          <a href="https://youtu.be/1H-LqG14JTw"
             target="_blank" rel="noopener noreferrer"
             className="song__link">Feel the chilleo vibeo</a>
      </div>
            {displayMeme()}

        </section>

    </div>
          </>
  );
}

export default App;
