import React, {Component} from 'react'
import DisplayAlien from './DisplayAlien';

class AlienCharachter extends Component {
    constructor(props) {
        super(props);
        this.state = {alien:[{name: "",planet:"",size: ""} ],
            name: "",
            planet: "",
            size: ""
        }
    }

    nameChange = (event) => {
        this.setState({name: event.target.value});

    }
    planetChange = (event) => {
        this.setState({planet: event.target.value});
    }
    sizeChange = (event) => {
        this.setState({size: event.target.value});
    }



        submitFunction = (event) => {
        let newCollection ={ name: this.state.name, planet: this.state.planet, size: this.state.size}
        this.state.alien.push(newCollection);
        this.setState({alien: this.state.alien,
            name: "",
            planet:"",
            size: ""

        })

        event.preventDefault(); //prevents page from reloading
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitFunction}>
                    <h1>Alien Log</h1>
                    <label htmlFor="bookTitle">Alien Info: </label>
                    <br/>
                    <input type="text" placeholder="name" value={this.state.name}
                           onChange={this.nameChange}/>
                    <br/>
                    <input type="text" placeholder="planet" value={this.state.planet}
                           onChange={this.planetChange}/>
                    <br/>
                    <input type="text" placeholder="size" value={this.state.size}
                           onChange={this.sizeChange}/>
                    <button>Submit</button>
                    <br/>
                </form>
                <DisplayAlien alien={this.state.alien}/>

            </div>
        );
    }
};

export default AlienCharachter;