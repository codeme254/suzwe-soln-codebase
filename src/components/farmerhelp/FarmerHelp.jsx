import React from "react";

const Farmerhelp = () => {
    return(
        <section className="farmerhelp">
            <div className="farmerhelp__left">
                <h1 className="page-title">
                    let us help you pick the best fungicide for your crop's and animal's pests and diseases
                </h1>
            </div>
            <div className="farmerhelp-right">
                <form action="/" className="farmerhelp__form">
                    <div className="form__group">
                        <input type="text" className="form__text-input" placeholder="full name" id="name"/>
                        <label htmlFor="name" className="form__text--label">Full Name</label>
                    </div>
                    <div className="form__group">
                        <input type="text" className="form__text-input" placeholder="crop" id="crop"/>
                        <label htmlFor="crop" className="form__text--label">crop</label>
                    </div>
                    <div className="form__group">
                        <input type="text" className="form__text-input" placeholder="crop age specify eg 12 days" id="crop-age"/>
                        <label htmlFor="crop-age" className="form__text--label">crop age specify eg 12 days</label>
                    </div>
                    <div className="form__group">
                        <input type="date" className="form__text-input" placeholder="last pesticide application date" id="last-application-date"/>
                        <label htmlFor="last-application-date" className="form__text--label">last pesticide application date</label>
                    </div>
                    <div className="form__group">
                        <input type="text" className="form__text-input" placeholder="full name" id="name"/>
                        <label htmlFor="name" className="form__text--label">Full Name</label>
                    </div>
                    <div className="form__group">
                        <input type="file" className="form__text-input" placeholder="upload a photo of the disease seesn" id="photo"/>
                        <label htmlFor="photo" className="form__text--label">upload a photo of the disease seen</label>
                    </div>
                    <div className="form__group">
                        <input type="number" className="form__text-input" placeholder="farm size" id="name"/>
                        <label htmlFor="size" className="form__text--label">Farm Size</label>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Farmerhelp;