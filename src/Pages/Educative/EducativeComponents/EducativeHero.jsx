import React from 'react';

const EducativeHero = ({ title, explanationText }) => {
    return(
        <section className="educative-hero">
            <h1 className="educative-hero__title">{title}</h1>
            <p className="educative-hero__text">{explanationText}</p>
            <button className="educative-hero__button">Get recommendations</button>
        </section>
    )
}

export default EducativeHero;