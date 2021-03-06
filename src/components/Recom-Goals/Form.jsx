import React, { useRef, useState } from "react";
import { PesticideData, pestData, plantData } from "../../reusable/data.const";

const Form = () => {
  const [number, setPhoneNumber] = useState();
  const [mail, setMail] = useState();
  const plants = plantData;
  const pestDetails = pestData;
  const pesticidesData = PesticideData;

  const formRef = useRef(null);
  const confirmationRef = useRef(null);

  const recordPhoneNo = (e) => {
    // setPhoneNumber({number: e.target.value})
    setPhoneNumber(e.target.value);
  };

  const recordMail = (e) => {
    setMail(e.target.value);
  };

  const email = mail;
  const tel = number;

  const handleConfirmation = () => {
    formRef.current.classList.add("hider");
    confirmationRef.current.classList.remove("hider");
  };

  const handleAnotherResponse = () => {
    formRef.current.classList.remove("hider");
    confirmationRef.current.classList.add("hider");
  };
  return (
    <>
      <form action="#" className="recommendation__form" ref={formRef}>
        <div className="recommendation__form--controlls">
          {/* <img
                src={avartarImg}
                alt="some avartar"
                className="form__avartar"
              /> */}
          <div className="form__group" style={{ marginTop: "4rem" }}>
            <label htmlFor="name" className="form__group--label">
              Name
            </label>
            <input
              type="text"
              className="form__group--text-input"
              placeholder="your full name"
              id="name"
            />
          </div>

          <div className="form__flex">
            <div className="form__group">
              <label htmlFor="crop-name" className="form__group--label">
                crop
              </label>
              {/* <input type="text" className="form__group--text-input" placeholder="name of your crop" id="crop-name" /> */}
              <select
                name=""
                id="crop-name"
                className="form__group--text-input"
              >
                {plants.map((plant) => (
                  <option value="plant.name">{plant.name}</option>
                ))}
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="crop-age" className="form__group--label">
                crop age
              </label>
              {/* <input type="text" className="form__group--text-input" placeholder="value in moths" id="crop-age" /> */}
              <select
                name=""
                id="crop-name"
                className="form__group--text-input"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12(one year)</option>
                <option value="more">More than one year</option>
              </select>
            </div>
          </div>

          <div className="form__group">
            <label htmlFor="disease-seen" className="form__group--label">
              Pest/Disease seen
            </label>
            {/* <input type="text" className="form__group--text-input" placeholder="name of your crop" id="crop-name" /> */}
            <select
              name=""
              id="disease-seen"
              className="form__group--text-input"
            >
              {pestDetails.map((pest) => (
                <option value="pest">{pest}</option>
              ))}
            </select>
          </div>
          <div className="form__flex">
            <div className="form__group">
              <label htmlFor="last-pesticide" className="form__group--label">
                last pesticide
              </label>
              {/* <input type="text" className="form__group--text-input" placeholder="name of your crop" id="crop-name" /> */}
              <select
                name=""
                id="last-pesticide"
                className="form__group--text-input"
              >
                {pesticidesData.map((pesticide) => (
                  <option value="pesticide,pesticides">
                    {pesticide.pesticides}
                  </option>
                ))}
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="application-date" className="form__group--label">
                Application date
              </label>
              <input
                type="text"
                className="form__group--text-input"
                placeholder="value in months"
                id="application-date"
              />
            </div>
          </div>

          <div className="form__flex">
            <div className="form__group">
              <label htmlFor="email" className="form__group--label">
                email address
              </label>
              <input
                type="email"
                className="form__group--text-input"
                placeholder="example@gmail.com"
                id="email"
                onChange={recordMail}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="phone" className="form__group--label">
                your mobile number
              </label>
              <input
                type="tel"
                className="form__group--text-input"
                placeholder="0723456789"
                id="disease-seen"
                onChange={recordPhoneNo}
                required
              />
            </div>
          </div>

          <button
            className="form__submit--button"
            type="submit"
            title="submit your response"
            onClick={handleConfirmation}
          >
            Get farming tips
          </button>
        </div>
      </form>
      <div className="confirmation__container  hider" ref={confirmationRef}>
        <p className="confirmation__text">
          {email && tel
            ? `Thank you for your response, please check the inbox of ${email} or the messages inbox of ${tel} for your recommendation.`
            : !tel && !mail
            ? `Please provide either an email or a phone number to receive recommendation.`
            : !email
            ? `Check the inbox of ${tel} messages for recommendations.`
            : !tel
            ? `Check the inbox of ${email} email messages for confirmation.`
            : ``}
        </p>
        <button className="submit__another" onClick={handleAnotherResponse}>
          Submit another response
        </button>
      </div>
    </>
  );
};
export default Form;
