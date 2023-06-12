import React from "react";
import './FooterElement.css';
import { useState } from "react";
export default function FooterElement() {
  const Shop = [
    {
      href: "/collections/true-wireless-earbuds",
      classname: "boat-style",
      innerHtml: "True Wireless Earbuds",
    },
    {
      href: "/collections/bluetooth-wireless-headphones",
      classname: "boat-style",
      innerHtml: "Wireless Headphones",
    },
    {
      href: "/collections/wired-headphones",
      classname: "boat-style",
      innerHtml: "Wired Headphones",
    },
    {
      href: "/collections/wireless-speakers",
      classname: "boat-style",
      innerHtml: "Wireless Speakers",
    },
    {
      href: "/collections/home-audio",
      classname: "boat-style",
      innerHtml: "Home Audio",
    },
    {
      href: "/collections/mobile-accessories",
      classname: "boat-style",
      innerHtml: "Mobile Accessories",
    },
    {
      href: "/collections/smart-watches",
      classname: "boat-style",
      innerHtml: "Smart Watches",
    },
    {
      href: "/collections/trebel-for-women",
      classname: "boat-style",
      innerHtml: "TRebel",
    },
    {
      href: "/collections/misfit-by-boat",
      classname: "boat-style",
      innerHtml: "Misfit",
    },
    {
      href: "https://www.boat-lifestyle.com/products/gift-card",
      classname: "boat-style",
      innerHtml: "Gift Card",
    },
    {
      href: "https://www.boat-lifestyle.com/pages/earn-rewards-referring-friends?utm_source=referralprogram&amp;utm_medium=referral_footer&amp;utm_campaign=referralprogram",
      classname: "boat-style",
      innerHtml: "Earn ₹100",
    },
  ];
  const Help = [
    {
      href: "https://dtc.boat-lifestyle.com/track",
      classname: "boat-style",
      innerHtml: "Track Your Order",
    },
    {
      href: "http://support.boat-lifestyle.com/",
      classname: "boat-style",
      innerHtml: "Warranty & Support",
    },
    {
      href: "/pages/return-policy",
      classname: "boat-style",
      innerHtml: "Return Policy",
    },
    {
      href: "/pages/service-center-list",
      classname: "boat-style",
      innerHtml: "Service Centers",
    },
    {
      href: "mailto:Corporate@imaginemarketingindia.com?subject=BoAt Bulk Orders&amp;body=Hi,%0d%0a%0d%0aI would like to request a bulk shipment of boAt products.%0d%0a%0d%0aDetails of boAt products required:%0d%0a%0d%0aContact Phone Number:%0d%0a%0d%0a",
      classname: "boat-style",
      innerHtml: "Bulk Orders",
    },
    {
      href: "/pages/frequently-asked-questions",
      classname: "boat-style",
      innerHtml: "FAQs",
    },
    {
      href: "/pages/why-buy-direct",
      classname: "boat-style",
      innerHtml: "Why Buy Direct",
    },
  ];
  const Company = [
    {
      href: "/pages/who-are-we",
      classname: "boat-style",
      innerHtml: "About boAt",
    },
    {
      href: "https://www.boat-lifestyle.com/blogs/news",
      classname: "boat-style",
      innerHtml: "News",
    },
    {
      href: "/blogs/blog",
      classname: "boat-style",
      innerHtml: "Read Our Blog",
    },
    {
      href: "mailto:Careers@imaginemarketingindia.com?subject=Hi boAthead",
      classname: "boat-style",
      innerHtml: "Careers",
    },
    {
      href: "/pages/security",
      classname: "boat-style",
      innerHtml: "Security",
    },
    {
      href: "/pages/investor-relations",
      classname: "boat-style",
      innerHtml: "Investor Relations",
    },
    {
      href: "https://www.boat-lifestyle.com/pages/social-responsibility",
      classname: "boat-style",
      innerHtml: "Social Responsibility",
    },
    {
      href: "https://www.boat-lifestyle.com/pages/warranty",
      classname: "boat-style",
      innerHtml: "Warranty Policy",
    },
  ];

  const [view, setView] = useState({
    shop: false,
    help: false,
    company: false,
  });
  function handleClick(e) {
    if (e.target.id === "link_btn_1") {
      setView({ ...view, shop: !view.shop });
    }
    if (e.target.id === "link_btn_2") {
      setView({ ...view, help: !view.help });
    }
    if (e.target.id === "link_btn_3") {
      setView({ ...view, company: !view.company });
    }
  }

  return (
    <div className="footerElementMain">
      <div className="menu-panel">
        <button
          id="link_btn_1"
          className="footer-btn"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Shop
        </button>
        <ul>
          {view.shop &&
            Shop.map((item, index) => (
              <li key={index} className={item.classname}>
                <a href={item.href}>{item.innerHtml}</a>
              </li>
            ))}
        </ul>
      </div>
      <div className="menu-panel">
        <button
          id="link_btn_2"
          className="footer__item-title heading heading--small"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Help
        </button>
        <ul>
          {view.help &&
            Help.map((item, index) => (
              <li key={index} className={item.classname}>
                <a href={item.href}>{item.innerHtml}</a>
              </li>
            ))}
        </ul>
      </div>

      <div className="menu-panel">
        <button
          id="link_btn_3"
          className="footer__item-title heading heading--small"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Company
        </button>
        <ul>
          {view.company &&
            Company.map((item, index) => (
              <li key={index} className={item.classname}>
                <a href={item.href}>{item.innerHtml}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
