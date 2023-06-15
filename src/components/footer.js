import React from 'react';
import logo from './github-logo.png'
function Footer() {
    return(
        <div class="footerComponent">
            <a href="https://github.com/m-vanhoose">
                <img class="git" src={logo} alt="github"></img>
            </a>
        </div>
    );
}

export default Footer;