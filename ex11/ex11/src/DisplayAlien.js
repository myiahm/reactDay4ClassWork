import React, {Component} from 'react'

class DisplayAlien extends Component {

    render(){
        var alienArray = this.props.alien.map(
            eachItem => {
                return(
                    <div>
                        <p>Name:  {eachItem.name} Planet: {eachItem.planet} Size: {eachItem.size} </p>

                    </div>
                )
            }
        )
        return(
            <div>
                <h2>{alienArray}</h2>
            </div>
        )
    }
}

export default DisplayAlien;