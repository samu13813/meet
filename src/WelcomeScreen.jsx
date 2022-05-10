import React from 'react';
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
    (
        <div className='WelcomeScreen'>
            <h1>Welcome to the Meet App</h1>
            <h4>Log In to see upcoming events around the world for full-stack developers</h4>
            <div className='button_cont' align='center'>
                <div class='google-btn'>
                    <div class='google-icon-wrapper'>
                        <img
                            class='google-icon' 
                            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                            alt='Google Sign-In'
                        />
                    </div>
                    <button onClick={() => { props.getAccessToken() }}
                        rel='nofollow noopener'
                        class='btn-text'
                    >
                        <b>Sign In with Google</b>
                    </button>
                </div>
            </div>
            <a 
                href='"https://samu1313.github.io/meet/privacy.html'
                rel='nofollow noopener'
            >
                Privacy Policy
            </a>
        </div>
    )
    :null
}

export default WelcomeScreen;