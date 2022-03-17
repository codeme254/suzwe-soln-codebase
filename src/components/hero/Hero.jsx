import React from "react";

const Hero = () => {
    return(
        <section className="hero">
            <h1 className="hero__title">
                <span className="hero__title--main">climate change is destroying nature</span>
                <span className="hero__title--sub">Help us restore nature back to how it was</span>
            </h1>
            <a href="/" className="hero__button">join the campaign</a>
        </section>
    )
}

export default Hero;