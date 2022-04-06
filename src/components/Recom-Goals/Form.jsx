import React from 'react';
import avartarImg from "./../../assets/images/industrial.jpg";

const Form = () => {
    return(
        <>
        <form action="#" className="recommendation__form">

            <div className="recommendation__form--controlls">
              <img
                src={avartarImg}
                alt="some avartar"
                className="form__avartar"
              />
              <p className="form__legend">
            Let us give you personal recommendations on what you should do and use.
          </p>
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
                    <option value="maize">Maize</option>
                    <option value="wheat">Tomatoes</option>
                    <option value="rice">Potatoes</option>
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
              <div className="form__flex">
                <div className="form__group">
                  <label
                    htmlFor="last-pesticide"
                    className="form__group--label"
                  >
                    last pesticide
                  </label>
                  <input
                    type="text"
                    className="form__group--text-input"
                    placeholder="last pesticide"
                    id="last-pesticide"
                  />
                </div>
                <div className="form__group">
                  <label
                    htmlFor="application-date"
                    className="form__group--label"
                  >
                    Application date
                  </label>
                  <input
                    type="text"
                    className="form__group--text-input"
                    placeholder="value in moths"
                    id="application-date"
                  />
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="disease-seen" className="form__group--label">
                  Pest/Disease seen
                </label>
                <input
                  type="text"
                  className="form__group--text-input"
                  placeholder="name of pest/disease seen"
                  id="disease-seen"
                />
              </div>
              <div className="form__group">
                <label htmlFor="email" className="form__group--label">
                  email address
                </label>
                <input
                  type="email"
                  className="form__group--text-input"
                  placeholder="your email address"
                  id="email"
                />
              </div>
              <div className="form__group">
                <label htmlFor="phone" className="form__group--label">
                  your mobile number
                </label>
                <input
                  type="tel"
                  className="form__group--text-input"
                  placeholder="Your mobile number"
                  id="disease-seen"
                />
              </div>

              <button
                className="form__submit--button"
                type="submit"
                title="submit your response"
              >
                Submit
              </button>
            </div>
          </form>
          </>
    )
}
export default Form;