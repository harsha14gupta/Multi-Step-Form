import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class SuccessPage extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Successfully Submitted" />
          <h1>Thank you for submitting your form!</h1>
          <p>You will recieve an email soon with further instructions.</p>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default SuccessPage;
