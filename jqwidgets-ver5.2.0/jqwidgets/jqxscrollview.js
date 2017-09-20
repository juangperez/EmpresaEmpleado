/*
jQWidgets v5.2.0 (2017-Sep)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){var e=0;t.jqx.jqxWidget("jqxScrollView","",{}),t.extend(t.jqx._jqxScrollView.prototype,{defineInstance:function(){var e={width:320,height:320,buttonsOffset:[0,0],moveThreshold:.5,currentPage:0,animationDuration:300,showButtons:!0,bounceEnabled:!0,slideShow:!1,slideDuration:3e3,disabled:!1,_mouseDown:!1,_movePermited:!1,_startX:-1,_startOffset:-1,_lastOffset:-1,_events:["pageChanged"],_eventsMap:{mousedown:t.jqx.mobile.getTouchEventName("touchstart"),mouseup:t.jqx.mobile.getTouchEventName("touchend"),mousemove:t.jqx.mobile.getTouchEventName("touchmove")}};return this===t.jqx._jqxScrollView.prototype?e:(t.extend(!0,this,e),e)},createInstance:function(){e+=1,this._instanceId=e,this._isTouchDevice=t.jqx.mobile.isTouchDevice();var s=this;t.jqx.utilities.resize(this.host,function(){s.refresh()})},resize:function(t,e){this.width=t,this.height=e,this.refresh()},refresh:function(){if(this.host.width(this.width),this.host.height(this.height),this._render(),this._performLayout(),this.moveThreshold.toString().indexOf("%")>=0&&(this.moveThreshold=parseInt(this.moveThreshold,10)/100),this._refreshPages(),this._refreshButtons(),this._removeEventListeners(),this._addEventListeners(),this._changePage(this.currentPage,!1,0),this.slideShow){var t=this;this.slideShowTimer=setInterval(function(){t.currentPage>=t._pages.length-1?t._changePage(0,!0,t.animationDuration):t._changePage(t.currentPage+1,!0,t.animationDuration)},this.slideDuration)}else void 0!=this.slideShowTimer&&clearInterval(this.slideShowTimer)},destroy:function(){this.host.remove()},_getEvent:function(t){return this._isTouchDevice?this._eventsMap[t]:t},_eventNamespace:function(){return".scrollview"+this._instanceId},_removeEventListeners:function(){this.removeHandler(this._innerWrapper),this.removeHandler(this.host,this._getEvent("mousemove")+this._eventNamespace()),this.removeHandler(t(document),this._getEvent("mouseup")+this._eventNamespace())},_getCoordinate:function(e,s){if(this._isTouchDevice){var i=t.jqx.position(e);if("pageX"==s)return i.left;if("pageY"==s)return i.top;if(e.originalEvent.touches)return e.originalEvent.touches[0][s]}return e[s]},_draggedRight:function(){if(this.currentPage>0){var e=this.currentPage-1,s=t(this._pages[e]);if(s.offset().left+s.outerWidth()-this.host.offset().left>=this.host.width()*this.moveThreshold)return this.changePage(e),!0}return!1},_draggedLeft:function(){if(this.currentPage+1<this._pages.length){var e=this.currentPage+1,s=t(this._pages[e]);if(this.host.width()-(s.offset().left-this.host.offset().left)>=this.host.width()*this.moveThreshold)return this.changePage(e),!0}return!1},_dropTarget:function(){(this._movedLeft?this._draggedLeft():this._draggedRight())||this.changePage(this.currentPage,!1)},_scrollEnabled:function(t){return!!this._mouseDown&&(this._movePermited||Math.abs(this._getCoordinate(t,"pageX")-this._startX)>=15&&(this._movePermited=!0),this._movePermited)},_setMoveDirection:function(t){this._lastOffset>t?this._movedLeft=!0:this._movedLeft=!1},_getBounceOffset:function(t){var e=-(this._innerWrapper.width()-this.host.width());return t>0?t=0:t<e&&(t=e),t},_addEventListeners:function(){var e=this;this.addHandler(this._innerWrapper,this._getEvent("mousedown")+this._eventNamespace(),function(t){e._mouseDown=!0,e._startX=e._getCoordinate(t,"pageX"),e._startOffset=e._lastOffset=parseInt(e._innerWrapper.css("margin-left"),10)}),this.addHandler(this.host,"dragstart",function(){return!1}),this.addHandler(this.host,this._getEvent("mousemove")+this._eventNamespace(),function(t){if(e._scrollEnabled(t)){var s=e._startOffset+e._getCoordinate(t,"pageX")-e._startX;return e.bounceEnabled||(s=e._getBounceOffset(s)),e._innerWrapper.css("margin-left",s),e._setMoveDirection(s),e._lastOffset=s,t.preventDefault(),!1}return!0}),this.addHandler(t(document),this._getEvent("mouseup")+this._eventNamespace(),function(t){e._movePermited&&e._dropTarget(),e._movePermited=!1,e._mouseDown=!1});try{if((""!=document.referrer||window.frameElement)&&(null!=window.top&&window.parent&&document.referrer&&(parentLocation=document.referrer),-1!=parentLocation.indexOf(document.location.host))){var s=function(t){e._movePermited&&e._dropTarget(),e._movePermited=!1,e._mouseDown=!1};window.top.document.addEventListener?window.top.document.addEventListener("mouseup",s,!1):window.top.document.attachEvent&&window.top.document.attachEvent("onmouseup",s)}}catch(t){}},_render:function(){this.host.addClass(this.toThemeProperty("jqx-scrollview")),this.host.css({overflow:"hidden",position:"relative"})},_performLayout:function(){this.host.css({width:this.width,height:this.height})},_renderPages:function(){this._innerWrapper||(this._innerWrapper=t("<div/>"),this.host.wrapInner(this._innerWrapper),this._innerWrapper=this.host.children().first()),this._innerWrapper.addClass(this.toThemeProperty("jqx-scrollview-inner-wrapper")),this._innerWrapper.height(this.host.height())},_refreshPage:function(t){t.addClass(this.toThemeProperty("jqx-scrollview-page")),this._performPageLayout(t)},_refreshPages:function(){var e=this,s=0;this._renderPages(),this._pages=this._innerWrapper.children(),this._pages.each(function(){e._refreshPage(t(this)),s+=t(this).outerWidth(!0)}),this._innerWrapper.width(s)},_performPageLayout:function(t){t.css("float","left"),t.width(this.host.width()),t.height(this.host.height())},_refreshButtons:function(){this._renderButtons(),this._removeButtonsEventListeners(),this._addButtonsEventListeners(),this._performButtonsLayout()},_removeButtonsEventListeners:function(){var e=this;this._buttonsContainer.children().each(function(){e.removeHandler(t(this))})},_addButtonsEventListeners:function(){var e=this;this._buttonsContainer.children().each(function(s){e.addHandler(t(this),"click",function(){e.changePage(s)})})},_performButtonsLayout:function(){var t=(this.host.width()-this._buttonsContainer.width())/2,e=0!=this._buttonsContainer.outerHeight()?this._buttonsContainer.outerHeight():14;this._buttonsContainer.css({position:"absolute",left:t+parseInt(this.buttonsOffset[0],10),top:this.host.height()-2*e+parseInt(this.buttonsOffset[1],10)-1})},_renderButtons:function(){this._buttonsContainer&&this._buttonsContainer.remove();var e;this._buttons=[],this._buttonsContainer=t("<span/>");for(var s=0;s<this._pages.length;s+=1)e=t('<span class="'+this.toThemeProperty("jqx-scrollview-button")+" "+this.toThemeProperty("jqx-fill-state-normal")+'"></span>'),this._buttonsContainer.append(e),this._buttons[s]=e;this._buttonsContainer.appendTo(this.host),this.showButtons||this._buttonsContainer.hide()},_raiseEvent:function(e,s){var i=new t.Event(this._events[e]);return i.args=s,this.host.trigger(i)},_swapButtons:function(t,e){this._buttons[t].removeClass(this.toThemeProperty("jqx-scrollview-button-selected")),this._buttons[t].removeClass(this.toThemeProperty("jqx-fill-state-pressed")),this._buttons[e].addClass(this.toThemeProperty("jqx-scrollview-button-selected")),this._buttons[e].addClass(this.toThemeProperty("jqx-fill-state-pressed"))},_changePage:function(e,s,i){if(!this.disabled){var n=t(this._pages[e]),r=(this.host.width()-n.width())/2,o=n.offset().left-this._innerWrapper.offset().left-r,h=this.currentPage,a=this;void 0===i&&(i=this.animationDuration),this._innerWrapper.stop(),this._swapButtons(this.currentPage,e),this.currentPage=e,this._innerWrapper.animate({marginLeft:-o},i,function(){s&&a._raiseEvent(0,{currentPage:e,oldPage:h})})}},propertyChangedHandler:function(t,e,s,i){if("currentPage"===e)t.currentPage=s,t.changePage(i);else if(/(buttonsOffset|width|height)/.test(e))t.refresh();else{if("showButtons"===e)return void(i?t._buttonsContainer.css("display","block"):t._buttonsContainer.css("display","none"));"slideShow"==e&&t.refresh()}},changePage:function(t){if(t>=this._pages.length||t<0)throw new Error("Invalid index!");this._changePage(t,!0)},forward:function(){this.currentPage+1<this._pages.length&&this.changePage(this.currentPage+1)},back:function(){this.currentPage-1>=0&&this.changePage(this.currentPage-1)}})}(jqxBaseFramework);

