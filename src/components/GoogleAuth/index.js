import React from "react";
import { connect } from "react-redux";
import { signIn, signOut, fetchUser } from "redux/actions";
import './index.css'
import styled from "styled-components";



class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "787852599289-idj76rjibl8a6ogm1u2vu8nm18cjdjo6.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange);
          this.useremail = (this.auth.currentUser.get().getBasicProfile().getEmail());
          this.props.fetchUser(this.useremail)
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (!this.props.user) {
      return (
        <RightWrapper>
          <div onClick={this.onSignOutClick}>此電郵並未注冊，請前後 <a href='https://www.dse00.com/users/register'>DSE00 Register</a>注冊</div>

        </RightWrapper>
      )
    }
    else if (this.props.isSignedIn) {
      return (
        <RightWrapper>
          <button><i className="fa-solid fa-coins"></i> {this.props.user.coin}</button>
          <button>{(this.props.user.username).toUpperCase()}</button>
          <button onClick={this.onSignOutClick}>
            <i className="google icon" />
            登出
          </button>
        </RightWrapper>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="loginbtn">

          登入
        </button>
      );
    }
  }

  render() {

    return <>{this.renderAuthButton()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user: state.user[0]
  };
};

export default connect(mapStateToProps, { signIn, signOut, fetchUser })(GoogleAuth);


const RightWrapper = styled.div`
  position: absolute;
  right: 20px;
  top:0;
  padding:20px;
`

