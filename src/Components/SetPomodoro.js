import React, { useContext, useState } from 'react'
import { SettingContext } from '../Context/settingsContent'
import Button from './Button'
const SetPomodoro = () => {
    const { updateExecute } = useContext(SettingContext)

    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 10,
        active: 'work'
    })

    const handleChange = input => {
        const { name, value } = input.target
        switch (name) {
            case "work":
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case "shortBreak":
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case "longBreak":
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate>
                <div className="input-wrapper">
                    <input className="input" type="number" name="work" onChange={handleChange} value={newTimer.work} />
                    <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                <Button title="Set Timer" _callback={handleSubmit} />
            </form>
        </div>
    )
}

export default SetPomodoro
