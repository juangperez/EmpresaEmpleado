/*
jQWidgets v5.2.0 (2017-Sep)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){"use strict";e.jqx.jqxWidget("jqxNavigationBar","",{}),e.extend(e.jqx._jqxNavigationBar.prototype,{defineInstance:function(){var t={width:"auto",height:"auto",expandAnimationDuration:250,collapseAnimationDuration:250,animationType:"slide",toggleMode:"click",showArrow:!0,arrowPosition:"right",disabled:!1,initContent:null,rtl:!1,easing:"easeInOutSine",expandMode:"singleFitHeight",expandedIndexes:[],_expandModes:["singleFitHeight","single","multiple","toggle","none"],aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["expandingItem","expandedItem","collapsingItem","collapsedItem"]};return this===e.jqx._jqxNavigationBar.prototype?t:(e.extend(!0,this,t),t)},createInstance:function(){this._isTouchDevice=e.jqx.mobile.isTouchDevice(),e.jqx.aria(this),this.render()},val:function(e){return 0===arguments.length||"object"==typeof e?this.expandedIndexes:("string"==typeof e?(this.expandedIndexes.push(parseInt(e,10)),this._applyExpandedIndexes()):(e instanceof Array?this.expandedIndexes=e:this.expandedIndexes=[e],this._applyExpandedIndexes()),this.expandedIndexes)},expandAt:function(t){var i=this;if("single"==this.expandMode||"singleFitHeight"==this.expandMode||"toggle"==this.expandMode)for(var a=0;a<i.items.length;a++)a!=t&&i.collapseAt(a);var n=this.items[t];if(!1===n.disabled&&!1===n.expanded&&1==n._expandChecker)switch(n._expandChecker=0,this._raiseEvent("0",{item:t}),n._headerHelper.removeClass(this.toThemeProperty("jqx-fill-state-normal")),n._headerHelper.addClass(this.toThemeProperty("jqx-fill-state-pressed jqx-expander-header-expanded")),n._arrowHelper.removeClass(this.toThemeProperty("jqx-icon-arrow-down jqx-icon-arrow-down-hover jqx-icon-arrow-up-hover jqx-icon-arrow-down-selected jqx-expander-arrow-top")),n._arrowHelper.addClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded")),!1===this.heightFlag&&(i.element.style.overflowX="hidden",i.element.style.overflowY="hidden"),this.eCFlag=1,this.animationType){case"slide":var r=n._contentHelper,s=0,d=r.outerHeight();r.slideDown({duration:this.expandAnimationDuration,easing:this.easing,step:function(e,t){t.now=Math.round(e),"height"!==t.prop?s+=t.now:i._collapseContent?(t.now=Math.round(d-i._collapseContent.outerHeight()-s),s=0):t.now=Math.round(e)},complete:function(){n.expanded=!0,e.jqx.aria(n._header,"aria-expanded",!0),e.jqx.aria(n._content,"aria-hidden",!1),i._updateExpandedIndexes(),i._raiseEvent("1",{item:t}),i._checkHeight(),!0===i.heightFlag&&(i.element.style.overflowX="hidden",i.element.style.overflowY="auto"),i.initContent&&!1===n._initialized&&(i.initContent(t),n._initialized=!0),i.eCFlag=0}});break;case"fade":setTimeout(function(){n._contentHelper.fadeIn({duration:this.expandAnimationDuration,complete:function(){n.expanded=!0,e.jqx.aria(n._header,"aria-expanded",!0),e.jqx.aria(n._content,"aria-hidden",!1),i._updateExpandedIndexes(),i._raiseEvent("1",{item:t}),i._checkHeight(),!0===i.heightFlag&&(i.element.style.overflowX="hidden",i.element.style.overflowY="auto"),i.initContent&&!1===n._initialized&&(i.initContent(t),n._initialized=!0),i.eCFlag=0}})},this.collapseAnimationDuration);break;case"none":n._content.style.display="",n.expanded=!0,e.jqx.aria(n._header,"aria-expanded",!0),e.jqx.aria(n._content,"aria-hidden",!1),this._updateExpandedIndexes(),this._raiseEvent("1",{item:t}),this._checkHeight(),!0===this.heightFlag&&(i.element.style.overflowX="hidden",i.element.style.overflowY="auto"),this.initContent&&!1===n._initialized&&(this.initContent(t),n._initialized=!0),this.eCFlag=0}},collapseAt:function(t){var i=this.items[t];if(!1===i.disabled&&!0===i.expanded&&0===i._expandChecker){var a=this;switch(i._expandChecker=1,this._raiseEvent("2",{item:t}),i._headerHelper.removeClass(this.toThemeProperty("jqx-fill-state-pressed jqx-expander-header-expanded")),i._headerHelper.addClass(this.toThemeProperty("jqx-fill-state-normal")),i._arrowHelper.removeClass(this.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-icon-arrow-down-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded")),i._arrowHelper.addClass(this.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top")),!1===this.heightFlag&&(a.element.style.overflowX="hidden",a.element.style.overflowY="hidden"),this.eCFlag=1,this._collapseContent=i._contentHelper,this.animationType){case"slide":i._contentHelper.slideUp({duration:this.collapseAnimationDuration,step:function(e,t){t.now=Math.round(e)},easing:this.easing,complete:function(){i.expanded=!1,i._content.style.display="none",e.jqx.aria(i._header,"aria-expanded",!1),e.jqx.aria(i._content,"aria-hidden",!0),a._updateExpandedIndexes(),a._raiseEvent("3",{item:t}),a._checkHeight(),!0===a.heightFlag&&(a.element.style.overflowX="hidden",a.element.style.overflowY="auto"),a.eCFlag=0,a._collapseContent=null}});break;case"fade":i._contentHelper.fadeOut({duration:this.collapseAnimationDuration,complete:function(){i.expanded=!1,e.jqx.aria(i._header,"aria-expanded",!1),e.jqx.aria(i._content,"aria-hidden",!0),a._updateExpandedIndexes(),a._raiseEvent("3",{item:t}),a._checkHeight(),!0===a.heightFlag&&(a.element.style.overflowX="hidden",a.element.style.overflowY="auto"),a.eCFlag=0}});break;case"none":i._content.style.display="none",i.expanded=!1,e.jqx.aria(i._header,"aria-expanded",!1),e.jqx.aria(i._content,"aria-hidden",!0),this._updateExpandedIndexes(),this._raiseEvent("3",{item:t}),this._checkHeight(),!0===this.heightFlag&&(a.element.style.overflowX="hidden",a.element.style.overflowY="auto"),this.eCFlag=0}}},setHeaderContentAt:function(e,t){this.items[e]._headerText.innerHTML=t},getHeaderContentAt:function(e){return this.items[e]._headerText.innerHTML},setContentAt:function(e,t){this.items[e]._content.innerHTML=t,this._checkContent(e)},getContentAt:function(e){return this.items[e]._content.innerHTML},showArrowAt:function(e){this.items[e]._arrow.style.display="block"},hideArrowAt:function(e){this.items[e]._arrow.style.display="none"},enable:function(){this.disabled=!1,this._enabledDisabledCheck(),this.refresh(),e.jqx.aria(this,"aria-disabled",!1)},disable:function(){this.disabled=!0,this._enabledDisabledCheck(),this.refresh(),e.jqx.aria(this,"aria-disabled",!0)},enableAt:function(e){this.items[e].disabled=!1,this.refresh()},disableAt:function(e){this.items[e].disabled=!0,this.refresh()},invalidate:function(){this.refresh()},refresh:function(e){if(!0!==e){this._removeHandlers();for(var t=0;t<this.items.length;t++)this.items[t]._arrow.style.display=this.showArrow?"block":"none";this._updateExpandedIndexes(),this._setTheme(),this._setSize(),this._toggle(),this._keyBoard()}},render:function(){this.widgetID=this.element.id;var t=this;-1==this._expandModes.indexOf(this.expandMode)&&(this.expandMode="singleFitHeight"),e.jqx.utilities.resize(this.host,function(){t._setSize()}),t.element.setAttribute("role","tablist"),this.items&&(this._removeHandlers(),e.each(this.items,function(){this._header.className="",this._header.setAttribute("tabindex",null),this._header.style.marginTop="0px",this._headerText.className="",this._header.innerHTML=this._headerText.innerHTML,this._content.setAttribute("tabindex",null)})),this.items=[];var i=t.host.children(),a=i.length;try{if(a%2!=0)throw"Invalid jqxNavigationBar structure. Please add an even number of child div elements that will represent each item's header and content."}catch(e){throw new Error(e)}try{for(var n=0;n<a;n++)if("div"!=i[n].tagName.toLowerCase())throw"Invalid jqxNavigationBar structure. Please make sure all the children elements of the navigationbar are divs."}catch(e){throw new Error(e)}for(var r=0;r<a;r+=2){var s=i[r];s.innerHTML="<div>"+s.innerHTML+"</div>"}for(var d,o=0,h=0;h<a/2;h++){d=o+1;var l={};(l={})._header=i[o],l._headerHelper=e(i[o]),i[o].setAttribute("role","tab"),l._content=i[d],l._contentHelper=e(i[d]),l._contentHelper.initAnimate&&l._contentHelper.initAnimate(),l.expandedFlag=!1,l.expanded=!1,l.focusedH=!1,l.focusedC=!1,this.items[h]=l,i[d].setAttribute("role","tabpanel"),o+=2}var p=this.expandedIndexes.length;if(!this.items||0!==this.items.length){if("single"==this.expandMode||"singleFitHeight"==this.expandMode||"toggle"==this.expandMode||"none"==this.expandMode)0!==p?this.items[this.expandedIndexes[0]].expanded=!0:0!==p||"single"!=this.expandMode&&"singleFitHeight"!=this.expandMode||(this.items[0].expanded=!0);else if("multiple"==this.expandMode&&0!==p)for(var c=0;c<p;c++)t.items[this.expandedIndexes[c]].expanded=!0;this._enabledDisabledCheck();var x=0;e.each(this.items,function(i){var a=this;a._headerText=e(a._header).children()[0],t.rtl?e(a._headerText).addClass(t.toThemeProperty("jqx-expander-header-content-rtl")):e(a._headerText).addClass(t.toThemeProperty("jqx-expander-header-content")),a._arrow=document.createElement("div"),a._arrowHelper=e(a._arrow),a._header.appendChild(a._arrow),t.showArrow?a._arrow.style.display="block":a._arrow.style.display="none",!0===a.expanded?(a._arrowHelper.addClass(t.toThemeProperty("jqx-icon-arrow-up jqx-icon-arrow-up-selected jqx-expander-arrow-bottom jqx-expander-arrow-expanded")),t.initContent?setTimeout(function(){t.initContent(i),a._initialized=!0},10):a._initialized=!0,a._expandChecker=0,e.jqx.aria(a._header,"aria-expanded",!0),e.jqx.aria(a._content,"aria-hidden",!1)):!1===a.expanded&&(a._arrowHelper.addClass(t.toThemeProperty("jqx-icon-arrow-down jqx-expander-arrow-top")),a._initialized=!1,a._expandChecker=1,a._content.style.display="none",e.jqx.aria(a._header,"aria-expanded",!1),e.jqx.aria(a._content,"aria-hidden",!0)),null===a._header.getAttribute("tabindex")&&(x++,a._header.setAttribute("tabindex",x)),null===a._content.getAttribute("tabindex")&&(x++,a._content.setAttribute("tabindex",x))}),this._setTheme(),this._setSize();for(var m=0;m<t.items.length;m++)t._checkContent(m);this._toggle(),this._keyBoard()}},insert:function(e,t,i){var a=document.createElement("div"),n=document.createElement("div");if(a.innerHTML=t,n.innerHTML=i,e>=0&&e<=this.items.length){var r=this.items[e]._header;this.element.insertBefore(a,r),this.element.insertBefore(n,r)}else this.element.appendChild(a),this.element.appendChild(n);this.render()},add:function(e,t){this.insert(-1,e,t)},update:function(e,t,i){this.setHeaderContentAt(e,t),this.setContentAt(e,i)},remove:function(e){if(isNaN(e)&&(e=this.items.length-1),this.items[e]){this.items[e]._header.remove(),this.items[e]._content.remove(),this.items.splice(e,1);var t=this.expandedIndexes.indexOf(e);t>-1&&this.expandedIndexes.splice(t,1),this.render()}},destroy:function(){this._removeHandlers(),this.host.remove()},focus:function(){try{for(var e=0;e<this.items.length;e++){var t=this.items[e];if(!1===t.disabled)return t._header.focus(),!1}}catch(e){}},_applyExpandedIndexes:function(){for(var e=this,t=this.expandedIndexes.length,i=0;i<t;i++)for(var a=e.expandedIndexes[i],n=0;n<e.items.length;n++){var r=e.items[n];if(n==a){if(r.expandedFlag=!0,!1===r.expanded&&e.expandAt(n),"single"==e.expandMode||"singleFitHeight"==e.expandMode||"toggle"==e.expandMode||"none"==e.expandMode)return!1}else n!=a&&!1===r.expandedFlag&&e.collapseAt(n)}for(var s=0;s<e.items.length;s++)e.items[s].expandedFlag=!1},propertiesChangedHandler:function(e,t,i){i.width&&i.height&&2==Object.keys(i).length&&e._setSize()},propertyChangedHandler:function(e,t,i,a){e.batchUpdate&&e.batchUpdate.width&&e.batchUpdate.height&&2==Object.keys(e.batchUpdate).length||("width"!=t&&"height"!=t?"theme"!==t?"disabled"==t?e._enabledDisabledCheck():"expandedIndexes"==t?e._applyExpandedIndexes():e.refresh():e.render():e._setSize())},_raiseEvent:function(t,i){var a=this.events[t],n=new e.Event(a);n.owner=this,n.args=i,n.item=n.args.item;var r;try{r=this.host.trigger(n)}catch(e){}return r},resize:function(e,t){this.width=e,this.height=t,this._setSize()},_setSize:function(){var t=this;this.headersHeight=0;var i=(this.items&&this.items.length>0?parseInt(this.items[0]._headerHelper.css("padding-left"),10):0)+(this.items&&this.items.length>0?parseInt(this.items[0]._headerHelper.css("padding-right"),10):0)+2;isNaN(i)&&(i=12),"auto"==this.width?t.element.style.width="auto":null!=this.width&&-1!=this.width.toString().indexOf("%")?t.element.style.width=t.width:t.element.style.width=parseInt(this.width,10)+i+"px","number"==typeof t.height?t.element.style.height=t.height+"px":t.element.style.height=t.height;for(var a=0;a<t.items.length;a++){var n=t.items[a],r=t.arrowPosition;if(t.rtl)switch(r){case"left":r="right";break;case"right":r="left"}"right"==r?(n._headerText.style.float="left",n._headerText.style.marginLeft="0px",n._arrow.style.float="right",n._arrow.style.position="relative"):"left"==r&&("auto"==t.width?(n._headerText.style.float="left",n._headerText.style.marginLeft="17px",n._arrow.style.float="left",n._arrow.style.position="absolute"):(n._headerText.style.float="right",n._headerText.style.marginLeft="0px",n._arrow.style.float="left",n._arrow.style.position="relative")),n._header.style.height="auto",n._headerText.style.minHeight=n._arrow.offsetHeight,t.headersHeight+=e(n._header).outerHeight(),n._arrow.style.marginTop=n._headerText.offsetHeight/2-n._arrow.offsetHeight/2+"px"}for(var s=0;s<t.items.length;s++){var d=t.items[s];if("auto"!=t.height)if("single"==t.expandMode||"toggle"==t.expandMode||"multiple"==t.expandMode)t.element.style.overflowX="hidden",t.element.style.overflowY="auto";else if("singleFitHeight"==t.expandMode){var o=parseInt(d._contentHelper.css("padding-top"),10)+parseInt(d._contentHelper.css("padding-bottom"),10);t.height&&t.height.toString().indexOf("%")>=0?d._content.style.height=Math.max(0,t.element.offsetHeight-t.headersHeight-o+2)+"px":d._content.style.height=Math.max(0,t.element.offsetHeight-t.headersHeight-o)+"px"}}t._checkHeight()},_toggle:function(){var t=this;if(!1===this._isTouchDevice)switch(this.toggleMode){case"click":case"dblclick":e.each(this.items,function(e){var i=this;!1===i.disabled&&t.addHandler(i._header,t.toggleMode+".navigationbar"+t.widgetID,function(){t.focusedH=!0,t._animate(e)})})}else{if("none"==this.toggleMode)return;e.each(this.items,function(i){var a=this;!1===a.disabled&&t.addHandler(a._header,e.jqx.mobile.getTouchEventName("touchstart")+"."+t.widgetID,function(){t._animate(i)})})}},_animate:function(e,t){var i=this,a=this.items[e];"none"!=this.expandMode&&1!=this.eCFlag&&(!0===this.items[e].expanded?"multiple"!=this.expandMode&&"toggle"!=this.expandMode||this.collapseAt(e):this.expandAt(e),i._isTouchDevice||(!0!==t?(a._headerHelper.addClass(this.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover")),a._arrowHelper.addClass(this.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover"))):(a._headerHelper.removeClass(this.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover")),a._arrowHelper.removeClass(this.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover")))))},_removeHandlers:function(){var e=this;this.removeHandler(this.host,"keydown.navigationbar"+this.widgetID);for(var t=0;t<e.items.length;t++){var i=e.items[t];e.removeHandler(i._header,"click.navigationbar"+e.widgetID),e.removeHandler(i._header,"dblclick.navigationbar"+e.widgetID),e.removeHandler(i._header,"mouseenter.navigationbar"+e.widgetID),e.removeHandler(i._header,"mouseleave.navigationbar"+e.widgetID),e.removeHandler(i._header,"focus.navigationbar"+e.widgetID),e.removeHandler(i._header,"blur.navigationbar"+e.widgetID),e.removeHandler(i._content,"focus.navigationbar"+e.widgetID),e.removeHandler(i._content,"blur.navigationbar"+e.widgetID),e.removeHandler(i._headerText,"focus.navigationbar"+e.widgetID),e.removeHandler(i._arrow,"focus.navigationbar"+e.widgetID)}},_setTheme:function(){var t=this;this.host.addClass(this.toThemeProperty("jqx-reset jqx-widget")),!0===this.rtl&&this.host.addClass(this.toThemeProperty("jqx-rtl")),e.each(this.items,function(e){var i=this,a=i._headerHelper,n=i._arrowHelper,r=i._contentHelper,s="jqx-widget-header jqx-item jqx-expander-header",d="jqx-widget-content jqx-expander-content jqx-expander-content-bottom";i._header.style.position="relative",i._content.style.position="relative",!1===i.disabled?(a.removeClass(t.toThemeProperty("jqx-fill-state-disabled")),r.removeClass(t.toThemeProperty("jqx-fill-state-disabled")),!0===i.expanded?s+=" jqx-fill-state-pressed jqx-expander-header-expanded":(s+=" jqx-fill-state-normal",a.removeClass(t.toThemeProperty("jqx-expander-header-expanded"))),t._isTouchDevice||(t.addHandler(i._header,"mouseenter.navigationbar"+t.widgetID,function(){1==i._expandChecker&&(i.focusedH||(i._header.style.zIndex=5),a.removeClass(t.toThemeProperty("jqx-fill-state-normal jqx-fill-state-pressed")),a.addClass(t.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover")),n.addClass(t.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover")),i.expanded?n.addClass(t.toThemeProperty("jqx-icon-arrow-up-hover")):n.addClass(t.toThemeProperty("jqx-icon-arrow-down-hover")))}),t.addHandler(i._header,"mouseleave.navigationbar"+t.widgetID,function(){i.focusedH||(i._header.style.zIndex=0),a.removeClass(t.toThemeProperty("jqx-fill-state-hover jqx-expander-header-hover")),n.removeClass(t.toThemeProperty("jqx-expander-arrow-top-hover jqx-expander-arrow-down-hover jqx-icon-arrow-up-hover jqx-icon-arrow-down-hover")),1==i._expandChecker?a.addClass(t.toThemeProperty("jqx-fill-state-normal")):a.addClass(t.toThemeProperty("jqx-fill-state-pressed"))}))):(s+=" jqx-fill-state-disabled",d+=" jqx-fill-state-disabled"),t.host.addClass(t.toThemeProperty("jqx-navigationbar")),a.addClass(t.toThemeProperty(s)),r.addClass(t.toThemeProperty(d)),0!==e&&(i._header.style.marginTop="-1px"),n.addClass(t.toThemeProperty("jqx-expander-arrow"))})},_checkContent:function(e){var t=this.items[e],i=t._content;if(this._cntntEmpty=/^\s*$/.test(this.items[e]._content.innerHTML),!0===this._cntntEmpty)i.style.display="none",i.style.height="0px",t._contentHelper.addClass(this.toThemeProperty("jqx-expander-content-empty"));else{if(t.expanded&&(i.style.display="block"),"singleFitHeight"==this.expandMode){i.style.height=Math.max(0,this.element.offsetHeight-this.headersHeight+this.items.length-2)+"px"}else i.style.height="auto";t._contentHelper.removeClass(this.toThemeProperty("jqx-expander-content-empty"))}},_checkHeight:function(){var e=this;if("string"!=typeof e.width||-1===e.width.indexOf("%")){var t=0,i=(this.items&&this.items.length>0?parseInt(this.items[0]._headerHelper.css("padding-left"),10):0)+(this.items&&this.items.length>0?parseInt(this.items[0]._headerHelper.css("padding-right"),10):0)+2;isNaN(i)&&(i=12);for(var a=0;a<e.items.length;a++){var n=e.items[a];t+=(n.expanded?n._contentHelper.outerHeight():0)+n._headerHelper.outerHeight()}"auto"!=this.width&&"auto"!=this.height&&"singleFitHeight"!=this.expandMode&&(t>e.element.offsetHeight?(e.element.style.width=parseInt(this.width,10)+i+17+"px",this.heightFlag=!0):(e.element.style.width=parseInt(this.width,10)+i+"px",this.heightFlag=!1))}},_enabledDisabledCheck:function(){for(var e=0;e<this.items.length;e++)this.items[e].disabled=this.disabled},_updateExpandedIndexes:function(){var t=this;this.expandedIndexes=[],e.each(this.items,function(e){if(!0===this.expanded&&(t.expandedIndexes.push(e),"single"==t.expandMode||"singleFitHeight"==t.expandMode||"toggle"==t.expandMode||"none"==t.expandMode))return!1})},_keyBoard:function(){var t=this;this._focus(),this.addHandler(this.host,"keydown.navigationbar"+this.widgetID,function(i){var a=!1,n=t.items.length;return e.each(t.items,function(e){var r=this;if((!0===r.focusedH||!0===r.focusedC)&&!1===r.disabled){switch(i.keyCode){case 13:case 32:"none"!=t.toggleMode&&(!0===r.focusedH&&t._animate(e,!0),a=!0);break;case 37:0!==e?t.items[e-1]._header.focus():t.items[n-1]._header.focus(),a=!0;break;case 38:!1===i.ctrlKey?0!==e?t.items[e-1]._header.focus():t.items[n-1]._header.focus():!0===r.focusedC&&r._header.focus(),a=!0;break;case 39:e!=n-1?t.items[e+1]._header.focus():t.items[0]._header.focus(),a=!0;break;case 40:!1===i.ctrlKey?e!=n-1?t.items[e+1]._header.focus():t.items[0]._header.focus():!0===r.expanded&&r._content.focus(),a=!0;break;case 35:e!=n-1&&t.items[n-1]._header.focus(),a=!0;break;case 36:0!==e&&t.items[0]._header.focus(),a=!0}return!1}}),a&&i.preventDefault&&i.preventDefault(),!a})},_focus:function(){var t=this;this.disabled||e.each(this.items,function(){var i=this;t.addHandler(i._header,"focus.navigationbar"+this.widgetID,function(){i.focusedH=!0,e.jqx.aria(i._header,"aria-selected",!0),i._headerHelper.addClass(t.toThemeProperty("jqx-fill-state-focus")),i._header.style.zIndex=10}),t.addHandler(i._header,"blur.navigationbar"+this.widgetID,function(){i.focusedH=!1,e.jqx.aria(i._header,"aria-selected",!1),-1!==i._header.className.indexOf("jqx-expander-header-hover")?i._header.style.zIndex=5:i._header.style.zIndex=0,i._headerHelper.removeClass(t.toThemeProperty("jqx-fill-state-focus"))}),t.addHandler(i._headerText,"focus.navigationbar"+this.widgetID,function(){i._header.focus()}),t.addHandler(i._arrow,"focus.navigationbar"+this.widgetID,function(){i._header.focus()}),t.addHandler(i._content,"focus.navigationbar"+this.widgetID,function(){i.focusedC=!0,i._contentHelper.addClass(t.toThemeProperty("jqx-fill-state-focus"))}),t.addHandler(i._content,"blur.navigationbar"+this.widgetID,function(){i.focusedC=!1,i._contentHelper.removeClass(t.toThemeProperty("jqx-fill-state-focus"))})})}})}(jqxBaseFramework);

