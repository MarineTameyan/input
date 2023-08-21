import React from "react";

class Third extends React.Component {
    state = {
        user: {
            password: '',
            confirm: '',
        },
        errors: {
            password: '',
            confirm: '',
        }
    }

    handleTheChange = (e) => {
        const { user } = this.state;
        user[e.target.name] = e.target.value;
        this.setState({ user });
    }

    registerUser = () => {
        console.log(this.state.user);
        if (this.validation()) {
            alert('User registered');
        }
    }

    validation = () => {
        let isValidate = true;
        const { user } = this.state;
        const errors = {
            password: '',
            confirm: '',
        }

        if (!user.password.trim().length) {
            isValidate = false;
            errors.password = 'This field is required';
        }
        if (!user.confirm.trim().length) {
            isValidate = false;
            errors.confirm = 'This field is required';
        } else if (user.confirm !== user.password) {
            isValidate = false;
            errors.confirm = 'Passwords do not match';
        }
        if (user.confirm.length > 6 && user.password.length > 6) {
            isValidate = false;
            errors.confirm = "You must enter 6 symbols"
        }

        this.setState({ errors }); 
        return isValidate;
    }

    render() {
        const { user, errors } = this.state;
        return (
            <div>
                <label>
                    <input type="password" name="password"placeholder="Password"
                        value={user.password} onChange={this.handleTheChange}/>
                    {errors.password?<p className="error">{errors.password}</p>:null}
                </label>
                <label>
                    <input type="password" name="confirm" placeholder="Confirm"
                        value={user.confirm} onChange={this.handleTheChange}/>
                    {errors.confirm?<p className="error">{errors.confirm}</p>:null}
                </label>
                <button onClick={this.registerUser}>Click</button>
            </div>
        );
    }
}

export default Third;
