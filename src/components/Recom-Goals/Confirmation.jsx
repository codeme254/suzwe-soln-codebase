import React from "react";

const Confirmation = ({ tel, email }) => {
    return(
        <div className="confirmation" >
            <p className="confirmation__text">
                { `Thankyou for submtting your response, please check the inbox of ${email} or messages in ${tel} for info.`}
            </p>
            <button className="confirmation__button">Another response</button>
        </div>
    )
}
export default Confirmation;