/*
jQWidgets v5.2.0 (2017-Sep)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){t.jqx.jqxWidget("jqxSwitchButton","",{}),t.extend(t.jqx._jqxSwitchButton.prototype,{defineInstance:function(){var e={disabled:!1,checked:!1,onLabel:"On",offLabel:"Off",toggleMode:"default",animationDuration:250,width:90,height:30,animationEnabled:!0,thumbSize:"40%",orientation:"horizontal",switchRatio:"50%",metroMode:!1,_isMouseDown:!1,rtl:!1,_dimensions:{horizontal:{size:"width",opSize:"height",oSize:"outerWidth",opOSize:"outerHeight",pos:"left",oPos:"top",opposite:"vertical"},vertical:{size:"height",opSize:"width",oSize:"outerHeight",opOSize:"outerWidth",pos:"top",oPos:"left",opposite:"horizontal"}},_touchEvents:{mousedown:"touchstart",click:"touchend",mouseup:"touchend",mousemove:"touchmove",mouseenter:"mouseenter",mouseleave:"mouseleave"},_borders:{},_isTouchDevice:!1,_distanceRequired:3,_isDistanceTraveled:!1,_thumb:void 0,_onLabel:void 0,_offLabel:void 0,_wrapper:void 0,_animationActive:!1,aria:{"aria-checked":{name:"checked",type:"boolean"},"aria-disabled":{name:"disabled",type:"boolean"}},_events:["checked","unchecked","change"]};return this===t.jqx._jqxSwitchButton.prototype?e:(t.extend(!0,this,e),e)},createInstance:function(e){if(this._createFromInput(),this.element.nodeName&&("INPUT"==this.element.nodeName||"BUTTON"==this.element.nodeName))throw"jqxSwitchButton can be rendered only from a DIV tag.";this.host.attr("role","checkbox"),t.jqx.aria(this),this.render();var i=this;i.element.tabIndex||i.host.attr("tabindex",0),t.jqx.utilities.resize(this.host,function(){i.element.innerHTML="",i.render()})},_createFromInput:function(){var e=this;if("input"==e.element.nodeName.toLowerCase()){e.field=e.element,e.field.className&&(e._className=e.field.className);var i={title:e.field.title};e.field.value&&(i.value=e.field.value),e.field.checked&&(i.checked=!0),e.field.id.length?i.id=e.field.id.replace(/[^\w]/g,"_")+"_jqxSwitchButton":i.id=t.jqx.utilities.createId()+"_jqxSwitchButton";var s=t("<div></div>",i);s[0].style.cssText=e.field.style.cssText,e.width||(e.width=t(e.field).width()),e.height||(e.height=t(e.field).outerHeight()),t(e.field).hide().after(s);var h=e.host.data();if(e.host=s,e.host.data(h),e.element=s[0],e.element.id=e.field.id,e.field.id=i.id,e._className&&(e.host.addClass(e._className),t(e.field).removeClass(e._className)),e.field.tabIndex){var o=e.field.tabIndex;e.field.tabIndex=-1,e.element.tabIndex=o}}},resize:function(t,e){this.width=t,this.height=e,this.render()},render:function(){this.innerHTML="",!this.theme||""==this.theme||-1==this.theme.indexOf("metro")&&-1==this.theme.indexOf("windowsphone")&&-1==this.theme.indexOf("office")||("40%"==this.thumbSize&&(this.thumbSize=12),this.metroMode=!0);var e=t.data(document.body,"jqx-switchbutton")||1;this._idHandler(e),t.data(document.body,"jqx-draggables",++e),this._isTouchDevice=t.jqx.mobile.isTouchDevice(),this.switchRatio=parseInt(this.switchRatio,10),this._render(),this._addClasses(),this._performLayout(),this._removeEventHandlers(),this._addEventHandles(),this._disableSelection();this.checked||this._switchButton(!1,0,!0),this.disabled&&(this.element.disabled=!0)},setOnLabel:function(t){this._onLabel.html('<div style="display: inline-block;">'+t+"</div>"),this._centerLabels()},setOffLabel:function(t){this._offLabel.html('<div style="display: inline-block;">'+t+"</div>"),this._centerLabels()},toggle:function(){this.checked?this.uncheck():this.check()},val:function(t){return 0==arguments.length||null!=t&&"object"==typeof t?this.checked:("string"==typeof t?("true"==t&&this.check(),"false"==t&&this.uncheck(),""==t&&this.indeterminate()):(1==t&&this.check(),0==t&&this.uncheck(),null==t&&this.indeterminate()),this.checked)},uncheck:function(){this._switchButton(!1),t.jqx.aria(this,"aria-checked",this.checked)},check:function(){this._switchButton(!0),t.jqx.aria(this,"aria-checked",this.checked)},_idHandler:function(t){if(!this.element.id){var e="jqx-switchbutton-"+t;this.element.id=e}},_dir:function(t){return this._dimensions[this.orientation][t]},_getEvent:function(e){if(this._isTouchDevice){var i=this._touchEvents[e];return t.jqx.mobile.getTouchEventName(i)}return e},_render:function(){this._thumb=t("<div/>"),this._onLabel=t("<div/>"),this._offLabel=t("<div/>"),this._wrapper=t("<div/>"),this._onLabel.appendTo(this.host),this._thumb.appendTo(this.host),this._offLabel.appendTo(this.host),this.host.wrapInner(this._wrapper),this._wrapper=this.host.children(),this.setOnLabel(this.onLabel),this.setOffLabel(this.offLabel)},_addClasses:function(){var t=this._thumb,e=this._onLabel,i=this._offLabel;this.host.addClass(this.toThemeProperty("jqx-switchbutton")),this.host.addClass(this.toThemeProperty("jqx-widget")),this.host.addClass(this.toThemeProperty("jqx-widget-content")),this._wrapper.addClass(this.toThemeProperty("jqx-switchbutton-wrapper")),t.addClass(this.toThemeProperty("jqx-fill-state-normal")),t.addClass(this.toThemeProperty("jqx-switchbutton-thumb")),e.addClass(this.toThemeProperty("jqx-switchbutton-label-on")),e.addClass(this.toThemeProperty("jqx-switchbutton-label")),i.addClass(this.toThemeProperty("jqx-switchbutton-label-off")),i.addClass(this.toThemeProperty("jqx-switchbutton-label")),this.checked?this.host.addClass(this.toThemeProperty("jqx-switchbutton-on")):this.host.removeClass(this.toThemeProperty("jqx-switchbutton-on"))},_performLayout:function(){var t,e=this.host,i=this._dir("opSize"),s=this._dir("size"),h=this._wrapper;if(e.css({width:this.width,height:this.height}),h.css(i,e[i]()),this._thumbLayout(),this._labelsLayout(),t=this._borders[this._dir("opposite")],h.css(s,e[s]()+this._offLabel[this._dir("oSize")]()+t),h.css(i,e[i]()),this.metroMode||this.theme&&""!=this.theme&&(-1!=this.theme.indexOf("metro")||-1!=this.theme.indexOf("office"))){this._thumb;var o=this._onLabel,a=this._offLabel;o.css("position","relative"),o.css("top","1px"),o.css("margin-left","1px"),a.css("position","relative"),a.css("top","1px"),a.css("left","-2px"),a.css("margin-right","1px"),a.height(o.height()-2),a.width(o.width()-3),o.height(o.height()-2),o.width(o.width()-3),this._thumb[this._dir("size")](this.thumbSize+3),this._thumb.css("top","-1px"),this._thumb[this._dir("opSize")](e[this._dir("opSize")]()+2),this._thumb.css("position","relative"),this.host.css("overflow","hidden"),this.checked?(this._onLabel.css("visibility","visible"),this._offLabel.css("visibility","hidden"),this._thumb.css("left","0px")):(this._onLabel.css("visibility","hidden"),this._offLabel.css("visibility","visible"),this._thumb.css("left","-2px"))}},_thumbLayout:function(){var t=this.thumbSize,e=this.host;t.toString().indexOf("%")>=0&&(t=e[this._dir("size")]()*parseInt(t,10)/100),this._thumb[this._dir("size")](t),this._thumb[this._dir("opSize")](e[this._dir("opSize")]()),this._handleThumbBorders()},_handleThumbBorders:function(){this._borders.horizontal=parseInt(this._thumb.css("border-left-width"),10)||0,this._borders.horizontal+=parseInt(this._thumb.css("border-right-width"),10)||0,this._borders.vertical=parseInt(this._thumb.css("border-top-width"),10)||0,this._borders.vertical+=parseInt(this._thumb.css("border-bottom-width"),10)||0;var t=this._borders[this._dir("opposite")];"horizontal"===this.orientation?(this._thumb.css("margin-top",-t/2),this._thumb.css("margin-left",0)):(this._thumb.css("margin-left",-t/2),this._thumb.css("margin-top",0))},_labelsLayout:function(){var t=this.host,e=this._thumb,i=this._dir("opSize"),s=this._dir("size"),h=this._dir("oSize"),o=t[s]()-e[h](),a=this._borders[this._dir("opposite")]/2;this._onLabel[s](o+a),this._offLabel[s](o+a),this.rtl&&this._onLabel[s](o+2*a),this._onLabel[i](t[i]()),this._offLabel[i](t[i]()),this._orderLabels(),this._centerLabels()},_orderLabels:function(){if("horizontal"===this.orientation){var t="left";this.rtl&&(t="right"),this._onLabel.css("float",t),this._thumb.css("float",t),this._offLabel.css("float",t)}else this._onLabel.css("display","block"),this._offLabel.css("display","block")},_centerLabels:function(){var t=this._onLabel.children("div"),e=this._offLabel.children("div"),i=t.parent().height(),s=t.outerHeight(),h=this._borders[this.orientation]/2||0;0==s&&(s=14);var o=Math.floor((i-s)/2)+h;t.css("margin-top",o),e.css("margin-top",o)},_removeEventHandlers:function(){var e="."+this.element.id;this.removeHandler(this._wrapper,this._getEvent("click")+e,this._clickHandle),this.removeHandler(this._thumb,this._getEvent("mousedown")+e,this._mouseDown),this.removeHandler(t(document),this._getEvent("mouseup")+e,this._mouseUp),this.removeHandler(t(document),this._getEvent("mousemove")+e,this._mouseMove),this.removeHandler(this._thumb,"mouseenter"+e),this.removeHandler(this._thumb,"mouseleave"+e),this.removeHandler(this._wrapper,"focus"+e),this.removeHandler(this._wrapper,"blur"+e)},_addEventHandles:function(){var e="."+this.element.id,i=this;this.addHandler(this.host,"focus"+e,function(t){return i.host.addClass(i.toThemeProperty("jqx-fill-state-focus")),!1}),this.addHandler(this.host,"blur"+e,function(){i.host.removeClass(i.toThemeProperty("jqx-fill-state-focus"))}),this.addHandler(this._thumb,"mouseenter"+e,function(){i._thumb.addClass(i.toThemeProperty("jqx-fill-state-hover"))}),this.addHandler(this._thumb,"mouseleave"+e,function(){i._thumb.removeClass(i.toThemeProperty("jqx-fill-state-hover"))}),this.addHandler(this._wrapper,this._getEvent("click")+e,this._clickHandle,{self:this}),this.addHandler(this._thumb,this._getEvent("mousedown")+e,this._mouseDown,{self:this}),this.addHandler(t(document),this._getEvent("mouseup")+e,this._mouseUp,{self:this}),this.addHandler(t(document),this._getEvent("mousemove")+e,this._mouseMove,{self:this})},enable:function(){this.disabled=!1,this.element.disabled=!1,t.jqx.aria(this,"aria-disabled",this.disabled)},disable:function(){this.disabled=!0,this.element.disabled=!0,t.jqx.aria(this,"aria-disabled",this.disabled)},_clickHandle:function(t){var e=t.data.self;"click"!==e.toggleMode&&"default"!==e.toggleMode||e.disabled||e._isDistanceTraveled||e._dragged||(e._wrapper.stop(),e.toggle()),e._thumb.removeClass(e.toThemeProperty("jqx-fill-state-pressed"))},_mouseDown:function(t){var e=t.data.self,i=e._wrapper;e.metroMode&&(e.host.css("overflow","hidden"),e._onLabel.css("visibility","visible"),e._offLabel.css("visibility","visible")),e._mouseStartPosition=e._getMouseCoordinates(t),e._buttonStartPosition={left:parseInt(i.css("margin-left"),10)||0,top:parseInt(i.css("margin-top"),10)||0},e.disabled||"slide"!==e.toggleMode&&"default"!==e.toggleMode||(e._wrapper.stop(),e._isMouseDown=!0,e._isDistanceTraveled=!1,e._dragged=!1),e._thumb.addClass(e.toThemeProperty("jqx-fill-state-pressed"))},_mouseUp:function(t){var e=t.data.self;if(e.metroMode,e._isMouseDown=!1,e._thumb.removeClass(e.toThemeProperty("jqx-fill-state-pressed")),e._isDistanceTraveled){var i=e._wrapper,s=parseInt(i.css("margin-"+e._dir("pos")),10)||0;e._dropHandler(s)?e._switchButton(!e.checked):e._switchButton(e.checked,null,!0),e._isDistanceTraveled=!1}},_mouseMove:function(t){var e=t.data.self,i=e._getMouseCoordinates(t);if(e._isMouseDown&&e._distanceTraveled(i)){var s=e._dir("pos"),h=e._wrapper,o=e._buttonStartPosition[s]+i[s]-e._mouseStartPosition[s],o=e._validatePosition(o);return e._dragged=!0,h.css("margin-"+e._dir("pos"),o),e._onLabel.css("visibility","visible"),e._offLabel.css("visibility","visible"),!1}},_distanceTraveled:function(t){if(this._isDistanceTraveled)return!0;if(this._isMouseDown){var e=this._mouseStartPosition,i=this._distanceRequired;return this._isDistanceTraveled=Math.abs(t.left-e.left)>=i||Math.abs(t.top-e.top)>=i,this._isDistanceTraveled}return!1},_validatePosition:function(t){var e=this._borders[this._dir("opposite")],i=-(this.host[this._dir("size")]()-this._thumb[this._dir("oSize")]())-e;return 0<t?0:i>t?i:t},_dropHandler:function(t){var e=-(this.host[this._dir("size")]()-this._thumb[this._dir("oSize")]()),i=Math.abs(e-0);return Math.abs(t-this._buttonStartPosition[this._dir("pos")])>=i*(this.switchRatio/100)},_switchButton:function(t,e,i){this.metroMode?(this.host.css("overflow","hidden"),this._onLabel.css("visibility","visible"),this._offLabel.css("visibility","visible"),t?this._thumb.css("left","0px"):this._thumb.css("left","-2px")):(this._onLabel.css("visibility","visible"),this._offLabel.css("visibility","visible"));var s=this._wrapper,h=this,o={},a=this._borders[this._dir("opposite")],r=0;void 0===e&&(e=this.animationEnabled?this.animationDuration:0),this.rtl?t?(r=this.host[this._dir("size")]()-this._thumb[this._dir("oSize")]()+a,this.metroMode&&(r+=5)):this.metroMode&&(r-=3):t||(r=this.host[this._dir("size")]()-this._thumb[this._dir("oSize")]()+a),o["margin-"+this._dir("pos")]=-r,t?h.host.addClass(h.toThemeProperty("jqx-switchbutton-on")):h.host.removeClass(h.toThemeProperty("jqx-switchbutton-on")),s.animate(o,e,function(){t?(h._onLabel.css("visibility","visible"),h._offLabel.css("visibility","hidden")):(h._onLabel.css("visibility","hidden"),h._offLabel.css("visibility","visible")),h.checked=t,i||h._handleEvent(!t)})},_handleEvent:function(t){t!==this.checked&&this._raiseEvent(2,{check:this.checked,checked:this.checked}),t?this._raiseEvent(0,{checked:this.checked}):this._raiseEvent(1,{checked:this.checked})},_disableSelection:function(){var e=this.host.find("*");t.each(e,function(e,i){i.onselectstart=function(){return!1},t(i).addClass("jqx-disableselect")})},_getMouseCoordinates:function(t){return this._isTouchDevice&&t.originalEvent.touches?{left:t.originalEvent.touches[0].pageX,top:t.originalEvent.touches[0].pageY}:{left:t.pageX,top:t.pageY}},destroy:function(){this._removeEventHandlers(),this.host.removeClass(this.toThemeProperty("jqx-switchbutton")),this._wrapper.remove()},_raiseEvent:function(e,i){var s=t.Event(this._events[e]);return s.args=i,this.host.trigger(s)},_themeChanger:function(e,i,s){if(e){void 0===s&&(s=this.host);for(var h=s[0].className.split(" "),o=[],a=[],r=s.children(),n=0;n<h.length;n+=1)h[n].indexOf(e)>=0&&(o.push(h[n]),a.push(h[n].replace(e,i)));this._removeOldClasses(o,s),this._addNewClasses(a,s);for(n=0;n<r.length;n+=1)this._themeChanger(e,i,t(r[n]))}},_removeOldClasses:function(t,e){for(var i=0;i<t.length;i+=1)e.removeClass(t[i])},_addNewClasses:function(t,e){for(var i=0;i<t.length;i+=1)e.addClass(t[i])},propertiesChangedHandler:function(t,e,i){i&&i.width&&i.height&&2==Object.keys(i).length&&(t._wrapper.css("margin-left","0px"),t._wrapper.css("margin-top","0px"),t._performLayout(),t._wrapper.css("left","0px"),t._wrapper.css("top","0px"),t._switchButton(this.checked,0,!0))},propertyChangedHandler:function(e,i,s,h){if(!(e.batchUpdate&&e.batchUpdate.width&&e.batchUpdate.height&&2==Object.keys(e.batchUpdate).length))switch(i){case"disabled":h?e.disable():e.enable();break;case"switchRatio":e.switchRatio=parseInt(e.switchRatio,10);break;case"checked":h?e.check():e.uncheck();break;case"onLabel":e.setOnLabel(h);break;case"offLabel":e.setOffLabel(h);break;case"theme":t.jqx.utilities.setTheme(s,h,e.host);break;case"width":case"height":case"thumbSize":case"orientation":e._wrapper.css("margin-left","0px"),e._wrapper.css("margin-top","0px"),e._performLayout(),e._wrapper.css("left","0px"),e._wrapper.css("top","0px"),e._switchButton(this.checked,0,!0)}}})}(jqxBaseFramework);
