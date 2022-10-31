import React, { Component } from 'react'
import BookConsumer from '../context';
import Book from '../context'
var uniqid = require('uniqid');
export default class AddBook extends Component {

    state = {
        title : "",
        about :""
    }
    changeTitle = (e) =>{

        this.setState({
            title : e.target.value
        })
    }
    changeAbout = (e) =>{
        this.setState({
            about : e.target.value
        })
        
    }
    changeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
            
        })
        
    }
    addBook =(dispatch,e) =>{
        e.preventDefault();
        const {title,about} =this.state;
        const newBook = {
            id:uniqid,
            title :title,
            about :about
        }
        dispatch({type:"ADD_BOOK",payload :newBook})

    }
    render() {
        const {title,about} = this.state;
        return <BookConsumer>
        {
            value => {
                const {dispatch } = value;
                return (
                    <div className = "col-md-8 mb-4">
                        <div className = "card-header"style = {{backgroundColor : "#659EC7" , color : "white"}}>
                            <h4 >Add New Book to the Library  </h4>
                            </div>
                            <div className = "card-body" style  ={{backgroudColor:"white"}}>
                                <form onSubmit = {this.addBook.bind(this,dispatch)}>
                                    <div className = "form-group">
                                        <label htmlForm = "title">Title</label>
                                        <input type = "text"
                                        name = "title"
                                        id ="id"
                                        placeholder = "Enter Book Title"
                                        class       ="form-control"
                                        value = {title}
                                        onChange ={this.changeInput}
                                        />
                                    </div>
                                    <div className = "form-group">
                                        <label htmlForm = "about">About</label>
                                        <input type = "text"
                                        name = "about"
                                        id ="about"
                                        placeholder = "About the Book.."
                                        class       ="form-control"
                                        value = {about}
                                        onChange ={this.changeInput}
                                        />
                                    </div>
                                    <button type ="submit" className =" btn btn-danger btn-block"style = {{backgroundColor : "#659EC7"}} >Add Book</button>
        
                                </form>
        
                            </div>
        
                        
                        
                    </div>
                )
            }
        }</BookConsumer>
        
    }
}