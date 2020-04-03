import React, {Component} from "react";
import styles from './styles.module.css'

export default class Toggle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        }
    }

    handleClick = () => {
        this.setState(state =>({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return(
            <button
                className={styles.toggle}
                onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Включено' : 'Виключено'}
            </button>
        )
    }


}