/*
jQWidgets v5.2.0 (2017-Sep)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){t.jqx.jqxWidget("jqxPanel","",{}),t.extend(t.jqx._jqxPanel.prototype,{defineInstance:function(){var i={width:null,height:null,disabled:!1,scrollBarSize:t.jqx.utilities.scrollBarSize,sizeMode:"fixed",autoUpdate:!1,autoUpdateInterval:500,touchMode:"auto",horizontalScrollBarMax:null,verticalScrollBarMax:null,touchModeStyle:"auto",rtl:!1,events:["layout"]};return this===t.jqx._jqxPanel.prototype?i:(t.extend(!0,this,i),i)},createInstance:function(t){this.render()},render:function(){15!=t.jqx.utilities.scrollBarSize&&(this.scrollBarSize=t.jqx.utilities.scrollBarSize),this.host.addClass(this.toThemeProperty("jqx-panel")),this.host.addClass(this.toThemeProperty("jqx-widget")),this.host.addClass(this.toThemeProperty("jqx-widget-content")),this.host.addClass(this.toThemeProperty("jqx-rc-all"));var i=t("<div id='panelWrapper' style='overflow: hidden; width: 100%; height: 100%; background-color: transparent; -webkit-appearance: none; outline: none; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div id='panelContent' style='-webkit-appearance: none; -moz-box-sizing: border-box; box-sizing: border-box; width: 100%; height: 100%; outline: none; border: none; padding: 0px; position: absolute; margin: 0px; align:left; valign:top; left: 0px; top: 0px;'/><div id='verticalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='horizontalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/></div>");if(!this.host.jqxButton)throw new Error("jqxPanel: Missing reference to jqxbuttons.js.");if(!this.host.jqxScrollBar)throw new Error("jqxPanel: Missing reference to jqxscrollbar.js.");var e=this.host.children();this._rtl=!1,e.length>0&&"rtl"==e.css("direction")&&(this.rtl=!0,this._rtl=!0),this.host.wrapInner(i);var r=this.host.find("#verticalScrollBar");r[0].id=this.element.id+"verticalScrollBar",this.vScrollBar=r.jqxScrollBar({vertical:!0,rtl:this.rtl,touchMode:this.touchMode,theme:this.theme});var s=this.host.find("#horizontalScrollBar");s[0].id=this.element.id+"horizontalScrollBar",this.hScrollBar=s.jqxScrollBar({vertical:!1,rtl:this.rtl,touchMode:this.touchMode,theme:this.theme}),this.content=this.host.find("#panelContent"),this.wrapper=this.host.find("#panelWrapper"),this.content.addClass(this.toThemeProperty("jqx-widget-content")),this.wrapper[0].id=this.wrapper[0].id+this.element.id,this.content[0].id=this.content[0].id+this.element.id,this.bottomRight=this.host.find("#bottomRight").addClass(this.toThemeProperty("jqx-panel-bottomright")).addClass(this.toThemeProperty("jqx-scrollbar-state-normal")),this.bottomRight[0].id="bottomRight"+this.element.id,this.vScrollBar.css("visibility","inherit"),this.hScrollBar.css("visibility","inherit"),this.vScrollInstance=t.data(this.vScrollBar[0],"jqxScrollBar").instance,this.hScrollInstance=t.data(this.hScrollBar[0],"jqxScrollBar").instance;var l=this;this.propertyChangeMap.disabled=function(t,i,e,r){l.vScrollBar.jqxScrollBar({disabled:l.disabled}),l.hScrollBar.jqxScrollBar({disabled:l.disabled})},this.vScrollBar.jqxScrollBar({disabled:this.disabled}),this.hScrollBar.jqxScrollBar({disabled:this.disabled}),this._addHandlers(),null==this.width&&(this.width=this.content.width()),null==this.height&&(this.height=this.content.height()),this._arrange(),this.contentWidth=l.content[0].scrollWidth,this.contentHeight=l.content[0].scrollHeight,this.autoUpdate&&l._autoUpdate(),this.propertyChangeMap.autoUpdate=function(t,i,e,r){l.autoUpdate?l._autoUpdate():(clearInterval(l.autoUpdateId),l.autoUpdateId=null)},this.addHandler(t(window),"unload",function(){null!=l.autoUpdateId&&(clearInterval(l.autoUpdateId),l.autoUpdateId=null,l.destroy())}),this._updateTouchScrolling(),this._render()},hiddenParent:function(){return t.jqx.isHidden(this.host)},_updateTouchScrolling:function(){var i=this;1==this.touchMode&&t.jqx.mobile.setMobileSimulator(this.element),this.isTouchDevice()&&(t.jqx.mobile.touchScroll(this.element,i.vScrollInstance.max,function(t,e){if("hidden"!=i.vScrollBar.css("visibility")){r=i.vScrollInstance.value;i.vScrollInstance.setPosition(r+e)}if("hidden"!=i.hScrollBar.css("visibility")){var r=i.hScrollInstance.value;i.hScrollInstance.setPosition(r+t)}},this.element.id,this.hScrollBar,this.vScrollBar),this._arrange()),this.vScrollBar.jqxScrollBar({touchMode:this.touchMode}),this.hScrollBar.jqxScrollBar({touchMode:this.touchMode})},isTouchDevice:function(){var i=t.jqx.mobile.isTouchDevice();return 1==this.touchMode?i=!0:0==this.touchMode&&(i=!1),i&&0!=this.touchModeStyle&&(this.scrollBarSize=t.jqx.utilities.touchScrollBarSize),i},append:function(t){null!=t&&(this.content.append(t),this._arrange())},setcontent:function(t){this.content[0].innerHTML=t,this._arrange();var i=this;setTimeout(function(){i._arrange()},100)},prepend:function(t){null!=t&&(this.content.prepend(t),this._arrange())},clearcontent:function(){this.content.text(""),this.content.children().remove(),this._arrange()},remove:function(i){null!=i&&(t(i).remove(),this._arrange())},_autoUpdate:function(){var t=this;this.autoUpdateId=setInterval(function(){var i=t.content[0].scrollWidth,e=t.content[0].scrollHeight,r=!1;t.contentWidth!=i&&(t.contentWidth=i,r=!0),t.contentHeight!=e&&(t.contentHeight=e,r=!0),r&&t._arrange()},this.autoUpdateInterval)},_addHandlers:function(){var i=this;this.addHandler(this.vScrollBar,"valueChanged",function(t){i._render(i)}),this.addHandler(this.hScrollBar,"valueChanged",function(t){i._render(i)}),this.addHandler(this.host,"mousewheel",function(t){i.wheel(t,i)}),this.addHandler(this.wrapper,"scroll",function(t){0!=i.wrapper[0].scrollTop&&(i.wrapper[0].scrollTop=0),0!=i.wrapper[0].scrollLeft&&(i.wrapper[0].scrollLeft=0)}),this.addHandler(this.host,"mouseleave",function(t){i.focused=!1}),this.addHandler(this.host,"focus",function(t){i.focused=!0}),this.addHandler(this.host,"blur",function(t){i.focused=!1}),this.addHandler(this.host,"mouseenter",function(t){i.focused=!0}),t.jqx.utilities.resize(this.host,function(){t.jqx.isHidden(i.host)||i._arrange(!1)})},resize:function(t,i){this.width=t,this.height=i,this._arrange(!1)},_removeHandlers:function(){this.removeHandler(this.vScrollBar,"valueChanged"),this.removeHandler(this.hScrollBar,"valueChanged"),this.removeHandler(this.host,"mousewheel"),this.removeHandler(this.host,"mouseleave"),this.removeHandler(this.host,"focus"),this.removeHandler(this.host,"blur"),this.removeHandler(this.host,"mouseenter"),this.removeHandler(this.wrapper,"scroll"),this.removeHandler(t(window),"resize."+this.element.id)},wheel:function(i,e){var r=0;if(i.originalEvent&&t.jqx.browser.msie&&i.originalEvent.wheelDelta&&(r=i.originalEvent.wheelDelta/120),i||(i=window.event),i.wheelDelta?r=i.wheelDelta/120:i.detail&&(r=-i.detail/3),r){var s=e._handleDelta(r);return s||i.preventDefault&&i.preventDefault(),!s&&s}i.preventDefault&&i.preventDefault(),i.returnValue=!1},scrollDown:function(){if("hidden"==this.vScrollBar.css("visibility"))return!1;var t=this.vScrollInstance;return t.value+t.largestep<=t.max?(t.setPosition(t.value+t.largestep),!0):t.value+t.largestep!=t.max&&(t.setPosition(t.max),!0)},scrollUp:function(){if("hidden"==this.vScrollBar.css("visibility"))return!1;var t=this.vScrollInstance;return t.value-t.largestep>=t.min?(t.setPosition(t.value-t.largestep),!0):t.value-t.largestep!=t.min&&(t.setPosition(t.min),!0)},_handleDelta:function(t){if(this.focused){var i=this.vScrollInstance.value;if(t<0?this.scrollDown():this.scrollUp(),i!=this.vScrollInstance.value)return!1}return!0},_render:function(t){void 0==t&&(t=this);var i=t.vScrollInstance.value,e=t.hScrollInstance.value;this.rtl&&"hidden"!=this.hScrollBar[0].style.visibility&&(e=0==this._rtl?t.hScrollInstance.max-e:-t.hScrollInstance.value),t.content.css({left:-e+"px",top:-i+"px"})},scrollTo:function(t,i){void 0!=t&&void 0!=i&&(this.vScrollInstance.setPosition(i),this.hScrollInstance.setPosition(t))},getScrollHeight:function(){return this.vScrollInstance.max},getVScrollPosition:function(){return this.vScrollInstance.value},getScrollWidth:function(){return this.hScrollInstance.max},getHScrollPosition:function(){return this.hScrollInstance.value},_getScrollSize:function(){var i=this.scrollBarSize;return isNaN(i)&&(i=parseInt(i),isNaN(i)?i="17px":i+="px"),this.isTouchDevice()&&(i=t.jqx.utilities.touchScrollBarSize),i=parseInt(i)},_getScrollArea:function(){var i=0;this.content.css("margin-right","0px"),this.content.css("max-width","9999999px"),t.jqx.browser.msie&&t.jqx.browser.version<10&&(i=parseInt(this.content.css("left")),this.content.css("left",0)),this.content.css("overflow","auto"),this.rtl&&this.content.css("direction","rtl");r=parseInt(this.content[0].scrollWidth);t.each(this.content.children(),function(){r=Math.max(r,this.scrollWidth),r=Math.max(r,t(this).outerWidth())}),t.jqx.browser.msie&&t.jqx.browser.version<10&&this.content.css("left",i);e=parseInt(this.content[0].scrollHeight);if(this.content.css("overflow","visible"),t.jqx.browser.msie&&t.jqx.browser.version<9){e=parseInt(this.content[0].scrollHeight);switch(this.sizeMode){case"wrap":var e=parseInt(this.content[0].scrollHeight),r=parseInt(this.content[0].scrollWidth);break;case"horizontalWrap":case"horizontalwrap":break;case"verticalWrap":case"verticalwrap":e=parseInt(this.content[0].scrollHeight)}}return this.rtl&&this.content.css("direction","ltr"),{width:r,height:e}},_arrange:function(i){!1!==i&&(null!=this.width&&this.host.width(this.width),null!=this.height&&this.host.height(this.height));var e=this._getScrollSize(),r=this.host.width(),s=this.host.height(),l=this._getScrollArea(),o=l.width,h=l.height,n=h-parseInt(Math.round(this.host.height())),a=o-parseInt(Math.round(this.host.width()));void 0!=this.horizontalScrollBarMax&&(a=this.horizontalScrollBarMax),void 0!=this.verticalScrollBarMax&&(n=this.verticalScrollBarMax);var c=function(t,i){i>5?(t.vScrollBar.jqxScrollBar({max:i}),t.vScrollBar.css("visibility","inherit")):(t.vScrollBar.jqxScrollBar("setPosition",0),t.vScrollBar.css("visibility","hidden"))},d=function(i,r){r>0?t.jqx.browser.msie&&t.jqx.browser.version<8&&r-10<=e?(i.hScrollBar.css("visibility","hidden"),i.hScrollBar.jqxScrollBar("setPosition",0)):(i.hScrollBar.jqxScrollBar({max:r+4}),i.hScrollBar.css("visibility","inherit")):(i.hScrollBar.css("visibility","hidden"),i.hScrollBar.jqxScrollBar("setPosition",0))};switch(this.sizeMode){case"wrap":return this.host.width(o),this.host.height(h),this.vScrollBar.css("visibility","hidden"),void this.hScrollBar.css("visibility","hidden");case"horizontalWrap":case"horizontalwrap":return this.host.width(o),this.hScrollBar.css("visibility","hidden"),c(this,n),void this._arrangeScrollbars(e,o,s);case"verticalWrap":case"verticalwrap":return this.host.height(h),this.vScrollBar.css("visibility","hidden"),d(this,a),void this._arrangeScrollbars(e,r,s)}c(this,n);"hidden"!=this.vScrollBar.css("visibility")&&void 0==this.horizontalScrollBarMax&&(!this.isTouchDevice()&&a>0||a>0)&&(a+=e+2),d(this,a),"hidden"!=this.hScrollBar.css("visibility")&&this.vScrollBar.jqxScrollBar({max:n+e+2}),this._arrangeScrollbars(e,r,s)},_arrangeScrollbars:function(i,e,r){var s="hidden"!=this.vScrollBar[0].style.visibility;this.hScrollBar[0].style.visibility;if(this.hScrollBar.height(i),this.hScrollBar.css({top:r-i-2-2+"px",left:"0px"}),this.hScrollBar.width(e-2+"px"),this.vScrollBar.width(i),this.vScrollBar.height(parseInt(r)-2+"px"),this.vScrollBar.css({left:parseInt(e)-parseInt(i)-2-2+"px",top:"0px"}),this.rtl){this.vScrollBar.css({left:"0px"});var l=s?parseInt(i)+"px":0;if("rtl"!=this.content.children().css("direction")){var o=!1;t.jqx.browser.msie&&t.jqx.browser.version<8&&(o=!0),o||this.content.css("padding-left",l)}}else"hidden"!=this.vScrollBar.css("visibility")&&this.content.css("max-width",this.host.width()-this.vScrollBar.outerWidth());"hidden"!=this.vScrollBar.css("visibility")&&"hidden"!=this.hScrollBar.css("visibility")?(this.bottomRight.css("visibility","inherit"),this.bottomRight.css({left:1+parseInt(this.vScrollBar.css("left")),top:1+parseInt(this.hScrollBar.css("top"))}),this.bottomRight.width(parseInt(i)+3),this.bottomRight.height(parseInt(i)+3),this.rtl&&(this.bottomRight.css({left:"0px"}),this.hScrollBar.css({left:i+2+"px"})),this.hScrollBar.width(e-1*i-2-2+"px"),this.vScrollBar.height(parseInt(r)-2-i-2+"px")):this.bottomRight.css("visibility","hidden"),this.hScrollInstance.refresh(),this.vScrollInstance.refresh()},destroy:function(){clearInterval(this.autoUpdateId),this.autoUpdateId=null,this.autoUpdate=!1,t.jqx.utilities.resize(this.host,null,!0),this._removeHandlers(),this.removeHandler(t(window),"unload"),this.vScrollBar.jqxScrollBar("destroy"),this.hScrollBar.jqxScrollBar("destroy"),this.host.remove()},_raiseevent:function(i,e,r){if(void 0!=this.isInitialized&&1==this.isInitialized){var s=this.events[i],l=new t.Event(s);return l.previousValue=e,l.currentValue=r,l.owner=this,this.host.trigger(l)}},beginUpdateLayout:function(){this.updating=!0},resumeUpdateLayout:function(){this.updating=!1,this.vScrollInstance.value=0,this.hScrollInstance.value=0,this._arrange(),this._render()},propertyChangedHandler:function(t,i,e,r){t.isInitialized&&("rtl"==i&&(this.vScrollBar.jqxScrollBar({rtl:r}),this.hScrollBar.jqxScrollBar({rtl:r}),t._arrange()),t.updating||"scrollBarSize"!=i&&"width"!=i&&"height"!=i||e!=r&&t._arrange(),"touchMode"==i&&"auto"!=r&&t._updateTouchScrolling(),"theme"==i&&(t.host.removeClass(),t.host.addClass(this.toThemeProperty("jqx-panel")),t.host.addClass(this.toThemeProperty("jqx-widget")),t.host.addClass(this.toThemeProperty("jqx-widget-content")),t.host.addClass(this.toThemeProperty("jqx-rc-all")),t.vScrollBar.jqxScrollBar({theme:this.theme}),t.hScrollBar.jqxScrollBar({theme:this.theme}),t.bottomRight.removeClass(),t.bottomRight.addClass(this.toThemeProperty("jqx-panel-bottomright")),t.bottomRight.addClass(this.toThemeProperty("jqx-scrollbar-state-normal")),t.content.removeClass(),t.content.addClass(this.toThemeProperty("jqx-widget-content"))))},invalidate:function(){t.jqx.isHidden(this.host)||this.refresh()},refresh:function(t){this._arrange()}})}(jqxBaseFramework);

