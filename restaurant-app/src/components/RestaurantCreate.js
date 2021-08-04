import React, { Component } from 'react'
import NavBarMenu from './NavBarMenu';

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            email: null,
            rating: null
        }
    }
    create() {
        fetch('http://localhost:3000/restaurant', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'content-Type': 'application/json'
            }
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been added")
            })
        })
    }
    render() {
        return (
            <div>
                <h1>RestaurantCreate</h1>
                <NavBarMenu />
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" /> <br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address" /> <br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant Email" /> <br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating" /> <br /><br />
                    <button onClick={() => { this.create() }}>Add Restaurant</button>
                </div>

            </div>
        )
    }
}
export default RestaurantCreate;