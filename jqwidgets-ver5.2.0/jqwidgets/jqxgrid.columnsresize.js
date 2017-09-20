/*
jQWidgets v5.2.0 (2017-Sep)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){e.extend(e.jqx._jqxGrid.prototype,{autoresizecolumns:function(i,t){"cells"!=i&&"all"!=i&&"column"!=i&&(i="all");var l=this.that,s=this.getrows();this.pageable&&(s=this.dataview.rows,this.groupable&&(s=this.dataview.records)),t=void 0==t?0:parseInt(t);var r=s.length;if(void 0==r&&void 0!=s){var o=new Array;e.each(s,function(e){o.push(this)}),r=(s=o).length}var a=e("<span></span>");a.addClass(this.toThemeProperty("jqx-widget")),a.addClass(this.toThemeProperty("jqx-grid-cell")),e(document.body).append(a);var n=[],d=[],u=[],c=[],h=l.host.width();"hidden"!=l.vScrollBar[0].style.visibility&&(h-=this.scrollbarsize+5),h<0&&(h=0);for(var m=0;m<r;m++)for(var f=s[m],p=0;p<this.columns.records.length;p++)if(!((q=this.columns.records[p]).hidden||this.groups.length>0&&p<=this.groups.length-1)){void 0==d[q.displayfield]&&(d[q.displayfield]=0),void 0==u[q.displayfield]&&(u[q.displayfield]="");var w=f[q.displayfield];if(""!=q.cellsformat)e.jqx.dataFormat&&(e.jqx.dataFormat.isDate(w)?w=e.jqx.dataFormat.formatdate(w,q.cellsformat,this.gridlocalization):e.jqx.dataFormat.isNumber(w)&&(w=e.jqx.dataFormat.formatnumber(w,q.cellsformat,this.gridlocalization)));else if(q.cellsrenderer){var v=l._defaultcellsrenderer(w,q),g=q.cellsrenderer(m,q.datafield,w,v,q.getcolumnproperties(),f);void 0!=g&&(w=e(g).text())}if((void 0==i||"cells"==i||"all"==i)&&null!=w){var n=w.toString().length,z=(b=w.toString()).replace(/[^A-Z]/g,"").length;n>d[q.displayfield]&&(d[q.displayfield]=n,u[q.displayfield]=w,c[q.displayfield]=z),n>0&&n>=z&&(_=20*z+15*(n-z))>(y=20*c[q.displayfield]+15*(d[q.displayfield]-c[q.displayfield]))&&_>0&&y>0&&(d[q.displayfield]=n,u[q.displayfield]=w,c[q.displayfield]=z)}if("column"==i||"all"==i){if(q.text.toString().length>d[q.displayfield]){u[q.displayfield]=q.text,d[q.displayfield]=q.text.length;z=(b=q.text.toString()).replace(/[^A-Z]/g,"").length;c[q.displayfield]=z}var n=(w=q.text).toString().length,b=w.toString(),z=b.replace(/[^A-Z]/g,"").length;if(n>0&&n>=z){var _=20*z+15*(n-z),y=20*c[q.displayfield]+15*(d[q.displayfield]-c[q.displayfield]);_>y&&_>0&&y>0&&(d[q.displayfield]=n,u[q.displayfield]=w,c[q.displayfield]=z)}}}if(this.columns.records){for(p=0;p<this.columns.records.length;p++)if((q=this.columns.records[p]).displayfield){void 0==u[q.displayfield]&&(u[q.displayfield]=q.text),a[0].className.indexOf("jqx-grid-column-header")>=0&&a.removeClass(this.toThemeProperty("jqx-grid-column-header")),u[q.displayfield]==q.text&&a.addClass(this.toThemeProperty("jqx-grid-column-header")),a[0].innerHTML=u[q.displayfield].toString();var x=a.outerWidth()+10;if(a.children().length>0&&(x=a.children().outerWidth()+10),e.jqx.browser.msie&&e.jqx.browser.version<8&&(x+=10),this.filterable&&this.showfilterrow&&(x+=5),(x+=t)>q.maxwidth&&(x=q.maxwidth),void 0!=q._width&&(q.__width=q._width),q._width=null,"auto"==q.maxwidth||x<=q.maxwidth){var j=q.width;x<q.minwidth&&(x=q.minwidth),q.width=x,void 0!=q._percentagewidth&&(q._percentagewidth=null),this._raiseEvent(14,{columntext:q.text,column:q.getcolumnproperties(),datafield:q.datafield,displayfield:q.displayfield,oldwidth:j,newwidth:x})}}a.remove(),this._updatecolumnwidths(),this._updatecellwidths(),this._renderrows(this.virtualsizeinfo);for(p=0;p<this.columns.records.length;p++){var q=this.columns.records[p];void 0!=q.__width&&(q._width=q.__width)}}},autoresizecolumn:function(i,t,l){if("cells"!=t&&"all"!=t&&"column"!=t&&(t="all"),void 0==i)return!1;var s=this.getrows();this.pageable&&(s=this.dataview.rows,this.groupable&&(s=this.dataview.records));var r=this.getcolumn(i);if(void 0==r)return!1;l=void 0==l?0:parseInt(l);var o=s.length,a=e("<span></span>");a.addClass(this.toThemeProperty("jqx-widget")),a.addClass(this.toThemeProperty("jqx-grid-cell")),e(document.body).append(a);var n=0,d="",u=0,c=this.that,h=c.host.width();if("hidden"!=c.vScrollBar[0].style.visibility&&(h-=this.scrollbarsize+5),h<0&&(h=0),void 0==t||"cells"==t||"all"==t)for(var m=0;m<o;m++){var f=s[m][r.displayfield];if(""!=r.cellsformat)e.jqx.dataFormat&&(e.jqx.dataFormat.isDate(f)?f=e.jqx.dataFormat.formatdate(f,r.cellsformat,this.gridlocalization):e.jqx.dataFormat.isNumber(f)&&(f=e.jqx.dataFormat.formatnumber(f,r.cellsformat,this.gridlocalization)));else if(r.cellsrenderer){var p=r.cellsrenderer(m,r,f);void 0!=p&&(f=e(p).text())}if(null!=f){var w=f.toString().length,v=(g=f.toString()).replace(/[^A-Z]/g,"").length;w>n&&(n=w,d=f,u=v),w>0&&w>=v&&(z=20*v+15*(w-v))>(b=20*u+15*(n-u))&&z>0&&b>0&&(n=w,d=f,u=v)}}if("column"==t||"all"==t){r.text.toString().length>n&&(d=r.text);var w=(f=r.text.toString()).toString().length,g=f.toString(),v=g.replace(/[^A-Z]/g,"").length;if(w>0&&w>=v){var z=20*v+15*(w-v),b=20*u+15*(n-u);z>b&&z>0&&b>0&&(n=w,d=f,u=v)}}void 0==d&&(d=r.text),a[0].innerHTML=d,d==r.text&&a.addClass(this.toThemeProperty("jqx-grid-column-header"));var _=a.outerWidth()+10;if(e.jqx.browser.msie&&e.jqx.browser.version<8&&(_+=5),this.filterable&&this.showfilterrow&&(_+=5),_+=l,a.remove(),_>r.maxwidth&&(_=r.maxwidth),"auto"==r.maxwidth||_<=r.maxwidth){var y=r.width;_<r.minwidth&&(_=r.minwidth),r.width=_,void 0!=r._width&&(r.__width=r._width),r._width=null,void 0!=r._percentagewidth&&(r._percentagewidth=null),this._updatecolumnwidths(),this._updatecellwidths(),this._raiseEvent(14,{columntext:r.text,column:r.getcolumnproperties(),datafield:i,displayfield:r.displayfield,oldwidth:y,newwidth:_}),this._renderrows(this.virtualsizeinfo),void 0!=r._width&&(r._width=r.__width)}},_handlecolumnsresize:function(){var i=this.that;if(this.columnsresize){var t=!1;i.isTouchDevice()&&!0!==i.touchmode&&(t=!0);var l="mousemove.resize"+this.element.id,s="mousedown.resize"+this.element.id,r="mouseup.resize"+this.element.id;if(t)var l=e.jqx.mobile.getTouchEventName("touchmove")+".resize"+this.element.id,s=e.jqx.mobile.getTouchEventName("touchstart")+".resize"+this.element.id,r=e.jqx.mobile.getTouchEventName("touchend")+".resize"+this.element.id;this.removeHandler(e(document),l),this.addHandler(e(document),l,function(l){if(null!=e.data(document.body,"contextmenu"+i.element.id)&&i.autoshowcolumnsmenubutton)return!0;if(null!=i.resizablecolumn&&!i.disabled&&i.resizing&&null!=i.resizeline){i.resizablecolumn.columnelement;var s=i.host.coord(),r=parseInt(i.resizestartline.coord().left),o=r-i._startcolumnwidth,a=i.resizablecolumn.column.minwidth;a="auto"==a?0:parseInt(a);var n=i.resizablecolumn.column.maxwidth;n="auto"==n?0:parseInt(n);var d=l.pageX;t&&(d=i.getTouches(l)[0].pageX),o+=a;var u=n>0?r+n:0,c=0==n||i._startcolumnwidth+d-r<n;if(i.rtl)c=!0;if(c)if(i.rtl){if(d>=s.left&&d<=s.left+i.host.width()&&(i.resizeline.css("left",d),t))return!1}else if(d>=s.left&&d>=o&&(0!=u&&l.pageX<u?i.resizeline.css("left",d):0==u&&i.resizeline.css("left",d),t))return!1}return!(!t&&null!=i.resizablecolumn)&&void 0}),this.removeHandler(e(document),s),this.addHandler(e(document),s,function(t){if(null!=e.data(document.body,"contextmenu"+i.element.id)&&i.autoshowcolumnsmenubutton)return!0;if(null!=i.resizablecolumn&&!i.disabled){var l=i.resizablecolumn.columnelement;if(l.coord().top+l.height()+5<t.pageY)return void(i.resizablecolumn=null);if(l.coord().top-5>t.pageY)return void(i.resizablecolumn=null);if(i._startcolumnwidth=i.resizablecolumn.column.width,i.resizablecolumn.column._width=null,e(document.body).addClass("jqx-disableselect"),e(document.body).addClass("jqx-position-reset"),i.host.addClass("jqx-disableselect"),i.content.addClass("jqx-disableselect"),i._mouseDownResize=new Date,i.resizing=!0,i._lastmouseDownResize&&i.columnsautoresize&&i._lastmouseDownResize-i._mouseDownResize<300&&i._lastmouseDownResize-i._mouseDownResize>-500){var s=i.resizablecolumn.column;if(s.resizable){i.resizablecolumn.column.width;var r=i.hScrollBar[0].style.visibility;return i._resizecolumn=null,i.resizeline.hide(),i.resizestartline.hide(),i.resizebackground.remove(),i.resizablecolumn=null,i.columndragstarted=!1,i.dragmousedown=null,i.__drag=!1,i.autoresizecolumn(s.displayfield,"all"),r!=i.hScrollBar[0].style.visibility&&i.hScrollInstance.setPosition(0),i.rtl&&i._arrange(),i.autosavestate&&i.savestate&&i.savestate(),t.stopPropagation(),i.suspendClick=!0,setTimeout(function(){i.suspendClick=!1},100),!1}}i._lastmouseDownResize=new Date,i._resizecolumn=i.resizablecolumn.column,i.resizeline=i.resizeline||e('<div style="position: absolute;"></div>'),i.resizestartline=i.resizestartline||e('<div style="position: absolute;"></div>'),i.resizebackground=i.resizebackground||e('<div style="position: absolute; left: 0; top: 0; background: #000;"></div>'),i.resizebackground.css("opacity",.01),i.resizebackground.css("cursor","col-resize"),i.resizeline.css("cursor","col-resize"),i.resizestartline.css("cursor","col-resize"),i.resizeline.addClass(i.toThemeProperty("jqx-grid-column-resizeline")),i.resizestartline.addClass(i.toThemeProperty("jqx-grid-column-resizestartline")),e(document.body).append(i.resizeline),e(document.body).append(i.resizestartline),e(document.body).append(i.resizebackground);var o=i.resizablecolumn.columnelement.coord();i.resizebackground.css("left",i.host.coord().left),i.resizebackground.css("top",i.host.coord().top),i.resizebackground.width(i.host.width()),i.resizebackground.height(i.host.height()),i.resizebackground.css("z-index",9999);var a=function(e){i.rtl?e.css("left",parseInt(o.left)):e.css("left",parseInt(o.left)+i._startcolumnwidth);var t=i._groupsheader()?i.groupsheader.height():0;t+=i.showtoolbar?i.toolbarheight:0,t+=i.showstatusbar?i.statusbarheight:0;var l=0;i.pageable&&(l=i.pagerheight);var s="visible"==i.hScrollBar.css("visibility")?17:0;e.css("top",parseInt(o.top)),e.css("z-index",99999),i.columngroups?e.height(i.host.height()+i.resizablecolumn.columnelement.height()-l-t-s-i.columngroupslevel*i.columnsheight):e.height(i.host.height()-l-t-s),i.enableanimations?e.show("fast"):e.show()};a(i.resizeline),a(i.resizestartline),i.dragmousedown=null}});var o=function(){if(e(document.body).removeClass("jqx-disableselect"),e(document.body).removeClass("jqx-position-reset"),(i.showfilterrow||i.showstatusbar||i.showtoolbar||i.enablebrowserselection)&&(i.host.removeClass("jqx-disableselect"),i.content.removeClass("jqx-disableselect")),i.resizing){if(i._mouseUpResize=new Date,i._mouseUpResize-i._mouseDownResize<200)return i.resizing=!1,void(null!=i._resizecolumn&&null!=i.resizeline&&"block"==i.resizeline.css("display")&&(i._resizecolumn=null,i.resizeline.hide(),i.resizestartline.hide(),i.resizebackground.remove()));if(i.resizing=!1,!i.disabled){var t=i.host.width();if("hidden"!=i.vScrollBar[0].style.visibility&&(t-=20),t<0&&(t=0),null!=i._resizecolumn&&null!=i.resizeline&&"block"==i.resizeline.css("display")){var l=parseInt(i.resizeline.css("left")),s=parseInt(i.resizestartline.css("left")),r=i._startcolumnwidth+l-s;if(i.rtl)r=i._startcolumnwidth-l+s;var o=i._resizecolumn.width;i._closemenu(),r<i._resizecolumn.minwidth&&(r=i._resizecolumn.minwidth),i._resizecolumn.width=r,void 0!=i._resizecolumn._percentagewidth&&(i._resizecolumn._percentagewidth=r/t*100);for(var a=0;a<i._columns.length;a++)if(i._columns[a].datafield===i._resizecolumn.datafield){i._columns[a].width=i._resizecolumn.width,i._columns[a].width<i._resizecolumn.minwidth&&(i._columns[a].width=i._resizecolumn.minwidth);break}var n=i.hScrollBar[0].style.visibility;i._updatecolumnwidths(),i._updatecellwidths(),i._raiseEvent(14,{columntext:i._resizecolumn.text,column:i._resizecolumn.getcolumnproperties(),datafield:i._resizecolumn.datafield,oldwidth:o,newwidth:r}),i._renderrows(i.virtualsizeinfo),i.autosavestate&&i.savestate&&i.savestate(),n!=i.hScrollBar[0].style.visibility&&i.hScrollInstance.setPosition(0),i.rtl&&i._arrange(),i._resizecolumn=null,i.resizeline.hide(),i.resizestartline.hide(),i.resizebackground.remove(),i.resizablecolumn=null}else i.resizablecolumn=null}}};try{if(""!=document.referrer||window.frameElement){var a=null;if(null!=window.top&&window.top!=window.self&&window.parent&&document.referrer&&(a=document.referrer),a&&-1!=a.indexOf(document.location.host)){var n=function(e){o()};window.top.document.addEventListener?window.top.document.addEventListener("mouseup",n,!1):window.top.document.attachEvent&&window.top.document.attachEvent("onmouseup",n)}}}catch(e){}this.removeHandler(e(document),r),this.addHandler(e(document),r,function(t){if(null!=e.data(document.body,"contextmenu"+i.element.id)&&i.autoshowcolumnsmenubutton)return!0;o()})}}})}(jqxBaseFramework);

