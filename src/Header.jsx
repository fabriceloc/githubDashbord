import React, { Component } from "react"
import {Link} from "react-router-dom";


export default class Header extends Component{
    render() {
        return(
            <header>
                <Link to={`/`}>Acceuil</Link>
                <h1> Github Dashboard Sample </h1>
            </header>
        )
    }
}