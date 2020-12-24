// Login Page

import React from 'react';
import '../themes/styles/App.css';
import logo from '../images/logo.png';
import styled from "styled-components";

import media from '../themes/media-query/Device'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'

import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";

const LoginForm = styled.div`
    background-color: white;
    width: 100%;

    img {
        width: 100%;
    }

    .userEmail, .userPassword {
        margin-bottom: 1rem;
        width: 80%
    }

    .loginLabel {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    .loginButton {
        width: 80%;
        margin-bottom: 4rem;
    }

    @media ${media.desktop} {
        width: 30%;

        .userEmail, .userPassword {
            width: 70%
        }

        .loginButton {
            width: 70%;
        }
    }
`;

function Login() {
  return (
    <div className="App">
        <header className="App-header">
            <LoginForm>
                <img src = { logo } alt = "login-logo"></img>
                <Typography variant = "h5" color="primary" className = "loginLabel"> LOG IN </Typography>
                
                <TextField
                    variant="outlined" 
                    color="secondary"
                    type="email"
                    label="username / email"
                    className="userEmail"
                />

                <TextField
                    variant="outlined" 
                    color="secondary"
                    type="password"
                    label="password"
                    className="userPassword"
                />
                
                <Link to = "/dashboard">
                    <Button
                        size = "large"
                        variant = "contained" 
                        color = "primary"
                        className = "loginButton">
                        LOGIN
                    </Button>
                </Link>
            </LoginForm>

        </header>
    </div>
  );
}

export default Login;
