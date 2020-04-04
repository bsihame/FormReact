import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName : ""
  }
  
  
  handleFirstNameChange = (e) =>{
    this.setState({firstName: e.target.value})
  }

  handleLastNameChange = (e) => {
    this.setState({lastName : e.target.value})
  }
  render() {
    console.log(this.state.firstName)
    console.log(this.state.lastName)

		return (
			<form>
				<label>
          First Name:
					<input type="text" placeholder="Enter Your Firs Name"value={this.state.firsName} onChange={this.handleFirstNameChange} />
          Last Name: 
          <input text="text" placeholder="Enter Your Last Name" value={this.state.lastName} onChange={this.handleLastNameChange}/>
				</label>
			</form>
		);
	}
}

export default Form;
