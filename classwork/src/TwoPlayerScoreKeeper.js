import React, {Component} from 'react'
import ScoreButton from "./ScoreButton";

class TwoPlayerScoreKeeper extends Component{
    render()
    {
        return(
            <div>
                <ScoreButton/>
                <ScoreButton/>

            </div>


        );
    }
}

export default TwoPlayerScoreKeeper;