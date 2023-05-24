class NavbarUtil {
  static scrollHideAndShow(element: HTMLElement): void {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;

      (prevScrollpos > currentScrollPos || currentScrollPos === 0) ? 
      element.style.top = window.innerWidth > 600 ? "20px": "0px" : 
      element.style.top = "-400px";
  
      prevScrollpos = currentScrollPos < 0 ? 0 : currentScrollPos;
    }    
  }
}

export default NavbarUtil