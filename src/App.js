import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ResponsivePie from './components/Chart'
import figureBack from './figure.svg'


function App() {
  const [colorsObject, setColorsObject] = useState({
    purple: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    orange: 0,
    red: 0,
    grey: 0,
    white: 0
  })

  const [counter, setCounter] = useState(60)
  const [colorBack, setColorBack] = useState('')
  const [delay, setDelay] = useState(1000)
  const [isRunning, setIsRunning] = useState(true);
  const [clicks, setClicks] = useState(0)
  const [showChart, setShowChart] = useState(false)
  const [chartVisible, setChartVisible] = useState(false)

  const assignColor = (seconds) => {
    if (seconds <= 60 && seconds >= 52) {
      setColorsObject({ ...colorsObject, purple: colorsObject.purple + 1 })
      setColorBack('purple')
     } else if (seconds >= 42) {
      setColorsObject({ ...colorsObject, blue: colorsObject.blue + 1 })
      setColorBack('blue')
    } else if (seconds >= 32) {
      setColorsObject({ ...colorsObject, green: colorsObject.green + 1 })
      setColorBack('darkgreen')
    } else if (seconds >= 22) {
      setColorsObject({ ...colorsObject, yellow: colorsObject.yellow + 1 })
      setColorBack('yellow')
    } else if (seconds >= 12) {
      setColorsObject({ ...colorsObject, orange: colorsObject.orange + 1 })
      setColorBack('orange')
    } else if (seconds >= 0) {
      setColorsObject({ ...colorsObject, red: colorsObject.red + 1 })
      setColorBack('red')
    } else if (seconds < 0) {
      setColorsObject({ ...colorsObject, grey: colorsObject.grey + 1 })
      setColorBack('grey')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('colors')) {
      let item = JSON.parse(localStorage.getItem('colors'))
      setColorsObject(item)
     }
  }, [])

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colorsObject))
  }, [colorsObject])

  useInterval(() => {
    setCounter(counter - 1);
  }, isRunning ? delay : null);

  const  handleDelayChange = (e) => {
    if (clicks === 0 && counter >= 0) {
      assignColor(counter)
      setCounter(60)
      setClicks(1)
    }
  }


  useEffect(() => {
    if (counter < 0 && clicks === 0) {
      assignColor(counter)
      setClicks(1)
      setIsRunning(null)
      setShowChart(true)
    } else if (counter < 0 && clicks >= 0) {
      setDelay(null)
      setShowChart(true)
    }
  }, [counter])


  const stadisticsButton = () => {
    return (
      <>
        <button className="button button-stadistics" onClick={() => setChartVisible(!chartVisible)} type="button"   > Stadistics </button>
        {chartVisible ?
          <div className="chart-container">
            <ResponsivePie dataColours={colorsObject} />
          </div>
          : null}
      </>
    )
  }


  return (
    <>
      <div className="main-body"   >
        <img src={figureBack} alt="background" className="figureBack"></img>
        {
          counter > 0 ?
            <h1 className="counter" > {counter}</h1> :
            <h1 className="counter" > 0 </h1>
        }

        {
          clicks === 0 ?
            <button className="button" type="button" onClick={() => handleDelayChange()} style={{ borderColor: `${colorBack}`, color: `${colorBack}` }}> Click Me </button>
            :
            <button className="button" type="button" onClick={() => handleDelayChange()} style={{ borderColor: `${colorBack}`, color: `${colorBack}`, backgroundColor: 'transparent' }}> Click Me </button>

        }

      </div>

      {showChart ? stadisticsButton() : null}

    </>

  );
}

/* */

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default App;
