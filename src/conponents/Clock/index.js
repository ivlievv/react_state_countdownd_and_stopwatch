import React from "react";
import styles from './styles.module.css'
import Toggle from "../Toggle";
import classNames from 'classnames'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),

        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {

        let button ;


        return (
            <div className={styles.container}>
                <h2 className={styles.time}>{this.state.date.toLocaleTimeString()}</h2>
                <Toggle/>
            </div>
        );
    }
}

export default Clock;