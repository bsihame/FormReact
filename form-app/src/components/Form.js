import React from "react";

class Form extends React.Component {
	state = {
		firstName: "",
    lastName: "",
    gender: "",
		agree: false,
	};

	handleFirstNameChange = (e) => {
		this.setState({ firstName: e.target.value });
	};

	handleLastNameChange = (e) => {
		this.setState({ lastName: e.target.value });
	};
	handleAgree = () => {
		this.setState((prevState) => {
			return {
				agree: !prevState.agree,
			};
		});
  };
  

  handleChange = (e) => {
    debugger
     this.setState({gender: e.target.value})
  };


	handleSubmit = (e) => {
		e.preventDefault();
		let { firstName, lastName } = this.state;
		console.log({
			firstName: firstName,
			lastName: lastName,
		});
  };
  

	render() {
		let { firstName, lastName, agree,gender } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					First Name:
					<input
						type="text"
						placeholder="Enter Your First Name"
						required
						value={firstName}
						onChange={this.handleFirstNameChange}
          />
          
					Last Name:
					<input
						text="text"
						placeholder="Enter Your Last Name"
						required
						value={lastName}
						onChange={this.handleLastNameChange}
					/>
				</label>
        <label>
          
          Gender:
          <select value={gender}
            onChange={this.handleChange}>
						<option >Select Your Gender</option>
            
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="something else">Something Else</option>
						<option value="decline to answer">Decline to Answer</option>
					</select>
        </label>
        
				<label>
					I am not a Robot!
					<input type="checkbox" checked={agree} onChange={this.handleAgree} />
				</label>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default Form;
