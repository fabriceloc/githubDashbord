import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const API_URL = 'https://api.github.com/search/users?q='

class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get(`${API_URL}` + this.state.query)
            .then(({ data }) => {
                this.setState({
                    results: data.items // MusicGraph returns an object named data,
                                       // as does axios. So... data.data
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />

                <ul>
                    {this.state.results.map(function (d, idx) {
                        return (<li key={idx}> <Link to={`/user/${d.id}`}>{d.login}</Link> <img src={d.avatar_url} height={30}/></li>)
                    })}
                </ul>
            </form>
        )
    }
}

export default Search
