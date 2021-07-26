import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../Context/settingsContent'

const CountdownAnimation = ({ key, timer, animate, children }) => {

    const { stopTimer } = useContext(SettingContext)

    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={[
                ["#FE6F6B", 0.33],
                ["#FE6F6B", 0.33],
                ["#FE6F6B", 0.33],

            ]}
            strokeWidth={6}
            size={220}
            trailColor="#151932"
            onComplete={() => {
                stopTimer()
            }}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default CountdownAnimation
