import './App.css';
import Countdown from 'react-countdown';
import DateBox from "./DateBox";



function App() {
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
  return (
      <>
          <div className={"bg__filter"}>

          </div>
    <div className="App">

        <section className={"counter"}>
        <h1 className={"heading"}> YOUR <span className={"cross__word"}>ADVENTURE</span> COCONUT TIME! </h1>
      <Countdown
          date={comeBack}
          renderer={renderer}
      />
      <div className={"song"}>
         Music from onion climate:
          <br/>
          <a href="https://www.youtube.com/watch?v=zWq65etOM-M"
             target="_blank" rel="noopener noreferrer"
             className="song__link">You are a Pirate!</a>
      </div>

            <div className={"img__holder"}>
            </div>
        </section>

    </div>
          </>
  );
}

export default App;
