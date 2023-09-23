import React, { Component } from 'react';
import NameAddressStep from './NameAddressStep';
import DOBAndCountryStep from './DOBAndCountryStep';

class StepperForm extends Component {
  state = {
    step: 1,
    name: '',
    address: '',
    dob: '',
    country: '',
  };

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, name, address, dob, country } = this.state;

    return (
      <div>
        {step === 1 && (
          <NameAddressStep
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            name={name}
            address={address}
          />
        )}
        {step === 2 && (
          <DOBAndCountryStep
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            dob={dob}
            country={country}
          />
        )}
      </div>
    );
  }
}

export default StepperForm;
