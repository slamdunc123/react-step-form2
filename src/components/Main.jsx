import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import JobDetails from './JobDetails';
import AllInfo from './AllInfo';

export class Main extends Component {
	state = {
		step: 1,

		// step 1
		firstName: '',
		lastName: '',

		// step 2
		jobTitle: '',
		jobCompany: '',
		jobLocation: ''
	};

	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	showStep = () => {
		const {
			step,
			firstName,
			lastName,
			jobTitle,
			jobCompany,
			jobLocation
		} = this.state;
		if (step === 1) {
			return (
				<PersonalInfo
					handleChange={this.handleChange}
					nextStep={this.nextStep}
					firstName={firstName}
					lastName={lastName}
				/>
			);
		}
		if (step === 2) {
			return (
				<JobDetails
					handleChange={this.handleChange}
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					jobTitle={jobTitle}
					jobCompany={jobCompany}
					jobLocation={jobLocation}
				/>
			);
		}
		if (step === 3) {
			return (
				<AllInfo
					prevStep={this.prevStep}
					firstName={firstName}
					lastName={lastName}
					jobTitle={jobTitle}
					jobCompany={jobCompany}
					jobLocation={jobLocation}
				/>
			);
		}
	};

	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		});
	};

	render() {
		const { step } = this.state;
		return (
			<>
				<h2>Step {step} of 3</h2>
				{this.showStep()}
			</>
		);
	}
}

export default Main;
