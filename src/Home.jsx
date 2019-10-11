import React, { Component } from "react"
import Search from "./Search";
import { Container, Row, Col } from 'reactstrap';


export default class Home extends Component{
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col>Vous pouvez rechercher les noms d'utilisateur de github. </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Search/>
                </Container>
            </div>

        )
    }
}