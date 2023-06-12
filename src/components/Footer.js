import React from "react";
import "./footer.css"
export default function Footer(){
    return(
    <div>
        <div class="footer__item-content">
                <div class="footer-logo">
                  <a href="https://www.boat-lifestyle.com" class="p-0">
                    <img class="footer-logo" loading="lazy" sizes="100px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg" alt="logo"/>
                  </a>
                </div><div class="signup-form mt-4">
  <span class="signup-heading">Subscribe to our email alerts!</span>
  
  <span class="input-block">
    <input autocomplete="no-autocomplete" type="email" id="subscriber-email" placeholder="Enter your email address" class="required email" value="" name="email" aria-label="translation missing: en.layout.signup.label"/>
    <button class="button" id="subscribe-btn" type="submit">
      <span>
  <svg xmlns="http://www.w3.org/2000/svg" width="8.27" height="14.473" viewBox="0 0 8.27 14.473">
    <path id="Path_340747" data-name="Path 340747" d="M.28.277a.961.961,0,0,1,1.349,0L7.991,6.569a.936.936,0,0,1,0,1.334L1.628,14.2a.961.961,0,0,1-1.349,0,.935.935,0,0,1,0-1.334L5.966,7.237.28,1.611A.935.935,0,0,1,.28.277Z" fill="#868c91" fill-rule="evenodd"></path>
  </svg></span>
    </button>
  </span>
</div>

{/* <script>var localValuePop = localStorage.getItem('MyPopup');
   if(!localValuePop) {
   	 setTimeout(function(){
    	$(".pop-overlay, .boathead-pop").fadeIn();
    }, 15000);
   }
   $("#subscribe_pop").on("click",function(){var e=document.getElementById("pop_email").value;""!==e&&/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e)?localStorage.getItem("userEmailId")===e?$(".aluser-msg").show():(localStorage.setItem("userEmailId",e),localStorage.setItem("MyPopup","popOnce"),clevertap.onUserLogin.push({Site:{Email:e,"MSG-email":!0}}),clevertap.event.push("Newsletter Subscribed",{Email:e,Source:"Popup"}),$(".thankyou-msg-pop").show(),setTimeout(function(){$(".pop-overlay, .boathead-pop").fadeOut()},5e3)):$(".error-msg-pop").show(),setTimeout(function(){$(".error-msg-pop").fadeOut()},5e3)}),$(".pop-overlay, .close-pop").click(function(){localStorage.setItem("MyPopup","popOnce"),$(".pop-overlay, .boathead-pop").fadeOut()}),$("#subscribe-btn").on("click",function(e){$('#subscribe-btn').attr('disabled', 'disabled');var o=document.getElementById("subscriber-email").value;""!==o&&/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(o)?localStorage.getItem("userEmailId")===o?$(".input-block").append('<p class="aluser-msg text-white">You are already subscribed!</p>').show():(localStorage.setItem("userEmailId",o),clevertap.onUserLogin.push({Site:{Email:o,"MSG-email":!0}}),clevertap.event.push("Newsletter Subscribed",{Email:o,Source:"Footer"}),$(".input-block").append('<p class="thankyou-msg text-white">Thank You for subscribing. Please check your inbox!</p>').show(),$("#subscriber-email").val("")):$(".input-block").append('<p class="error-msg text-white">Please enter a valid email Id!</p>').show(),setTimeout(function(){$(".thankyou-msg, .error-msg, .aluser-msg").remove();$('#subscribe-btn').removeAttr('disabled');},5e3)}),$(".download-box a").click(function(){clevertap.event.push("Download App Clicked")});
	
</script> */}
              </div>
    </div>
    )
}