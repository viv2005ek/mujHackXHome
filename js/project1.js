 const navMenu = document.body.querySelector(".navigationMenu");



 function menu() {

     navMenu.classList.toggle("visible");

     if (navMenu.classList.contains("visible")) {
         document.body.style.overflow = "hidden";
     } else {
         document.body.style.overflow = "";
     }
 }


 //typing effect
 const typed = document.querySelector(".leftContentH1Span");
 if (typed) {
     let typed_string = typed.getAttribute("data-typed-items");
     if (typed_string) {
         let count = 1;

         onTick();

         function onTick() {
             typed.innerHTML = typed_string.substring(0, count);
             count++;

             if (count > typed_string.length) {
                 setTimeout(() => {
                     count = 1;
                     onTick();
                 }, 5000)
             } else {
                 setTimeout(() => {
                     onTick();
                 }, 300)
             }
         }
     }
 }