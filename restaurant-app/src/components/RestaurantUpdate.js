import React, { Component } from 'react'
import NavBarMenu from './NavBarMenu';

class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: null,
            address: null,
            email: null,
            rating: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/restaurant/' + this.props.match.params.id)
            .then((resp) => {
                resp.json().then((result) => {
                    console.warn(result)
                    this.setState({
                        id: result.id,
                        name: result.name,
                        address: result.address,
                        email: result.email,
                        rating: result.rating
                    })
                })
            })
    }
    update() {
        fetch('http://localhost:3000/restaurant/' + this.state.id, {
            method: "PUT",
            body: JSON.stringify(this.state),
            headers: {
                'content-Type': 'application/json'
            }
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been Updated")
            })
        })
    } render() {
        // console.log(this.props.match.params.id);
        // console.log(this.state);
        return (
            <div>
                <h1>RestaurantUpdate</h1>
                <NavBarMenu />
                <div>
                    <input
                        onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" value={this.state.name}
                    />
                    <br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address" value={this.state.address} /> <br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant Email" value={this.state.email} /> <br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating" value={this.state.rating} /> <br /><br />
                    <button onClick={() => { this.update() }}>Update Restaurant</button>
                </div>
            </div>
        )
    }
}
export default RestaurantUpdate;