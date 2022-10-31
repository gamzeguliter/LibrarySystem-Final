import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookConsumer from '../context'
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
class Book extends Component {
    constructor(props){
        
        super(props);

        this.onClickEvent = this.onClickEvent.bind(this)
        this.state = {
            test :"Test",
            isVisible : false
        }
    }

    onClickEvent(e){
       this.setState({
           isVisible : !this.state.isVisible
       })
    }
    
    onDeleteBook= (dispatch,e)=>{
      const {id} = this.props;
      dispatch({type :"DELETE_BOOK",payload :id});
     }
    
    render() {
        const {title,about}= this.props;
        const {isVisible}  = this.state;
        return (
            <BookConsumer>
                {
                    value => {
                        const {dispatch} = value;
                         return (
                            <div className = "col-md-8 mb-4">
                                <div className = "card" style = {{backgroundColor : "white"}}>
                                    <div  className = "card-header d-flex justify-content-between" style = {{backgroundColor : "#F98B88"}} >
                                        <h4 className = "d-inline"  onClick = {this.onClickEvent} style ={{color : "white"}} >{this.props.title}</h4>
                                        <Button variant="link"  onClick = {this.onDeleteBook.bind(this,dispatch)} style ={{backgroundColor : "#659EC7", color:"white"}}>Delete Book</Button>
                                    </div>
                                    <div className = "card-body">
                                    <p className = "card-text">About the Book :{this.props.about}</p>
                                    <p className = "card-text">Test Line :{this.state.test}</p>
                                    
                                    </div>
                                </div>
                            </div>
                    )
                    }
                }
            </BookConsumer>
        )
       
    }
}

Book.propTpes = {
    title : PropTypes.string.isRequired,
    about :  PropTypes.string.isRequired
}

export default Book;


















//rcc diyince cıktı
/*
     <form>
                <input type="text" />
                <button>Günder</button>
                </form>
*/
/*




*/