/*

   http://renenyffenegger.ch/development/web/js-html/js-aspect-ratio/

*/
"use strict";

function viewport() {
//
// Found at:
//    https://andylangton.co.uk/blog/development/get-viewportwindow-size-width-and-height-javascript
//

  var e = window,
      a = 'inner';

  if ( !('innerWidth' in window ) ) {
    a = ' client';
    e =   document.documentElement || document.body;
  }

  return { width : e[ a+'Width' ],
           height: e[ a+'Height' ]
  }
}



var tq84 = tq84 || {};

tq84.aspect_ratio = {};


tq84.aspect_ratio.init = function (
    canvas,
    original_w,
    original_h,
    opts
) {

  self.canvas       = canvas;
  self.original_w   = original_w;
  self.original_h   = original_h;
  self.aspect_ratio = original_h / original_w;

  self.canvas.style.position = 'absolute';
  self.canvas.style.width    =  self.original_w + 'px';
  self.canvas.style.height   =  self.original_h + 'px';

  self.resized();

}

tq84.aspect_ratio.resized = function() {

  var vw=viewport();

  var vw_aspect_ratio = vw.height / vw.width;

  var scale;
  if (vw_aspect_ratio < self.aspect_ratio) {
  //
  //  The viewport is wider than the canvas
  //

     scale = vw.height / self.original_h;
      
  }
  else {
  //
  //  The viewport is higher than the canvas
  //
     scale = vw.width / self.original_w;

  }

  var gap_h = (vw.height - self.original_h) / 2;  // 2018-07-01 let -> var
  var gap_w = (vw.width  - self.original_w) / 2;  // 2018-07-01 let -> var
  self.canvas.style.left = gap_w + 'px';
  self.canvas.style.top  = gap_h + 'px'; 
  self.canvas.style.transform='scale('+(scale*1)+')';


}
