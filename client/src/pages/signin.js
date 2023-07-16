import "./styles/sign-in.css";
import Image from "../images/sign-in.jpg";
import React, { useEffect, useState } from 'react';
import Login from './login';

function SignIn({ closeSignInModal, openLoginModal }) {
  const [showLogin, setShowLogin] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnteredPassword, setReEnteredPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordFieldsEntered, setPasswordFieldsEntered] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [fieldsEntered, setFieldsEntered] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!document.querySelector(".sign-in-modal").contains(event.target)) {
        closeSignInModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSignInModal]);

  const handleLoginLinkClick = () => {
    setShowLogin(true);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFieldsEntered(true);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setFieldsEntered(true);
  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setFieldsEntered(true);
    setEmailValid(validateEmail(enteredEmail));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === reEnteredPassword);
    setPasswordFieldsEntered(event.target.value !== '' && reEnteredPassword !== '');
  };

  const handleReEnteredPasswordChange = (event) => {
    setReEnteredPassword(event.target.value);
    setPasswordMatch(event.target.value === password);
    setPasswordFieldsEntered(event.target.value !== '' && password !== '');
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


  const handleCreateAccount = () => {
    const userData = {
      firstName,
      lastName,
      email,
      password
    };

   
    fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
    
      console.log(data);
      if (data.success) {
       
        alert('Account created successfully. You are now logged in!');
      } else {
        
        alert('Account creation failed. Please try again.');
      }
    })
    .catch(error => {
      console.error(error);
    });
};


  return (
    <div className="sign-in-modal">
      <div className="left-image-container">
        <img src={Image} alt="Image" className="left-image" />
      </div>

      <div className="right-content">
        <div className="close-button" onClick={closeSignInModal}>
          <i className="fas fa-times"></i>
        </div>

        <h1 id="modal-title">Discover EasyCook</h1>
        <h7 id="description">Where Delicious Recipes Meet Sustainability</h7>

        {showLogin ? (
          <Login closeSignInModal={closeSignInModal} openSignInModal={openLoginModal} />
        ) : (
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              {!emailValid && fieldsEntered && <p className="error-message">Enter a valid email address</p>}
            </div>
            <div className="form-row">
              <div className="password-row">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  value={reEnteredPassword}
                  onChange={handleReEnteredPasswordChange}
                />
              </div>
            </div>
            <div className="form-row">
              {passwordFieldsEntered && (
                <div className="password">
                  {passwordMatch ? (
                    <p className="password-match-text">Passwords match</p>
                  ) : (
                    <p className="password-mismatch-text">Passwords do not match</p>
                  )}
                </div>
              )}
            </div>
            <div className="form-row">
              <button className="create-account-button" onClick={handleCreateAccount}>
                Create Account
              </button>
            </div>
            <div className="form-row">
              <span className="login-link" onClick={handleLoginLinkClick}>
                Already have an account
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignIn;
