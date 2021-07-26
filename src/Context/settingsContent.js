import React, { createContext, useState } from 'react'

export const SettingContext = createContext()

const SettingsContentProvider = (props) => {

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)


    function startTimer() {
        setStartAnimate(true)
    }

    function pauseTimer() {
        setStartAnimate(false)
    }

    function stopTimer() {
        setStartAnimate(false)
    }

    const settingsBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    const updateExecute = (updatedSettings) => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    const setTimerTime = evalute => {
        switch (evalute.active) {
            case 'work':
                setPomodoro(evalute.work)
                break;
            case 'short':
                setPomodoro(evalute.short)
                break;
            case 'long':
                setPomodoro(evalute.long)
                break;
            default:
                setPomodoro(0)
                break;
        }
    }

    const setZero = (n) => n < 10 ? '0' + n : n
    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60


        return `${setZero(minutes)}:${setZero(seconds)}`
    }

    return (
        <SettingContext.Provider
            value=
            {{
                stopTimer,
                updateExecute,
                pomodoro,
                executing,
                startAnimate,
                startTimer,
                pauseTimer,
                settingsBtn,
                updateExecute,
                children,
                setCurrentTimer

            }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingsContentProvider
