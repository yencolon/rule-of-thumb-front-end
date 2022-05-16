import * as React from 'react';
import People from "../../assets/img/bg-people.png";
import People2X from "../../assets/img/bg-people.@2x.png";

const SubmitName = () => {
    return (
        <aside className="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
            <img
                srcSet={`${People} 750w, ${People2X} 1440w`}
                sizes="(min-width: 750px) 1440px, 100vw"
                className="banner__background" src={People}
                alt=""
                role="none" />
            <div className="banner__left">
                <h2 className="banner__heading">Is there anyone else you would want us to add?</h2>
            </div>
            <div className="banner__right">
                <button className="banner__cta">
                    Submit a name
                </button>
            </div>
        </aside>
    )
}

export default SubmitName;
