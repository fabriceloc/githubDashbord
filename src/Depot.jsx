import React, { Component } from "react"
import axios from "axios";

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
              <h2>nom : {val.name} </h2>
               <ul>
                   <li>language : {val.language} </li>
                   <li>starts : {val.stargazers_count} </li>
                   <li>description : {val.description} </li>
                   <li>Dates de création et de mise à jour : { new Date(val.created_at).toLocaleDateString() }  -  {  new Date(val.updated_at).toLocaleDateString() }  </li>
                   <li>Lien vers la page Github : <a href={val.html_url}> voir le depot sur github</a></li>
               </ul>
           </div>
        )
    }
}