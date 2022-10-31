import React, { Component } from 'react'
import Book from "./Book";
import BookConsumer from '../context';
export default class Books extends Component {
    render() {
        return(
        <BookConsumer>
            {   
                value => { // value == this.state
                    const {books} = value;
                    return (
                        <div>
                        {
                            
                            books.map(book => {
                               return(
                                <Book
                                    title = {book.title}
                                    about = {book.about}
                                />
                                )
                            })
                         
                        }
                        </div>
                    )

                }
            }
        </BookConsumer>
        
        
        )
    
    }
}
