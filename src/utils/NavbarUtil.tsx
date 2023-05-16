import React from 'react'

class NavbarUtil {
  static scrollHideAndShow(element: HTMLElement) {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;

      (prevScrollpos > currentScrollPos || currentScrollPos === 0 ) ? 
      element.style.top = "20px" : 
      element.style.top = "-400px";
  
      prevScrollpos = currentScrollPos < 0 ? 0 : currentScrollPos;
    }    
  }
}

export default NavbarUtil