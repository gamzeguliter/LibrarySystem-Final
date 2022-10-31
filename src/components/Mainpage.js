import React, { Component,useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { useAuth } from "../AuthContext"
import Book from "./Book"
import Navbar from "./Navbar"
import Books from "./Books"
import AddBook from "./AddBook"
import { Container,Button,Alert} from "react-bootstrap"


export default function Mainpage () {
    const [error,setError] = useState("")
    const navigation = useNavigate()
    const { currentUser, logout } = useAuth()


    async function handleLogout() {
        setError("")
        try {
          await logout()
          navigation("/login")
        } catch {
          setError("Failed to log out")
        }
      }
        return (
           
                <div className="Container">
                    <Navbar title = "Library"/>
                    <hr>
                    </hr>
                    <AddBook/>
                    <Books />
                    <Button variant="link" onClick={handleLogout}>Log Out</Button>              
                </div>
            
        )
    
}
