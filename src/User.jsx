import React, { Component } from "react"
import axios from "axios";
import {Link} from "react-router-dom";

const API_URL = 'https://api.github.com/user/'
const API_URL_REPO = 'https://api.github.com/users/'

export default class User extends Component{

    state = {
        result: {},
        list : []
    }



    constructor(props){
        super(props)
    }


    componentDidMount() {
        axios.get(`${API_URL}` + this.props.match.params.idUser)
            .then(({ data }) => {
                this.setState({
                    result: data // MusicGraph returns an object named data,
                    // as does axios. So... data.data
                })
                axios.get(`${API_URL_REPO}` + this.state.result.login + "/repos")
                    .then(({ data }) => {
                        this.setState({
                            list: data // MusicGraph returns an object named data,
                            // as does axios. So... data.data
                        })
                    })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.idUser !== prevProps.match.params.idUser) {
            axios.get(`${API_URL}` + this.props.match.params.idUser)
                .then(({ data }) => {
                    this.setState({
                        result: data // MusicGraph returns an object named data,
                        // as does axios. So... data.data
                    })
                    axios.get(`${API_URL_REPO}` + this.state.result.login + "/repos")
                        .then(({ data }) => {
                            this.setState({
                                list: data // MusicGraph returns an object named data,
                                // as does axios. So... data.data
                            })
                        })
                })
        }
    }

    render() {
        let val = this.state.result;
        let list = this.state.list;
        return(
           <div>
               <div> le nom de l’utilisateur : {val.login} </div>
               <div> l’avatar de l’utilisateur : <img src={val.avatar_url} height={110}/></div>
               <div> Afficher la liste des dépôts :  </div>

               <ul>
                   {list.map((function (d, idx) {
                       return (<li key={idx}> <Link  to={`/depot/${d.name}/${val.login}`}>{d.name}</Link></li>)
                   }))}
               </ul>
           </div>
        )
    }
}