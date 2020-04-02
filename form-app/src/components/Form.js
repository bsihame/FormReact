import React from "react";

class Form extends React.Component {
	render() {
		return (
			<form>
        <label>
          First Name: 
					<input type="text" value="name" onChange={handleFirstNameChange} />
				</label>
			</form>
		);
	}
}

export default Form;
