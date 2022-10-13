const header = document.querySelector("header")
let scrollpos=window.scrollY;
    console.log(window.scrollY)
   console.log(window.querySelector)
 
    if (scrollpos > header.offsetHeight){
        header.style.display = none
     console.log( header.offsetHeight +" "+scrollpos)

}else {
         console.log( header.offsetHeight +" "+scrollpos)
    }

/*
const header_offsetheight = document.querySelector("header").offsetHeight
const nav_position = document.querySelector("nav")
const nav_height = document.querySelector("nav").offsetHeight
const windowwidth = window.outerWidth


  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

      if (scrollpos >= header_offsetheight/2 && windowwidth > 480+"px") {
        console.log("supérieur" + scrollpos + windowwidth)
          nav_position.style.position = "fixed";
          nav_position.style.top = 0;
    
      }
      else if  (scrollpos <= header_offsetheight/2 && windowwidth > 480+"px"){
        console.log("inférieur" + header_offsetheight/2 + " " + nav_height +" "+ windowwidth > 480+"px")
          nav_position.style.position = "relative";
          nav_position.style.top =  header_offsetheight/2+"px"  ;
      }
      else {
console.log(" "+ scrollpos +" "+ windowwidth +" "+ header_offsetheight/2)
      }


  })*/