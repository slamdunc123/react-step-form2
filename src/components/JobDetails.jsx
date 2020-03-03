import React, { Component } from 'react';

export class JobDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { handleChange, jobTitle, jobCompany, jobLocation } = this.props;
		return (
			<>
				<h2>Enter your job information</h2>
				<label>
					<input
						type='text'
						name='jobTitle'
						placeholder='job title'
						value={jobTitle}
						onChange={handleChange('jobTitle')}
					/>
				</label>
				<label>
					<input
						type='text'
						name='jobCompany'
						placeholder='job company'
						value={jobCompany}
						onChange={handleChange('jobCompany')}
					/>
				</label>
				<label>
					<input
						type='text'
						name='jobLocation'
						placeholder='job location'
						value={jobLocation}
						onChange={handleChange('jobLocation')}
					/>
				</label>
				<button className='Back' onClick={this.back}>
					&#171; Back
				</button>
				<button className='Next' onClick={this.continue}>
					Next &#187;
				</button>
			</>
		);
	}
}

export default JobDetails;
