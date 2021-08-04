import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
        }
    }
    login() {
        console.log(this.state);

        fetch('http://localhost:3000/login?q=' + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.log("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login', JSON.stringify(resp))
                    console.log(this.props.history.push('list'));
                }
                else {
                    alert("Please check your name and password")
                }
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu />
                <input type="text" name="user" placeholder="name" onChange={(event) => this.setState({ name: event.target.value })} />
                <br /><br />
                <input type="password" name="password" placeholder="password" onChange={(event) => this.setState({ password: event.target.value })} />
                <br /><br />
                <button onClick={() => this.login()}>Login</button>
            </div>
        );
    }
}

export default Login;