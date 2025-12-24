const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 

// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   emailjs.sendForm(
//     "service_bxqjgpj",
//     "template_h19g9lz",
//     this
//   )
//   .then(() => {
//     alert("Message sent successfully!");
//   })
//   .catch((error) => {
//     console.error("EmailJS error:", error);
//     alert("Failed to send message");
//   });

//   this.reset();
// });

// document.getElementById("contact-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_bxqjgpj",
//         "template_h19g91z",
//         this
//       )
//       .then(() => {
//         document.getElementById("form-status").innerText =
//           "Thank you! Your message has been sent successfully.";
          
//         this.reset();
//         })
//         .catch((error) => {
//             console.error("EmailJS error:", error);
//             document.getElementById("form-status").innerText =
//             "Something went wrong. Please try again later.";
//         });
//   });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) {
    console.error("Form or status element not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.innerText = "Sending message...";

    emailjs
      .sendForm(
        "service_bxqjgpj", 
        "template_h19g9lz",   
        form
      )
      .then(() => {
        document.getElementById("success-overlay").style.display = "flex";
        form.reset();

        setTimeout(() => {
         document.getElementById("success-overlay").style.display = "none";
        }, 3000);

      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        status.innerText =
          "Something went wrong. Please try again later.";
        });

  });
});


