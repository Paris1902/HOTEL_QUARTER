!function(){var e,t,n={862:function(e,t,n){"use strict";var i=n(755),a=!1;function s(e){i(".js-contactform").on("submit",(function(t){i("#js-contactformbutton").disabled=!0,t.preventDefault(),!0!==a&&(a=!0,i("#js-submit-loader").removeClass("inactive"),grecaptcha.ready((function(){grecaptcha.execute(e,{action:"submit"}).then((function(e){i("#recaptchaResponse").val(e);var n=t.target,s=i(n).serializeArray(),o=n.getAttribute("action"),r=i(n).find("#redirect").val(),l=i(n).find(".js-message");i.ajax({type:"POST",url:o,dataType:"json",data:s,cache:!1,async:!1,success:function(e){console.log(e.errors),!0===e.success?r?location.href=r:(l.removeClass("feedback--error").addClass("feedback--succes").html(e.message).css("display","block"),i("#js-contactformbutton").attr("disabled",!0)):(l.removeClass("feedback--succes").addClass("feedback--error").html(e.message).css("display","block"),a=!1),this.loaderInactive()},error:function(){l.removeClass("feedback--succes").addClass("feedback--error").html("Something went wrong sending your message").css("display","block"),this.loaderInactive(),a=!1},loaderInactive:function(){i("#js-submit-loader").addClass("inactive")}})}))})))}));var t={en:"This site is protected by reCAPTCHA and the Google %privacy_link%Privacy Policy%link_end% and %terms_link%Terms of Service%link_end% apply.",nl:"Deze site wordt beschermd door reCAPTCHA en het Google %privacy_link%Privacybeleid%link_end% en %terms_link%Servicevoorwaarden%link_end% zijn van toepassing.",de:"Diese Website ist durch reCAPTCHA geschützt und es gelten die %privacy_link%Datenschutzerklärung%link_end% und die %terms_link%Nutzungsbedingungen%link_end% von Google.",fr:"Ce site est protégé par reCAPTCHA et la %privacy_link%Politique de confidentialité%link_end% et les %terms_link%Conditions d'utilisation%link_end% de Google s'appliquent.",es:"Este sitio está protegido por reCAPTCHA y se aplican la %privacy_link%Política de privacidad%link_end% y los %terms_link%Términos de servicio%link_end% de Google.",it:"Questo sito è protetto da reCAPTCHA e si applicano le %privacy_link%Norme sulla privacy%link_end% e %terms_link%Termini di servizio%link_end% di Google."}[window.hc_defaults.language];t&&i(".js-captcha-translation").length&&(i(".js-captcha-translation")[0].innerHTML=t.replace("%privacy_link%",'<a href="https://policies.google.com/privacy">').replace("%terms_link%",'<a href="https://policies.google.com/terms">').replaceAll("%link_end%","</a>"))}n(532);var o=n(755),r=n(381),l=n(755),c=n(755),d=n(755),u={hotelID:"",hotelName:"",language:"en",fancyboxWidth:"100%",fancyboxMaxwidth:"1200px",fancyboxHeight:"96vh",iframe:"hc_iframe",form:null,map:null,routemarkers:[],translation:{}};function f(e,t,n,i){this.type="default",this.params={},this.params.ID=e,this.params.lang=t,this.hotelInfo=n,this.options={form_class:"hoteliers-form__form",form_class_suffix:"",date_format:"DD-MM-YYYY",default_days:1,frame_width:"100%",frame_height:"100%",packages:!1,rooms:!1,enable_onSiteOverlay:!1,chain_id:!1,datepickerOptions:{},translation:{confirm:u.translation.finalPage||"",night:u.translation.night||"night",nights:u.translation.nights||"nights"}},c.extend(this.options,i),this.initForm()}f.prototype={initForm:function(){var e,t,n,i,a,s,d,f,h,p,g,m,v,_,k;this.set_attributes(),c(".js-quickbooker").length&&(e=this.options,t=this.hotelInfo,n=u.language,i="#arrivaldate"+e.form_class_suffix,a="#departuredate"+e.form_class_suffix,s=o(i),d=o(a),f=o(".js-canvas--dt"),h=o(".js-form-element--promo"),p=".text-input--inactive",g="m-canvas--dt--set-inactive",m='<div class="m-datepicker__no-more-dates-available"><div class="m-datepicker__no-more-dates-available-body">'+(e.translation.confirm||"").replace("{mail}",'<a class="m-datepicker__contact-option h-single-line" href="mailto:'+t.email+'">'+t.email+"</a>").replace("{phone}",'<a class="m-datepicker__contact-option h-single-line" href="tel:'+t.phonenr+'">'+t.phonenr+"</a>")+"</div></div>",v=r().format("YYYY-MM-DD"),_=r().add(1,"days").format("YYYY-MM-DD"),k=l.htlrsDatepicker(o.extend({language:n,$dateStart:s,$dateEnd:d,classes:{modifierEndDate:"departure",modifierStartDate:"arrival"},activeHeaderStep:1,dateStart:v,dateEnd:_,formatDateDisplay:e.date_format,insertBefore:f,leftOffsetAdjustment:0,mobileViewOnTablet:!0,messages:{"final-screen":m,"footer.night":e.translation.night||"","footer.nights":e.translation.nights||"","nights.single":"%d "+(e.translation.night||"night"),"nights.plural":"%d "+(e.translation.nights||"nights")}},e.datepickerOptions||{})).on(Datepicker.EVENT__AFTER_SHOW,(function(){f.addClass(g),h.addClass(p),e.datepickerOptions.makePositionAbsolute&&k.htlrsDatepicker.makePositionAbsolute()})).on(Datepicker.EVENT__AFTER_HIDE,(function(){f.removeClass(g),h.removeClass(p)})).on(Datepicker.EVENT__DATE_SELECTED,(function(e,t,n){var i=n.format("YYYY-MM-DD");t===Datepicker.DATE__START&&s.attr("data-calendar-arrivaldate",i),t===Datepicker.DATE__END&&d.attr("data-calendar-departuredate",i),t===Datepicker.DATE__END&&o(".js-check").trigger("iPad"==navigator.platform&&window!=window.top?"touchend":"click")})),e.datepickerOptions.isSingleElementForm&&(k.htlrsDatepicker.makePositionFixed(),o(window).on("scroll",(function(){"none"!==k.css("display")&&k.htlrsDatepicker.resetElementPosition()})))),this.set_eventlisteners(),c(".js-font-action").hover((function(){c("div.js-corp-description").removeClass("h-hidden")}),(function(){c("div.js-corp-description").addClass("h-hidden")}))},reset:function(){for(var e in this.params)"ID"!==e&&"lang"!==e&&delete this.params[e]},get_type:function(){return this.type},get_options:function(){return this.options},set_attributes:function(e){var t=this;c("."+t.get_options().form_class).find(".js-grid-item").each((function(){var e=c(this),n=e.find("input, button"),i=e.attr("data-item");n.attr("id")||n.attr("id",i),t.get_options()[i]=n.attr("id"),e.find("label").attr("for",e.find("input").attr("id"))}))},set_eventlisteners:function(){var e=this;c("#"+e.get_options().hoteliers_submit).on("click",(function(t){t.preventDefault(),e.hf_check_form(this)}))},hf_check_dates:function(){var e=this;return e.params.arrival=c("#"+e.get_options().hoteliers_arrival).val(),e.params.departure=c("#"+e.get_options().hoteliers_departure).val(),!0},hf_check_roomid:function(){var e=this,t=c("."+e.get_options().form_class).find(".hf_room_id").val();void 0!==t&&(e.params.roomID=t,e.type="one_room")},hf_check_packageid:function(){var e=this,t=c("."+e.get_options().form_class).find(".hf_package_id").val();void 0!==t&&(e.params.pID=t,e.type="one_package")},hf_check_engineselect:function(){var e=this,t=c("."+e.get_options().form_class).find("#hf_engine").val();("rooms"===t||e.get_options().rooms)&&(e.type="rooms"),("packages"===t||e.get_options().packages)&&(e.type="packages")},hf_check_hotelselect:function(){var e=this,t=c("."+e.get_options().form_class).find("#hf_hotel_hotelid").val();if(void 0!==t){if(""!=t)return e.type="default",void(e.params.ID=t);e.type="chain",e.params.ID=e.options.chain_id}},hf_check_password:function(){var e=this,t=c("."+e.get_options().form_class).find("#"+e.get_options().hoteliers_code).val();"chain"!=e.type&&("passwd"===e.type&&""===t&&(e.type="default"),void 0!==t&&""!==t&&(e.type="passwd",e.params.passwd=t))},hf_create_enginelink:function(){var e=this.hf_hostname_ext("com"),t="http"+(-1!==c.inArray(e,["com","dev"])?"s":"")+"://www.hoteliers."+e+"/";return{default:t+"wlpEngine.php",packages:t+"wlpPEngine.php",passwd:t+"cwlpEngine.php",rooms:t+"wlpREngine.php",one_package:t+"wlp1PEngine.php",one_room:t+"wlp1REngine.php",chain:t+"cgEngine.php"}[this.get_type()]},hf_create_params:function(){var e="?"+c.param(this.params);return this.hf_get_analytics(e)},hf_get_analytics:function(e){var t=c("#analytics_code").val();return void 0!==t&&ga&&(ga("create",t,{allowLinker:!0}),ga("set","anonymizeIp",!0),ga((function(t){e+="&"+t.get("linkerParam")}))),e},hf_hostname_ext:function(e){var t=window.location.href.match(/^https?\:\/\/(.*?)\//i)[1].split(".").reverse()[0];return-1!==d.inArray(t,["dev","beta","stg"])?t:e||"com"},hf_check_form:function(e){var t=this;if(t.hf_check_dates()){t.hf_check_roomid(e),t.hf_check_packageid(e),t.hf_check_hotelselect(),t.hf_check_engineselect(),t.hf_check_password();var n=t.hf_create_params(),i=t.hf_create_enginelink();g.isMobile(),g.isTablet(),null!=i&&window.open(i+n,"_blank")}t.reset()}};var h={EVENT_CLICK_OUTSIDE:"click-outside",selectorToClass:function(e){return e.replace(/^\./,"")},setClickOutsideForSelector:function(e,t){d(document).on("click ".concat(this.EVENT_CLICK_OUTSIDE),(function(n){var i=d(n.currentTarget);i!==d(e)&&i.parents(e).length<=0&&t()}))},setDoubleTabMenu:function(e){e(".js-subnav li:has(ul)").doubleTapToGo()},setDropdown:function(e){var t=this,n="uniq-selector",i=".js-dropdown",a="custom-dropdown--active o-dropdown--active";e(i).on("click",(function(s){var o=e(s.currentTarget),r=o.data(n)||o.data(n,"".concat(i,"--").concat((new Date).getTime())).data(n),l=t.selectorToClass(r);s.stopPropagation(),e(document).trigger(t.EVENT_CLICK_OUTSIDE),o.addClass(l).toggleClass(a),t.setClickOutsideForSelector(r,(function(){return o.removeClass(a)}))}))},setReportBrokenLinkForm:function(){d(".js-page-error--reportlink").on("click",(function(e){var t="form#form-reporterror";if(!(d(t).length<=0)){var n={};d(t+" :input").each((function(e,t){n[d(t).attr("name")]=d(t).val()})),d.post("/"+u.language+"/error/reportbrokenlink/",{errorinfo:n},(function(t){d(e.currentTarget).after(d("<span />").html(t.message)).remove()}))}}))},setVideo:function(e){e(".js-video-src").length>0&&e(".js-set-video").on("click",(function(t){e(t.currentTarget).closest(".js-video-container").find(".js-video-src").attr("src",e(t.target).data("src"))}))},toggleDirectBookerButton:function(){var e=c(".btn--palm").is(":visible");d(".js-directbooker").css("display",e?"none":"block"),d(".js-directbooker--mobile").css("display",e?"block":"none")},toggleNav:function(e){e(".js-toggle-nav").on("click",(function(){e(".js-qb").hasClass("active")?(e(".js-qb").addClass("exit"),setTimeout((function(){e(".js-qb").removeClass("active"),e(".js-qb").removeClass("exit")}),250),e(".js-nav").addClass("active")):e(".js-nav").hasClass("active")?(e(".js-nav").addClass("exit"),setTimeout((function(){e(".js-nav").removeClass("active"),e(".js-nav").removeClass("exit")}),250)):e(".js-nav").addClass("active")}))},toggleQuickbooker:function(e){e(".js-toggle-qb").on("click",(function(){e(".js-nav").hasClass("active")?(e(".js-nav").addClass("exit"),setTimeout((function(){e(".js-nav").removeClass("active"),e(".js-nav").removeClass("exit")}),250),e(".js-qb").addClass("active")):e(".js-qb").hasClass("active")?(e(".js-qb").addClass("exit"),setTimeout((function(){e(".js-qb").removeClass("active"),e(".js-qb").removeClass("exit")}),250)):e(".js-qb").addClass("active")}))}},p={autoplayVideo:function(e){if(e("#js-startupVideo").length){var t={url:e("#js-startupVideo").data("src"),autoplay:!0,background:!0,loop:!0,autopause:!1,muted:!0};new Vimeo.Player("js-startupVideo",t).on("play",(function(){console.log("Video playing..")}))}},setDiscountSlider:function(e,t){var n=this,i="discount_slider_autoshow",a="js-discount-slider__feedback",s=!1,o=t.find(".js-discount-slider__btn-toggle");o.on("click",(function(){e(n).toggleClass("is-active"),t.find(".js-discount-slider__wrapper").toggleClass("is-active"),t.toggleClass("is-active"),e(".js-body").toggleClass("no-scroll-small")})),e(".js-discount-slider-send-button").on("click",(function(t){if(t.preventDefault(),!0!==s){var n=e(".js-discount-slider__input--email-address");e(".".concat(a)).remove(),s=!0,e.post("/api/".concat(u.language,"/discountslider"),{emailAddress:n.val(),language:u.language}).done((function(t){var i=e("<span/>").addClass([a,"feedback","push-half--bottom","flush--right","flush--left"].join(" "));!0===t.success?(i.text(t.message).addClass("feedback--succes"),n.val("")):null!==(t.error||null)&&i.text(t.error).addClass("feedback--error"),i.insertBefore(n)})).always((function(){s=!1}))}})),t.find(".js-discount-slider__btn--close").on("click",(function(){o.trigger("click")})),t.find(".js-discount-slider__btn--book").on("click",(function(){(g.isMobile()||g.isTablet())&&window.open("https://www.hoteliers.com/wlpEngine.php?ID=".concat(u.hotelID,"&lang=").concat(u.language),"_blank")})),-1===document.cookie.indexOf(i+"=true")&&(setTimeout((function(){o.length>1&&(o=o.first()),o.trigger("click")}),6e3),document.cookie=i+"=true; expires=Fri, 31 Dec 9999 23:59:59 GMT")},setFancyboxes:function(e){var t=e(".js-fbopener");t.length>0&&t.each((function(){e(this).on("click",(function(t){t.preventDefault();var n=e(t.currentTarget).attr("href");if(!0===(g.isMobile()||g.isTablet()))var i=window.open("about:blank","_blank");e.ajax(n).done((function(t){var n=t;if(void 0!==i)return i.location.href=n,!1;e.fancybox.open({src:n,type:"iframe",opts:{infobar:!1,buttons:["close"],idleTime:!1,iframe:{scrolling:"yes",css:{width:u.fancyboxWidth,maxWidth:u.fancyboxMaxwidth,height:u.fancyboxHeight}}}})}))}))}))},setTabs:function(e){var t=e(".js-tab-selector"),n=t.first(),i=e(".js-tab-content .js-tab__tab"),a="m-discount-slider__tab--active";n.addClass(a),i.not('[rel="'.concat(n.data("tab"),'"]')).addClass(u.tabHideClass),t.each((function(n,s){var o=e(s);o.on("click",(function(){t.removeClass(a),i.addClass(u.tabHideClass),o.addClass(a),i.filter('[rel="'.concat(o.data("tab"),'"]')).removeClass(u.tabHideClass)}))}))}},g={hasTouchscreen:function(){return"ontouchstart"in document.documentElement},isTablet:function(){return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i)&&screen.width>=600},isMobile:function(){return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)&&screen.width<=600},isDesktop:function(){return!this.isTablet()||!this.isMobile()},isIOS:function(){return navigator.userAgent.match(/iPad|iPhone|Mac/i)}},m=n(755);function v(e){var t,n=m(e.sliderClass);if(!(!n.length>0)){var i=null!==(t=n.data("slider-time"))&&void 0!==t?t:window.hc_defaults.sliderTime,a=Object.assign({autoplay:i>0,autoplaySpeed:1e3*i},e.slickOptions);e.usesCustomArrows&&(a.prevArrow=m(".slider_arrow--left"),a.nextArrow=m(".slider_arrow--right"));for(var s=0;s<n.length;s++){var o=m(n[s]);o.slick(a).on("beforeChange",(function(e,t,n,i){k(t,i)})),e.attachFullScreen&&_(m,"".concat(e.sliderClass,'[rel="').concat(o.attr("rel"),'"]'))}}}function _(e,t){var n=e(t),i=n.attr("rel"),a=n.find(".slick-slide").not(".slick-cloned").find('img[rel="'.concat(i,'"]')).map((function(){var t=e(this),n=t.attr("src"),i=t.data("src");return{src:null===(n||null)&&null!==(i||null)?i:n}})).get();n.on("click",".slick-slide",(function(){e.fancybox.open(a,{loop:!1,thumbs:{showOnStart:!1},infobar:!1,idleTime:!1,buttons:["close"]}),e.fancybox.getInstance("jumpTo",n.slick("slickCurrentSlide"))}))}function k(e,t){var n=m(e.$slides[t]),i=n.find("img"),a=i.data("src");i.attr("src")&&a&&i.attr("src",a);var s=n.find(".slick-slider__background-image,.js-slick-slider__background-image");if(s.length>0){var o=s.attr("style"),r=s.data("style");"none"===s.css("background-image")&&r&&s.attr("style","".concat(o," ").concat(r))}}var b=n(755);window.initHoteliers={config:function(e){!function(e){void 0!==e&&(u=c.extend(u,e))}(Object.assign({tabHideClass:"h-hide-small",datePickerOptions:{leftOffsetAdjustment:0,breakpointDeskStart:1040,breakpointLapEnd:1039}},e))},ready:function(e){b(".js-background-slider").length>0?v({sliderClass:".js-background-slider",usesCustomArrows:!0,slickOptions:{fade:!0,dots:!0,speed:750}}):b(".js-hero-video").length>0?portable_devices.isIOS()&&b(".js-hero-video").addClass("ios"):b(".js-background-slider-hero").removeClass("l-content-spacer--tall"),b(".slick--content").length>0&&v({sliderClass:".slick--content",attachFullScreen:!0,slickOptions:{dots:!0,speed:750}}),b(".js-slider").length>0&&v({sliderClass:".js-slider",attachFullScreen:!0,slickOptions:{dots:!0,speed:750}}),b(".js-quickbooker").length>0&&new f(hc_defaults.hotelID,hc_defaults.language,{email:hc_defaults.email,phonenr:hc_defaults.phonenr},{chain_id:hc_defaults.hotelID,datepickerOptions:{makePositionAbsolute:!0}}),b(".htlrs_singlebooker").length>0&&new f(""+hc_defaults.hotelID,""+hc_defaults.language,{email:""+hc_defaults.email,phonenr:""+hc_defaults.phonenr},{form_class:"hoteliers-form__form--single-element",form_class_suffix:"--single-element",datepickerOptions:{repositionOnChange:!0,makePositionAbsolute:!0}}),function(e){e(".js-discount-slider").length>0&&(p.setDiscountSlider(e,e(".js-discount-slider")),p.setTabs(e)),e(".js-quickbooker-bw").length>0&&window.bestwesternBooker.init(e),p.setFancyboxes(e),p.autoplayVideo(e),s(u.recaptcha_publickey)}(e)},load:function(e){e(window).resize((function(){e(".js-body").css("padding-bottom",document.getElementById("footer").getBoundingClientRect().height+"px")})).trigger("resize"),function(e){h.toggleDirectBookerButton(),!0===g.isTablet()&&h.setDoubleTabMenu(e),h.setDropdown(e),h.setVideo(e),e(".js-toggle-qb").length>0&&h.toggleQuickbooker(e),e(".js-toggle-nav").length>0&&h.toggleNav(e),c('[data-provide~="map"]').length&&n.e(983).then(n.bind(n,983)).then((function(){return window.googleMapsInit(window.googleMapsConfig)}))}(e)}},window.jQuery=c,window.$=c,window.hc_defaults=u,window.portable_devices=g,n(839),n(881),n(154),n(523)},881:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}!function(e,t,n,a){"use strict";var s="doubleTapToGo",o={automatic:!0,selectorClass:"doubletap",selectorChain:"li:has(ul)"};function r(t,n){this.element=t,this.settings=e.extend({},o,n),this._defaults=o,this._name=s,this.init()}e.extend(r.prototype,{preventClick:!1,currentTap:e(),init:function(){e(this.element).on("touchstart","."+this.settings.selectorClass,this._tap.bind(this)).on("click","."+this.settings.selectorClass,this._click.bind(this)).on("remove",this._destroy.bind(this)),this._addSelectors()},_addSelectors:function(){!0===this.settings.automatic&&e(this.element).find(this.settings.selectorChain).addClass(this.settings.selectorClass)},_click:function(t){this.preventClick?t.preventDefault():this.currentTap=e()},_tap:function(t){var n=e(t.target).closest("li");n.hasClass(this.settings.selectorClass)&&n.get(0)!==this.currentTap.get(0)?(this.preventClick=!0,this.currentTap=n,t.stopPropagation()):this.preventClick=!1},_destroy:function(){e(this.element).off()},reset:function(){this.currentTap=e()}}),e.fn[s]=function(t){var n,o=arguments;return t===a||"object"===i(t)?this.each((function(){e.data(this,s)||e.data(this,s,new r(this,t))})):"string"==typeof t&&"_"!==t[0]&&"init"!==t?(this.each((function(){var i=e.data(this,s),a="destroy"===t?"_destroy":t;i instanceof r&&"function"==typeof i[a]&&(n=i[a].apply(i,Array.prototype.slice.call(o,1))),"destroy"===t&&e.data(this,s,null)})),n!==a?n:this):void 0}}(n(755),window,document)},839:function(e,t,n){var i=n(755),a={formClass:".js-newsletterform",buttonClass:".js-newsletterbutton",hiddenField:".js-newsletterhidden",validClass:"valid",invalidClass:"invalid"},s={compareEmailAddressess:function(e,t){return i(e).val()===i(t).val()},init:function(e){var t=this;void 0!==e&&(a=i.extend(a,e));var n=i(a.formClass);n.length>0&&(t.validateRequiredFields(n),i(a.buttonClass).on("click",(function(){t.setHiddenFieldValue("true")})))},setHiddenFieldValue:function(e){i(a.hiddenField).val(e)},setRequiredFieldValidation:function(e,t){!0===e?(i(t).parent().hasClass(a.invalidClass)&&i(t).parent().removeClass(a.invalidClass),i(t).parent().addClass(a.validClass)):(!1===i(t).parent().hasClass(a.invalidClass)&&i(t).parent().addClass(a.invalidClass),i(t).parent().removeClass(a.validClass))},validateEmailAddress:function(e){return new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(e)},validateRequiredFields:function(e){var t=this;e.find(".required").each((function(){i(this).blur((function(){var e="#"+i(this).attr("id"),n=i(this).val();switch(i(this).attr("id")){case"post_email":case"post_newsletter_email":var a=t.validateEmailAddress(n);break;case"post_newsletter_email2":a=!1,!0===t.validateEmailAddress(n)&&!0===t.compareEmailAddressess("input#post_newsletter_email","input#post_newsletter_email2")&&(a=!0);break;case"post_captcha":i.ajax({type:"POST",url:"/tools/checkcaptcha/",data:{word:i(this).val(),cid:i(".js_captcha_id").val()},success:function(n){switch(n){case"error_incorrectword":case"error_noword":break;default:a=!0,i(".js-errortext").text("")}t.setRequiredFieldValidation(a,e)}});break;default:a=n.length>=1}"post_captcha"!==e&&t.setRequiredFieldValidation(a,e)}))}))}};i(".js-contactform").length>0&&s.init({formClass:".js-contactform",buttonClass:".js-contactbutton",hiddenField:".js-contacthidden"}),i(".js-newsletterform").length>0&&s.init()},700:function(e,t,n){var i={};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id=700}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var s=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}a.m=n,e=[],a.O=function(t,n,i,s){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],s=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(r=!1,s<o&&(o=s));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,i,s]},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return"js/"+e+".js"},a.miniCssF=function(e){},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},a.l=function(e,n,i,s){if(t[e])t[e].push(n);else{var o,r;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==e){o=d;break}}o||(r=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.src=e),t[e]=[n];var u=function(n,i){o.onerror=o.onload=null,clearTimeout(f);var a=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(e){return e(i)})),n)return n(i)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),r&&document.head.appendChild(o)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},a.p="https://d2nvhdi9yaxpb3.cloudfront.net/domain/oldquarter-com/assets/",function(){var e={179:0};a.f.j=function(t,n){var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var s=new Promise((function(n,a){i=e[t]=[n,a]}));n.push(i[2]=s);var o=a.p+a.u(t),r=new Error;a.l(o,(function(n){if(a.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",r.name="ChunkLoadError",r.type=s,r.request=o,i[1](r)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,s,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var d=l(a)}for(t&&t(n);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var s=a.O(void 0,[736],(function(){return a(862)}));s=a.O(s)}();