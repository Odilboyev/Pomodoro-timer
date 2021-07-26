import { Children, useContext, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "./Components/Button";
import CountdownAnimation from "./Components/CountdownAnimation";
import SetPomodoro from "./Components/SetPomodoro";
import { SettingContext } from "./Context/settingsContent";

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    children,
    settingsBtn,
    startAnimate,
    startTimer,
    updateExecute,
    pauseTimer } = useContext(SettingContext)

  useEffect(() => updateExecute(executing), [executing, startAnimate])
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive right way.</small>
      {pomodoro == 0 ?
        <SetPomodoro /> :
        <>
          <ul className="labels">
            <li>
              <Button title="Work"
                activeClass={executing.active == 'work' ? 'active-label' : undefined}
                _callback={() => setCurrentTimer('work')}
              />
            </li>

            <li>
              <Button title="Short Break"
                activeClass={executing.active == 'short' ? 'active-label' : undefined}
                _callback={() => setCurrentTimer('short')}
              />
            </li>

            <li>
              <Button title="Long Break"
                activeClass={executing.active == 'long' ? 'active-label' : undefined}
                _callback={() => setCurrentTimer('long')}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={settingsBtn} />
          <div className='time-container'>
            <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className="button-wrapper">
            {
              startAnimate ?
                <Button title="Pause" className={startAnimate && 'active'} _callback={pauseTimer} />
                :
                <Button title="Start" className={!startAnimate && 'active'} _callback={startTimer} />

            }

          </div>
        </>
      }
      {/* <CountdownAnimation /> */}
    </div>
  );
}

export default App;
