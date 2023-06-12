import React from "react";
import "./footer.css";
import FooterElement from "./FooterElements";
export default function Footer() {
  return (
    <div className="footer-main">
      <div class="footer__item-content">
        <div class="footer-logo">
          <a href="https://www.boat-lifestyle.com">
            <img
              class="footer-logo"
              loading="lazy"
              sizes="100px"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <div className="marginBottom">
          <span className="bolder">Subscribe to our email alerts!</span>
          </div>
          <div className="boatSearch">
          <span>
            <input
              autocomplete="no-autocomplete"
              type="email"
              id="subscriber-email"
              placeholder="Enter your email address"
              value=""
              name="email"
              
            />
            <button class="button" type="submit">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.27"
                  height="14.473"
                  viewBox="0 0 8.27 14.473"
                >
                  <path
                    id="Path_340747"
                    data-name="Path 340747"
                    d="M.28.277a.961.961,0,0,1,1.349,0L7.991,6.569a.936.936,0,0,1,0,1.334L1.628,14.2a.961.961,0,0,1-1.349,0,.935.935,0,0,1,0-1.334L5.966,7.237.28,1.611A.935.935,0,0,1,.28.277Z"
                    fill="#868c91"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
          </span>
          </div>
        </div>
      </div>
      <FooterElement/>
    </div>
  );
}
