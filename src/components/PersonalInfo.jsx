import React, { Component } from 'react';

export class PersonalInfo extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { handleChange, firstName, lastName } = this.props;
		return (
			<>
				<h2>Enter your personal information</h2>
				<label>
					<input
						type='text'
						name='firstname'
						placeholder='first name'
						value={firstName}
						onChange={handleChange('firstName')}
					/>
				</label>
				<label>
					<input
						type='text'
						name='lastname'
						placeholder='last name'
						value={lastName}
						onChange={handleChange('lastName')}
					/>
				</label>
				<button className='Next' onClick={this.continue}>
					Next &#187;
				</button>
			</>
		);
	}
}

export default PersonalInfo;
