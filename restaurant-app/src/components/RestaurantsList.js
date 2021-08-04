import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import NavBarMenu from './NavBarMenu';

class RestaurantsList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch('http://localhost:3000/restaurant').then((resp) => {
            resp.json().then((result) => {
                // console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    delete(id) {
        fetch('http://localhost:3000/restaurant/' + id,
            {
                method: "DELETE"
                // body: JSON.stringify(this.state),
                // headers: {
                //     'content-Type': 'application/json'
                // }
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Restaurant has been deleted")
                    this.getData()
                })
            })

    }
    render() {
        console.log(this.state);
        return (
            <div>
                <NavBarMenu />
                <h1>RestaurantsList</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>
                                                <td><Link to={"/update" + item.id}><FontAwesomeIcon icon={faEdit} color="Orange" /></Link>
                                                    <span onClick={() => { this.delete(item.id) }}><FontAwesomeIcon icon={faTrash} color="Black" /></span></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }

            </div>
        );
    }
}

export default RestaurantsList;