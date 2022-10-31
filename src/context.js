import React, { Component } from 'react'

const BookContext = React.createContext(); 
//provider ve consumer vericek
const reducer = (state,action)=>{
  console.log(action.payload);
  switch(action.type){
    case "DELETE_BOOK":
      return{
        
        ...state, //state = books (js operation)
        books: state.books.filter(book => action.payload !== book.id )
      }
    case "ADD_BOOK":
      return{
        ...state,
        books: [...state.books,action.payload] //action.payloadi state.booksa ekle
      }
    default:
      return state
  }
}

export class BookProvider extends Component {
    state = {
        books : [
          { title : "Book",
            about : " dfghjkl "
          },
           
          {
            title : "Book2",
            about : " dgdsfghjkl "
          }
           
        ],
        dispatch : action =>{
            this.setState (state => reducer(state,action))
        }
      }
   
    render() {
        return (
            <BookContext.Provider value = {this.state}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}
const BookConsumer = BookContext.Consumer;
export default BookConsumer;
//rcc