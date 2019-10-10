import React, { Component } from "react"
import axios from "axios";
import {Link} from "react-router-dom";

const API_URL_REPO = 'https://api.github.com/repos/'

export default class Depot extends Component{

    state = {
        result: {},
    }



    constructor(props){
        super(props)
    }


    componentDidMount() {
        axios.get(`${API_URL_REPO}` + this.props.match.params.username + "/" + this.props.match.params.repo)
            .then(({ data }) => {
                this.setState({
                    result: data // MusicGraph returns an object named data,
                    // as does axios. So... data.data
                })
            })
    }


    render() {
        let val = this.state.result;
        return(
           <div>
              <div>nom : {val.name} </div>
              <div>language : {val.language} </div>
              <div>starts : {val.stargazers_count} </div>
              <div>description : {val.description} </div>
              <div>Dates de création et de mise à jour : { new Date(val.created_at).toLocaleDateString() }  -  {  new Date(val.updated_at).toLocaleDateString() }  </div>
              <div>Lien vers la page Github : <a href={val.html_url}> voir le depot sur github</a></div>
           </div>
        )
    }
}