import React, {Component} from 'react'

class ScoreButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
            click: 0,
        }
    }
    handleCLickButton = (event) => {
        console.log({this.props.text});
    }

    render()
        {
        return (
            <div>
                <button onClick=
                            {this.handleClickButton}>{this.props.text}</button>
            </div>
        );
    }
}

export default ScoreButton;