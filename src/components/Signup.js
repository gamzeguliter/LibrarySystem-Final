import React, { Component } from 'react'
import  { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../AuthContext"
import {Link,useNavigate} from "react-router-dom"

export default function Signup () {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const navigation = useNavigate()
    
        async function handleSubmit(e){
            e.preventDefault()
            if(passwordRef.current.value !== passwordConfirmRef.current.value){
                return setError("Passwords do not match")
            }

            try{
                setError('')
                setLoading(true)
                await signup(emailRef.current.value,passwordConfirmRef.current.value)
                navigation("/")
                
            } 
            catch{
                setError('Cannot create an account')
            }

            setLoading(false)

          
        }

        return (
            <>
            <Card style = {{backgroundColor : "#659EC7"}}>
                <Card.Body>
                    <h2 className="text-center mb-4" style = {{color : "white"}}> Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit ={handleSubmit} >
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                             <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label >Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disbaled = {loading}  className="w-100" type="submit" style = {{backgroundColor : "#F98B88", color :"black"}}>
                        Sign Up
                        </Button>
                    </Form>
                </Card.Body>
                
                
            </Card>
            <div className="w-100 text-center mt-2" style = {{color:"white"}}>
              Already have an account? <Link to = "/login">Login</Link>
            </div>
            </>

        )
    
}
