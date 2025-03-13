
var mobilemenu=document.querySelector(".mobile-menu");
mobilemenu.innerHTML=`
<i class="ri-close-line close"></i>
<ul>
  
    <a href="index.html"><li>HOME</li></a>
    <a href="about.html"><li>ABOUT</li></a>
    <a href="services.html"><li>SERVICES</li></a>
    <a href="project.html"><li>PROJECT</li></a>
    <a href="blog.html"><li>BLOG</li></a>
    <a href="contact.html"><li>CONTACT</li></a>
</ul>
`;
var clos=document.querySelector(".close");
clos.addEventListener("click",()=>{
mobilemenu.style.display="none";
});

var menu=document.querySelector(".menu");

menu.addEventListener("click",()=>{
mobilemenu.style.display="block"; 
});




var inp=document.querySelector(".inp");
inp.innerHTML=`
<input type="text" placeholder="ENTER YOUR VALUE"><i class="ri-close-line inpclose"></i>
`;



var inpclose=document.querySelector(".inpclose");
var inp=document.querySelector(".section-1 .inp");
var search=document.querySelector(".search");
search.addEventListener("click",()=>{
inp.style.display="block";
});

inpclose.addEventListener("click",()=>{
inp.style.display="none";
});



