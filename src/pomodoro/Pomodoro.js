import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import ActiveDisplay from "./ActiveDisplay";
import Duration from "./Duration";
import PlayPause from "./PlayPause";


function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeModeMaster, setTimeModeMaster] = useState({
    focusCurrent: 25,
    focusMin: 5,
    focusMax: 60,
    focusChange: 5,
    focusCount: 25*60,
    breakCurrent: 5,
    breakMin: 1,
    breakMax: 15,
    breakChange: 1,
    breakCount: 5*60,
    mode: 'Initial',
  });

  const { focusCurrent, focusCount, breakCurrent, breakCount, mode } = timeModeMaster;

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      if(focusCount === 0){
        setTimeModeMaster({...timeModeMaster, focusCount: focusCurrent * 60, mode: 'Break'});
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
      } else if(breakCount === 0){
        setTimeModeMaster({...timeModeMaster, breakCount: breakCurrent * 60, mode: 'Focus'});
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
      } else if(mode === 'Focus'){
        setTimeModeMaster({...timeModeMaster, focusCount: focusCount - 1});
      } else if(mode === 'Break'){
        setTimeModeMaster({...timeModeMaster, breakCount: breakCount - 1});
      }
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState)
    setTimeModeMaster({...timeModeMaster, mode: 'Focus'});
  }

  return (
    <div className="pomodoro">
      <Duration 
        isTimerRunning={isTimerRunning} 
        timeModeMaster={timeModeMaster}
        setTimeModeMaster={setTimeModeMaster}
        />
      <PlayPause 
        playPause={playPause} 
        timeModeMaster={timeModeMaster} 
        isTimerRunning={isTimerRunning}
        setTimeModeMaster={setTimeModeMaster}
        setIsTimerRunning={setIsTimerRunning}
        />
      <ActiveDisplay timeModeMaster={timeModeMaster}/>
    </div>
  );
}

export default Pomodoro;
