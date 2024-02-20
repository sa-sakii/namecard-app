import React from "react"

import InstaLogo from "./images/instagram-icon.png"
import FacebookLogo from "./images/facebook-icon.jpg"
import TwitterLogo from "./images/twitter-icon.png"

export default function SocialHandle() {
    return (
        <footer className="socials">
            
            <a href="www.instagram.com"><img src={ InstaLogo } id='ig-logo'></img></a>
            <a href="www.facebook.com"><img src={ FacebookLogo } id='fb-logo'></img></a>
            <a href="www.twitter.com"><img src={ TwitterLogo } id='twt-logo'></img></a>
            
        </footer>
    );
}
