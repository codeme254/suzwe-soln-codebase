import React from 'react';

const CommunityInitiativeHero = ({heroText, heroImage}) => {
    return(
        <section className="community-initiative-hero">
            <div className="community-initiative-hero__image">
                <img src={heroImage} alt="community initiatve hero img" className="community-initiative-hero__image--img" />
            </div>
            <div className="community-initiative-hero__text">
                <h1 className="community-initiative-hero__text--txt">{heroText}</h1>
            </div>
        </section>
    )
}
export default CommunityInitiativeHero;