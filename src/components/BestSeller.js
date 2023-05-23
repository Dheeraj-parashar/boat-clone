import React from "react";
import "./BestSeller.css";

export default function BestSeller() {
  return (
    <div className="bestSeller" style={{marginBottom:"10px"}}>
      <div className="bestSellerHeading">
        {" "}
        Best Selling <span className="categories"> Categories</span>
      </div>
      <div className="bestSellerItem">
        <div className="bestSellerVideoContainer">
          <div className="bestSellerVideo">
          <video
              style={{ objectFit: "cover" }}
              loop
              autoPlay
              muted="muted"
              poster="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_fwlpE3CkQhVKVCf8QU1Gz.jpg?v=17939700741868559451"
              preload="none"
              playsinline="true"
            >
                <source src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_w09og2yYk4QMkLcLn4fyx.mp4?v=13044481192932106528"/>
            </video>

            <p>Smartwatches</p>
          </div>
          <div className="bestSellerVideo">
          <video
              style={{ objectFit: "cover" }}
              loop
              autoPlay
              muted="muted"
              poster="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_9O6xvZXZ3kYLbUbtsnj4S.jpg?v=10589554669730693856"
              preload="none"
              playsinline="true"
            >
                <source src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4?v=6517359867084812371"/>
            </video>

            <p>Wireless  Earbuds</p>
          </div>
          <div className="bestSellerVideo">
          <video
              style={{ objectFit: "cover" }}
              loop
              autoPlay
              muted="muted"
              poster="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_KXwTUL2r91fh5uAHqSyIH.jpg?v=14850539122786675893"
              preload="none"
              playsinline="true"
            >
                <source src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4?v=14150048875423312161"/>
            </video>

            <p>Neckbands</p>
          </div>
          <div className="bestSellerVideo">
            <video
              style={{ objectFit: "cover" }}
              loop
              autoPlay
              muted="muted"
              poster="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_v90hMzAEa585W2YTUR9UF.jpg?v=17250700239301190396"              preload="none"
              playsinline="true"
            >
            <source src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4?v=14881283340894746343"/>            </video>

            <p>HeadPhones</p>
          </div>
        
        </div>
      </div>
    </div>
  );
}
