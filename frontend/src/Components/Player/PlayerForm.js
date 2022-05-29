import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
    submitPlayer(event) {
        event.preventDefault();
        axios.post('http://localhost:4000/players', {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.phone.value,
        })
        .then((Response) => {
            console.log(Response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div class="row">
                <form class="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div class="row">
                        <div class="input-field col s6">
                        <input ref="firstName" id="firstName" type="text" class="validate" />
                        <label for="firstName">First Name</label>
                        </div>
                        <div class="input-field col s6">
                        <input ref="lastName" id="lastName" type="text" class="validate" />
                        <label for="lastName">Last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                        <input ref="phone" id="phone" type="text" class="validate" />
                        <label for="phone">phone</label>
                        </div>
                        <div class="input-field col s6">
                        <input ref="email" id="email" type="text" class="validate" />
                        <label for="email">email</label>
                        </div>
                    </div>   
                    <button className='btn waves-effect waves-light' type="submit"
                    name='action'> Add Player</button>             
                </form>
            </div>
        )
    }
}

export default PlayerForm;