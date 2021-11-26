import React, {Component} from 'react';

class Countdown extends Component {
    static propTypes: { date: string };
    private interval: NodeJS.Timer | undefined;

    constructor(props: string) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let date: boolean | { sec: number; hours: number; min: number; days: number; years: number };
            // @ts-ignore
            date = this.calculateCountdown(this.props.date);
            date ? this.setState(date) : this.stop();
        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate: Date) {
        let diff = (Date.parse(new Date(endDate).toString()) - Date.parse(new Date().toString())) / 1000;

        if (diff <= 0) return false;

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0
        };

        if (diff >= (365.25 * 86400)) {
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    stop() {
        clearInterval(this.interval as NodeJS.Timeout);
    }

    addLeadingZeros(value: string | any[]) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

    render() {
        // @ts-ignore
        const {days, hours, min, sec} = this.state;


        return (
            <div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
              <strong>{this.addLeadingZeros(days)}</strong>
              <span>{days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

                <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(hours)}</strong>
            <span>Hours</span>
          </span>
        </span>

                <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(min)}</strong>
            <span>Min</span>
          </span>
        </span>

                <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(sec)}</strong>
            <span>Sec</span>
          </span>
        </span>
            </div>
        );
    }
}

export default Countdown;