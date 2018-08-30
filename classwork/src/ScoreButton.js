import React, {Component} from 'react'

class ScoreButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
            click: 0,
        }
    }
    handleClickButton = (event) => {

this.setState({click: this.state.click+=1})   }

    render()
        {
        return (

                <span><button onClick=
                            {this.handleClickButton}>Click</button>
                    {this.state.click}</span>

        );
    }
}

export default ScoreButton;