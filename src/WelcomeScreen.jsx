import React from 'react';
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
    (
        <div className='WelcomeScreen'>
            <h1>Welcome to the Meet App</h1>
            <h4>Log In to see upcoming events around the world for full-stack developers</h4>
            <div className='button_cont' align='center'>
                <div className='google-btn'>
                    <div className='google-icon-wrapper'>
                        <img
                            className='google-icon' 
                            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                            alt='Google Sign-In'
                        />
                    </div>
                    <a
                        href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=1003357027648-h5fon195en6icmrj8lnsafcarsmjvlmu.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fsamu13813.github.io%2Fmeet%2F"
                        rel="nofollow noopener"
                        class="btn-text"
                     >
                        <b>Sign In with Google</b>
                    </a>
                </div>
            </div>
            <a 
                href='https://samu13813.github.io/meet/privacy.html'
                rel='nofollow noopener'
            >
                Privacy Policy
            </a>
        </div>
    )
    :null
}

export default WelcomeScreen;