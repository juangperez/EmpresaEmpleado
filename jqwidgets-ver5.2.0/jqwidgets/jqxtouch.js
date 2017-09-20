/*
jQWidgets v5.2.0 (2017-Sep)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){var e=0;t.jqx.jqxWidget("jqxTouch","",{}),t.extend(t.jqx._jqxTouch.prototype,{defineInstance:function(){this.swipeMin=50,this.swipeMax=500,this.swipeDelay=1e3,this.tapHoldDelay=750,this.swipeMaxVerticalDisance=100,this.swipeMaxHorizontalDisance=100,this.orientationChangeEnabled=!0,this._eventsMap={mousedown:t.jqx.mobile.getTouchEventName("touchstart"),mouseup:t.jqx.mobile.getTouchEventName("touchend"),mousemove:t.jqx.mobile.getTouchEventName("touchmove")},this._swipeLocked=!1,this._rotationInterval=200,this._events=["tap","taphold","swipe","swipeleft","swiperight","swipetop","swipebottom","orientationchange"],this._instanceId=-1},createInstance:function(){e+=1,this._instanceId=e,this._isTouchDevice=t.jqx.mobile.isTouchDevice(),this._defineRotateHandler()},refresh:function(){this._removeEventListeners(),this._addEventListeners()},_defineRotateHandler:function(){var t=this;this._rotateHandler||(this._rotateHandler=function(){t._checkOrientation()})},_getEvent:function(t){return this._isTouchDevice&&(t=this._eventsMap[t]),t+this._getEventNamespace()},_getEventNamespace:function(){return".swipe"+this._instanceId},_removeEventListeners:function(){clearInterval(this._rotateInterval),this.removeHandler(t(document),this._getEvent("mouseup")),this.removeHandler(this.host,this._getEvent("mousedown")),this.removeHandler(this.host,this._getEvent("mousemove")),window.removeEventListener&&(window.removeEventListener("resize",this._rotateHandler),window.removeEventListener("orientationchange",this._rotateHandler))},_addEventListeners:function(){var t=this;this.addHandler(this.host,this._getEvent("mouseup"),function(e){t._resetSwipe(),t._resetTap()}),this.addHandler(this.host,this._getEvent("mousedown"),function(e){t._initSwipe(e),t._initTap(e)}),this.addHandler(this.host,this._getEvent("mousemove"),function(e){return t._maxSwipeVerticalDistance=Math.max(t._maxSwipeVerticalDistance,Math.abs(t._startY-t._getCoordinates(e).y)),t._maxSwipeHorizontalDistance=Math.max(t._maxSwipeHorizontalDistance,Math.abs(t._startX-t._getCoordinates(e).x)),t._mouseMoved=!0,t._handleSwipeEvents(e)}),this._rotationListeners()},_handleSwipeEvents:function(t){var e=!0;return this._mouseDown&&!this._tapHoldFired&&(e=this._handleVerticalSwipeEvents(t),e=this._handleHorizontalSwipeEvents(t)),this._lastPosition=this._getCoordinates(t),e},_handleVerticalSwipeEvents:function(t){var e,i;return e=this._getCoordinates(t).y,i=e-this._startY,!(this._maxSwipeHorizontalDistance<this.swipeMaxHorizontalDisance)||this._swiped(t,i,2)},_handleHorizontalSwipeEvents:function(t){var e,i;return e=this._getCoordinates(t).x,i=e-this._startX,!(this._maxSwipeVerticalDistance<this.swipeMaxVerticalDisance)||this._swiped(t,i)},_swiped:function(t,e,i){return i=i||0,Math.abs(e)>=this.swipeMin&&!this._swipeEvent&&!this._swipeLocked&&(this._swipeEvent=this._getSwipeEvent(e,i)),!(Math.abs(e)<=this.swipeMax)||(t.stopImmediatePropagation(),!1)},_getSwipeEvent:function(t,e){return t<0?{eventId:3+e,data:{target:this.host}}:{eventId:4+e,data:{target:this.host}}},_resetSwipe:function(){this._swipeEvent&&!this._swipeLocked&&(this._raiseEvent(2,this._swipeEvent.data),this._raiseEvent(this._swipeEvent.eventId,this._swipeEvent.data)),clearTimeout(this._swipeTimeout),this._mouseDown=!1},_resetTap:function(){clearTimeout(this._tapHoldTimeout),this._tapHoldFired||this._mouseMoved||this._raiseEvent(0,{target:this.host})},_initTap:function(t){var e=this;this._mouseMoved=!1,this._tapHoldFired=!1,this._tapHoldTimeout=setTimeout(function(){e._mouseMoved||(e._raiseEvent(1,{target:this.host}),e._tapHoldFired=!0)},this.tapHoldDelay)},_initSwipe:function(t){var e=this;this._mouseDown=!0,this._maxSwipeVerticalDistance=0,this._maxSwipeHorizontalDistance=0,this._startX=this._getCoordinates(t).x,this._startY=this._getCoordinates(t).y,this._swipeLocked=!1,this._swipeEvent=null,this._swipeTimeout=setTimeout(function(){e._swipeLocked=!0},this.swipeDelay)},_rotationListeners:function(){var t=this;this._previousOrientation=window.orientation,this._previousWidth=screen.width,this.orientationChangeEnabled&&(window.addEventListener&&(window.addEventListener("resize",this._rotateHandler,!1),window.addEventListener("orientationchange",this._rotateHandler,!1)),this._rotateInterval=setInterval(function(){t._checkOrientation()},this._rotationInterval))},_checkOrientation:function(){var t="vertical";window.orientation===this._previousOrientation&&this._previousWidth===screen.width||((90===window.orientation||screen.width>screen.height)&&(t="horizontal"),this._raiseEvent(7,{orientation:t})),this._previousOrientation=window.orientation,this._previousWidth=screen.width},_raiseEvent:function(e,i){var n=t.Event(this._events[e]);return n.args=i,this.host.trigger(n)},_getCoordinates:function(e){var i=t.jqx.position(e);return i.x=i.left,i.y=i.top,i},propertyChangedHandler:function(t,e,i,n){"orientationChangeEnabled"===e&&this.refresh()},isTouchDevice:function(){return this._isTouchDevice}})}(jqxBaseFramework);

