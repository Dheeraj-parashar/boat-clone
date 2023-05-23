import React from "react";
import "./DailyDeal.css";
export default function DailyDeal() {
  return (
    <div className="dailyDealContainer">
      <a href="https://www.boat-lifestyle.com/collections/daily-deals">
        <div className="dailyDealBar flexspacebetween">
          <div className="bestSellerHeading" id="dailyDeal">
            {" "}
            Daily <span className="categories"> Deals</span>
          </div>

          <b class="view-all">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                id="Path_337386"
                data-name="Path 337386"
                d="M8.159,2.693a6.7,6.7,0,0,0,2.7-.551A7.172,7.172,0,0,0,13.095.625,7.133,7.133,0,0,0,14.608-1.6a6.735,6.735,0,0,0,.548-2.706,6.7,6.7,0,0,0-.551-2.7A7.216,7.216,0,0,0,13.087-9.25a7.041,7.041,0,0,0-2.234-1.513,6.781,6.781,0,0,0-2.7-.544,6.755,6.755,0,0,0-2.7.544A7.1,7.1,0,0,0,3.22-9.25,7.134,7.134,0,0,0,1.7-7.012a6.742,6.742,0,0,0-.548,2.7A6.7,6.7,0,0,0,1.706-1.6,7.184,7.184,0,0,0,3.223.625a7.184,7.184,0,0,0,2.23,1.517A6.7,6.7,0,0,0,8.159,2.693Zm0-1.283A5.609,5.609,0,0,1,5.932.968,5.741,5.741,0,0,1,4.109-.261,5.692,5.692,0,0,1,2.885-2.084a5.648,5.648,0,0,1-.44-2.226,5.648,5.648,0,0,1,.44-2.226A5.692,5.692,0,0,1,4.109-8.36,5.7,5.7,0,0,1,5.929-9.585a5.622,5.622,0,0,1,2.223-.44,5.675,5.675,0,0,1,2.23.44A5.681,5.681,0,0,1,12.208-8.36a5.692,5.692,0,0,1,1.225,1.823,5.648,5.648,0,0,1,.44,2.226,5.648,5.648,0,0,1-.44,2.226A5.692,5.692,0,0,1,12.208-.261,5.741,5.741,0,0,1,10.385.968,5.609,5.609,0,0,1,8.159,1.411Zm3.5-5.735a.637.637,0,0,0-.209-.44l-2.306-2.3a.541.541,0,0,0-.389-.144.5.5,0,0,0-.371.151.507.507,0,0,0-.148.367.526.526,0,0,0,.166.4l.843.821.793.648L8.62-4.887H5.183a.528.528,0,0,0-.4.162.557.557,0,0,0-.155.4.553.553,0,0,0,.155.4.535.535,0,0,0,.4.159H8.62l1.419-.058-.793.656L8.4-2.35a.5.5,0,0,0-.166.389.528.528,0,0,0,.148.378.491.491,0,0,0,.371.155.529.529,0,0,0,.389-.159l2.306-2.291A.627.627,0,0,0,11.661-4.325Z"
                transform="translate(-1.155 11.307)"
                fill="#2f5b96"
              ></path>
            </svg>
          </b>
        </div>
      </a>

      <picture>
        <source
          media="(min-width: 769px)"
          height="145"
          width="1600"
          alt=""
          srcset="//cdn.shopify.com/s/files/1/0057/8938/4802/files/timer-background_700x.png?v=1683785048 700w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/timer-background_800x.png?v=1683785048 800w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/timer-background_900x.png?v=1683785048 900w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/timer-background_1000x.png?v=1683785048 1000w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/timer-background_1200x.png?v=1683785048 1200w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/timer-background_1400x.png?v=1683785048 1400w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/timer-background_1600x.png?v=1683785048 1600w"
        />
        <img className="dailyDealsImg"
          alt="flash_timer"
          width="100%"
          height="404"
          src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/Timmer_600x.png?v=1681996057"
          srcset="//cdn.shopify.com/s/files/1/0057/8938/4802/files/Timmer_200x.png?v=1681996057 200w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/Timmer_300x.png?v=1681996057 300w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/Timmer_400x.png?v=1681996057 400w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/Timmer_500x.png?v=1681996057 500w, //cdn.shopify.com/s/files/1/0057/8938/4802/files/Timmer_600x.png?v=1681996057 600w"
        />
      </picture>
    </div>
  );
}
