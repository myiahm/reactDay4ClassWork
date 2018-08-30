import React, {Component} from 'react'
import DisplayBooks from "./DisplayBooks";

class Kindle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            bookName: "", numberOfStars: "", imageUrl: ""
        }

    }

    bookNameChange = (event) => {
        this.setState({bookName: event.target.value});
    }
    numberOfStarsChange = (event) => {
        this.setState({numberOfStars: event.target.value});
    }
    imageUrlChange = (event) => {
        this.setState({imageUrl: event.target.value});
    }
    submitFunction = (event) => {
        let newCollection = {
            bookName: this.state.bookName,
            numberOfStars: this.state.numberOfStars,
            imageUrl: this.state.imageUrl
        };
        this.state.books.push(newCollection);
        this.setState({
            books: this.state.books,
            bookName: "",
            numberOfStars: "",
            imageUrl: ""

        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitFunction}>
                    <h1>Kindle Collection</h1>
                    <label htmlFor="bookName">Books</label>
                    <br/>
                    <input type="text" placeholder="BookName" value={this.state.bookName}
                           onChange={this.bookNameChange}/>
                    <br/>
                    <input type="text" placeholder="numberOfStars" value={this.state.numberOfStars}
                           onChange={this.numberOfStarsChange}/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="imageUrl" value={this.state.imageUrl}
                           onChange={this.imageUrlChange}/>
                    <button>Submit</button>
                    <br/>
                </form>
                <DisplayBooks books={this.state.books}/>
            </div>
        );
    }
}

export default Kindle;