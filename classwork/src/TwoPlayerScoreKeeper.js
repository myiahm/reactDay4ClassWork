import React, {Component} from 'react'
import ScoreButton from "./ScoreButton";

class TwoPlayerScoreKeeper extends Component{
    render()
    {
        return(

                <span><ScoreButton/><ScoreButton/></span>

            


        );
    }
}

export default TwoPlayerScoreKeeper;