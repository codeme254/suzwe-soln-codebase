import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import CommunityInitiativeHero from './CommunityInitiativeHero';
import drySweetImage from './../../assets/images/landscape.jpg';

const CommunityInitiativePage = () => {
    return(
        <div className="page-root page-root-fix-header">
            <Navigation />
            <CommunityInitiativeHero heroText="let's build an irrigation scheme for Mandera." heroImage={drySweetImage} />
        </div>
    )
}

export default CommunityInitiativePage;