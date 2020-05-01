import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class SecondPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pswd: "",
      confirmpswd: "",
      disabled: true
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      // console.log(this.state);
      this.validate();
    });
  };

  //Validate
  validate = () => {
    if (this.state.pswd === this.state.confirmpswd && this.state.pswd !== "") {
      this.setState({
        disabled: false
      });
    }
    if (this.state.pswd !== this.state.confirmpswd) {
      this.setState({
        disabled: true
      });
    }
  };

  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Enter Password" />
          <TextField
            name="pswd"
            type="Password"
            hintText="Password"
            floatingLabelText="Password"
            onChange={this.onChange}
            defaultValue={values.pswd}
          />
          <br />
          <br />
          <TextField
            name="confirmpswd"
            type="Password"
            hintText="Confirm Password"
            floatingLabelText="Confirm Password"
            onChange={this.onChange}
            defaultValue={values.confirmpswd}
          />
          <br />
          <br />
          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            disabled={this.state.disabled}
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default SecondPage;
