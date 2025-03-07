import React from "react";
import './insidetopbanner.css';

function InsideTopBanner(props) {
    return (
        <>
          <div className="inside-top-area">
              <img src={props.BackgrondBack} alt="back images" />
              <div className="content-part">
                  <div className="sub">{props.pageSubTitle}</div>
                  <h1>{props.pageTitle}</h1>
              </div>
          </div>
        </>
    );
}
export default InsideTopBanner;