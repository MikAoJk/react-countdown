import React, {useEffect, useState} from 'react';

const calculateCountdown = (secondsLeft: number | null) => {
    if (!secondsLeft) return null

    const diff = (secondsLeft - new Date().getTime()) / 1000;

    if (diff <= 0) return null;

    return diff;
}

interface CalculatedTimeLeft {
    sec: number;
    hours: number;
    min: number;
    days: number;
    years: number
}

const timeLeft = (seconds: number) => {
    const timeLeft: CalculatedTimeLeft = {
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0
    };

    if (seconds >= (365.25 * 86400)) {
        timeLeft.years = Math.floor(seconds / (365.25 * 86400));
        seconds -= timeLeft.years * 365.25 * 86400;
    }
    if (seconds >= 86400) { // 24 * 60 * 60
        timeLeft.days = Math.floor(seconds / 86400);
        seconds -= timeLeft.days * 86400;
    }
    if (seconds >= 3600) { // 60 * 60
        timeLeft.hours = Math.floor(seconds / 3600);
        seconds -= timeLeft.hours * 3600;
    }
    if (seconds >= 60) {
        timeLeft.min = Math.floor(seconds / 60);
        seconds -= timeLeft.min * 60;
    }
    timeLeft.sec = seconds;

    return timeLeft;
}


interface CountdownProps {
    date: string;
}

const addLeadingZeros = (value: number) => {
    const stringValue = String(value);
    return stringValue.length < 2 ? '0' + stringValue : stringValue;
}

export const Countdown = ({date}: CountdownProps) => {
    const parsedDate = Date.parse(date);

    const [secondsLeft, setSecondsLeft] = useState(parsedDate)

    useEffect(() => {
            const interval = setInterval(() => {
                const tempCountdownDate: number | null = calculateCountdown(secondsLeft);
                tempCountdownDate && setSecondsLeft(tempCountdownDate);
            }, 1000);
            return () => clearInterval(interval)
        }
        , []
    )

    const {days, hours, min, sec} = timeLeft(secondsLeft);

    return (
        <div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
              <strong>{addLeadingZeros(days)}</strong>
              <span>{days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

            <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{addLeadingZeros(hours)}</strong>
            <span>Hours</span>
          </span>
        </span>

            <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{addLeadingZeros(min)}</strong>
            <span>Min</span>
          </span>
        </span>

            <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{addLeadingZeros(Math.floor(sec))}</strong>
            <span>Sec</span>
          </span>
        </span>
        </div>
    );

}

export default Countdown;