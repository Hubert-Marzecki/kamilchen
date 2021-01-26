import './App.css';
import Countdown from 'react-countdown';
import DateBox from "./DateBox";
import {useState, useEffect} from 'react';
import imgOne from "./assets/1.jpg";
import musicIcon from './assets/karaoke.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {linkGallery} from "./assets/linkGallery";
import imgTwo from './assets/2.jpg'

import imgThree from './assets/3.jpg'
import imgFour from './assets/3a.png'
import imgFive from './assets/5.png'


function App() {
useEffect(() => {
    AOS.init({once: true});
},[])
    const [song, setSong] = useState(["1", "2", "3", "4"]);
    const [img, setImg] = useState([])
    const [isOpen, setIsOpen] =useState(false);
    const [date,setDate] = useState("")

    var comeBack = new Date(2021,3,18);
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({days,hours, minutes, seconds, completed }) => {
        setDate(days)
        return  (
            <div className="count__boxes">
                <DateBox num={days} info={"days"} deley={"0"}/>
                <DateBox num={hours}  info={"hours"} deley={"100"}/>
                <DateBox num={minutes}  info={"min"} deley={"200"}/>
                <DateBox num={seconds}  info={"sec"} deley={"400"}/>
            </div>
        )
    }

    const memes = [imgFour]

    function changeSong() {
        return linkGallery[date]
    }

    function displayMeme() {
        if(!isOpen) {
            return (
                <button onClick={() => setIsOpen(true)} className={!isOpen ? "button" : "button-hidden"}>
                        TRUE STORY
                </button>
                )

        }  else {
            return (
                <div className={"meme__holder"} data-aos="flip-down">
                    {memes.map((meme) => {
                        return <img className={"meme"} src={meme} alt="memendo meme"/>
                    } )}

                    {/*<img className={"meme"} src={imgTwo} alt="memendo meme"/>*/}
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
      {/*<img src={musicIcon} />  */}
      Sky will fall upon infidels
          {/*<img src={musicIcon} />*/}
          <br/>
          <a href="https://www.youtube.com/watch?v=DeumyOzKqgI"
             target="_blank" rel="noopener noreferrer"
             className="song__link">Ready?</a>
      </div>
            {displayMeme()}

        </section>

    </div>
          </>
  );
}

export default App;
