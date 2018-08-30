import React, {Component} from 'react'

class DisplayBooks extends Component {

    render(){
        var bookArray = this.props.books.map(
            eachItem => {
                return(
                    <div>
                        <p>Book:  {eachItem.bookName} Rating: {eachItem.numberOfStars} Image URL: {eachItem.imageUrl} </p>

                    </div>
                )
            }
        )
        return(
            <div>
                <h2>{bookArray}</h2>
            </div>
        )
    }
}

export default DisplayBooks;