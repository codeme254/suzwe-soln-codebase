import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedInIcon, PhoneCallIcon } from './Icons';

const CommunityInitiativeFooter = () => {
    return(
        <footer className="community-initiative-footer">
            <h2 className="community-initiative-footer__logo">Clima</h2>
            <div className="c-i-footer__social">
                <a href="" className="c-i-footer__social--link">
                    <FacebookIcon />
                </a>
                <a href="" className="c-i-footer__social--link">
                    <LinkedInIcon />
                </a>
                <a href="" className="c-i-footer__social--link">
                    <TwitterIcon />
                </a>
                <a href="" className="c-i-footer__social--link">
                    <PhoneCallIcon />
                </a>
            </div>
            <p className="c-i-footer__thankyou">
                <p className="c-i-footer__thankyou--main">Special thanks to microsoft</p>
                <p className="c-i-footer__thankyou--copyright">&copy; 2022 Suzwe. All rights reserved</p>
            </p>
        </footer>
    )
}
export default CommunityInitiativeFooter;