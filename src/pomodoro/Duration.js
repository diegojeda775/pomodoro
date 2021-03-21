import React from 'react';
import { minutesToDuration } from '../utils/duration/index';

export default function Duration(props){
    const { 
        timeModeMaster, 
        setTimeModeMaster, 
        isTimerRunning
    } = props;
    const { 
        focusCurrent, 
        breakCurrent, 
        focusChange, 
        focusMin, 
        focusMax, 
        breakMin, 
        breakMax, 
        breakChange 
    } = timeModeMaster;

    const btnHandler = (type) => {
        if(type === 'fMinus'){
            if(focusCurrent > focusMin && focusCurrent <= focusMax){
                const update = focusCurrent - focusChange;
                setTimeModeMaster({...timeModeMaster, focusCurrent: update, focusCount: update * 60 });
            }
        }
        if(type === 'fPlus'){
            if(focusCurrent >= focusMin && focusCurrent < focusMax){
                const update = focusCurrent + focusChange;
                setTimeModeMaster({...timeModeMaster, focusCurrent: update, focusCount: update * 60 });
            }

        }
        if(type === 'bMinus'){
            if(breakCurrent > breakMin && breakCurrent <= breakMax){
                const update = breakCurrent - breakChange;
                setTimeModeMaster({...timeModeMaster, breakCurrent: update, breakCount: update * 60 });
            }
        }
        if(type === 'bPlus'){
            if(breakCurrent >= breakMin && breakCurrent < breakMax){
                const update = breakCurrent + breakChange;
                setTimeModeMaster({...timeModeMaster, breakCurrent: update, breakCount: update * 60 });
            }
        }
    }

    return (
        <div className="row">
            <div className="col">
            <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-focus">
                    Focus Duration: {minutesToDuration(focusCurrent)}
                </span>
                <div className="input-group-append">
                {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-focus"
                    onClick={() => btnHandler('fMinus')}
                    disabled={isTimerRunning}
                >
                    <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-focus"
                    onClick={() => btnHandler('fPlus')}
                    disabled={isTimerRunning}
                >
                    <span className="oi oi-plus" />
                </button>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="float-right">
            <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-break">
                    Break Duration: {minutesToDuration(breakCurrent)}
                </span>
                <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-break"
                    onClick={() => btnHandler('bMinus')}
                    disabled={isTimerRunning}
                >
                    <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-break"
                    onClick={() => btnHandler('bPlus')}
                    disabled={isTimerRunning}
                >
                    <span className="oi oi-plus" />
                </button>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
}