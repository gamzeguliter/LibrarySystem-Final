import React, { Component } from 'react'
import image from "../indir.jpg"; 
import  { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../AuthContext"
import {Link,useNavigate} from "react-router-dom"

export default function Login () {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const navigation = useNavigate()
    
        async function handleSubmit(e){
            e.preventDefault()
         

            try {
                setError("")
                setLoading(true)
                await login(emailRef.current.value, passwordRef.current.value)
                navigation("/")
              } catch {
                setError("Failed to log in")
              }
          
              setLoading(false)
            }

        return (
            <>
            <Card style = {{backgroundColor : "#659EC7"}}>
                <Card.Body>
                    <h2 className="text-center mb-4" style = {{color : "white"}}> Login </h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit ={handleSubmit} >
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                             <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                       
                        <Button disbaled = {loading}  className="w-100" type="submit" style = {{backgroundColor : "#F98B88", color :"black"}}>
                        Login
                        </Button>
                    </Form>
                </Card.Body>
                
                
            </Card>
            <div className="w-100 text-center mt-2" style = {{color:"white"}}>
              Sign Up <Link to = "/signup" > Sign Up</Link>
            </div>
            
            </>
        )
    
}

