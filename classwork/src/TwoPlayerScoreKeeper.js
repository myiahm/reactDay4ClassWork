import React, {Component} from 'react'
import ScoreButton from "./ScoreButton";

class TwoPlayerScoreKeeper extends Component{
    render()
    {
        return(
            <div>
                <ScoreButton text={text}/>
                <ScoreButton text={text}/>
            </div>


        );
    }
}

export default TwoPlayerScoreKeeper;