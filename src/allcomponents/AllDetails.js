import React from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import SuccessPage from "./SuccessPage";

class AllDetails extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    pswd: "",
    confirmpswd: "",
    occupation: "",
    city: "",
    bio: "",
    disabled: true
  };

  //Handle change
  handleChange = input => event => {
    this.setState(
      {
        [input]: event.target.value
      },
      () => {
        this.validateEmail();
      }
    );
  };

  validateEmail = () => {
    if (this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        disabled: false
      });
    } else
      this.setState({
        disabled: true
      });
  };

  //Forward,Backward
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

  //render
  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      pswd,
      confirmpswd,
      occupation,
      city,
      bio,
      disabled
    } = this.state;
    //Array of values to access
    const values = {
      firstName,
      lastName,
      email,
      pswd,
      confirmpswd,
      occupation,
      city,
      bio,
      disabled
    };

    switch (step) {
      case 1:
        return (
          <FirstPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <SecondPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
            values={values}
          />
        );
      case 3:
        return (
          <ThirdPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <FourthPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <SuccessPage />;
      default:
        return "";
    }
  }
}

export default AllDetails;
