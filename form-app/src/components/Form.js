import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    agree:false,
  }
  
  
  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value })
  };

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value })
  };
  handleAgree = () => {
    
    this.setState((prevState) => {
      return {
        agree: !prevState.agree
      }
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firsName: this.state.firstName,
      lastName: this.state.lastName,
      

    })
  }
  
  render() {
    console.log(this.state)

		return (
			<form onSubmit={this.handleSubmit}>
				<label>
          First Name:
					<input type="text" placeholder="Enter Your Firs Name"value={this.state.firsName} onChange={this.handleFirstNameChange} />
          Last Name: 
          <input text="text" placeholder="Enter Your Last Name" value={this.state.lastName} onChange={this.handleLastNameChange}/>
        </label>
        <label>
          Agree?
           <input type="checkbox" checked={this.state.agree} onChange={this.handleAgree} />
        </label>
        <button type="submit">Submit</button>
			</form>
		);
	}
}

export default Form;
