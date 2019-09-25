import React, { Component } from 'react';
const axios = require('axios');

class Questionnaire extends Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            c: 0
        }
        this.abc = this.abc.bind(this);
        this.print = this.print.bind(this);


    }

    abc(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(target)
        console.log(value)
        console.log(name)

        this.setState({
            [name]: value
        });
    }

    print(e) {
        e.preventDefault();
        let userData = this.state;

        fetch('localhost:3000', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            })
        })

    }

    render() {

        return (
            <div>
                <form onSubmit={this.print}>
                    <div>
                        <p><label><input type="radio" name='a' value='1' onChange={this.abc} /><span><span>Very poor </span></span></label></p>
                        <p><label><input type="radio" name='a' value='2' onChange={this.abc} /><span><span>Very poor </span></span></label></p>
                        <p><label><input type="radio" name='a' value='3' onChange={this.abc} /><span><span>Very poor </span></span></label></p>
                    </div>
                    <div>
                        <p><label><input type="radio" name='b' value='1' onChange={this.abc} /><span><span>Very poor </span></span></label></p>
                        <p><label><input type="radio" name='b' value='2' onChange={this.abc} /><span><span>Very poor </span></span></label></p>
                        <p><label><input type="radio" name='b' value='3' onChange={this.abc} /><span><span>Very poor </span></span></label></p>
                    </div>
                    <div>
                        <p><label><input type="radio" name='c' value='1' onChange={this.abc} /><span><span>Very poor </span></span></label></p>
                        <p><label><input type="radio" name='c' value='2' onChange={this.abc} /><span><span>Very poor </span></span></label></p>
                        <p><label><input type="radio" name='c' value='3' onChange={this.abc} /><span><span>Very poor </span></span></label></p>
                    </div>
                    <div>
                        <input type='submit'></input>
                    </div>
                </form>

            </div>

        )
    }

}

export default Questionnaire;