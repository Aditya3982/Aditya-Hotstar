const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");
let search = document.getElementsByClassName('search')[0];
let serach_input = document.getElementById('serach_input');

arrows.forEach((arrow,i)=>{
    const itemNumber = movielists[i].querySelectorAll("img").length;
    let clickcounter = 0;
    arrow.addEventListener("click",()=>{
      const ratio = Math.floor (window.innerWidth /270);
        clickcounter++;
        if(itemNumber - (4 + clickcounter) +(4-ratio) >= 0) {
         movielists[i].style.transform = `translateX(${
            movielists[i].computedStyleMap().get("transform")[0].x.value-300
         }px)`;
          } else{
          movielists[i].style.transform = "translateX(0)";
          clickcounter =0;
       }
    });

  console.log(movielists[i].querySelectorAll("img").length)
});

console.log(Math.floor(window.innerWidth /270));


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.search_user input,.menu-list-items");
ball.addEventListener("click",()=>{
   items.forEach(item=>{
      item.classList.toggle("active")
   })
   ball.classList.toggle("active")
});

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
data.forEach(element => {
   //search data load
   let { name, img, genre, url } = element;
   let card = document.createElement('a');
   card.classList.add('card');
   card.href = url;
   card.innerHTML =`
   <img src="${img}" class="search-img" alt="">
              
              <div class="cont">
                <h1>${name}</h1>
                <p>${genre}</p>
                </div>
                `
                search.appendChild(card);
});
   // search filter
     serach_input.addEventListener('keyup', ()=>{
      let filter = serach_input.value.toUpperCase();
      let a = search.getElementsByTagName('a');

      for (let index = 0; index < a.length; index++) {
         let b = a[index].getElementsByClassName('cont')[0];
         // console.log(a.textContent)
         let TextValue = b.textContent || b.innerText;
         if (TextValue.toUpperCase().indexOf(filter) >-1) {
            a[index].style.display ="flex";
            search.style.visibility = "visible";
            search.style.opacity = 1;
         } else {
             a[index].style.display ="none"; 
         }
         if (serach_input.value ==0) {
             search.style.visibility = "hidden";
            search.style.opacity = 0;
         }
      }
     })

});

document.addEventListener('DOMContentLoaded', function()
{
 const watchNowbtn = document.getElementById('watchNowbtn');
   const trailerModal = document.getElementById('trailerModal');
   const closeButton = document.querySelector('.close-button');
   const trailerIframe = document.getElementById('trailerIframe');
   const trailerUrl = 'stree 2.mp4';

   watchNowbtn.addEventListener('click', function() {
       trailerIframe.src = trailerUrl + '? autoplay=1';
       trailerModal.style.display = 'block';
   });

   closeButton.addEventListener('click', function(){
      trailerIframe.src = '';
      trailerModal.style.display = 'none';
   });

   window.addEventListener('click', 
      function(event) {
         if (event.target === trailerModal) {
            trailerIframe.src = '';
            trailerModal.style.display = 'none';
         }
      });
});

document.addEventListener('DOMContentLoaded', function()
{
 const watchNowbtn1 = document.getElementById('watchNowbtn1');
   const trailerModal1 = document.getElementById('trailerModal1');
   const closeButton1 = document.querySelector('.close-button1');
   const trailerIframe1 = document.getElementById('trailerIframe1');
   const trailerUrl = 'stree 2.mp4';

   watchNowbtn1.addEventListener('click', function() {
       trailerIframe1.src = trailerUrl + '? autoplay=1';
       trailerModal1.style.display = 'block';
   });

   closeButton1.addEventListener('click', function(){
      trailerIframe1.src = '';
      trailerModal1.style.display = 'none';
   });

   window.addEventListener('click', 
      function(event) {
         if (event.target === trailerModal1) {
            trailerIframe1.src = '';
            trailerModal1.style.display = 'none';
         }
      });
});

document.addEventListener('DOMContentLoaded', function()
{
 const watchNowbtn2 = document.getElementById('watchNowbtn2');
   const trailerModal2 = document.getElementById('trailerModal2');
   const closeButton2 = document.querySelector('.close-button2');
   const trailerIframe2 = document.getElementById('trailerIframe2');
   const trailerUrl = 'stree 1.mp4';

   watchNowbtn2.addEventListener('click', function() {
       trailerIframe2.src = trailerUrl + '? autoplay=1';
       trailerModal2.style.display = 'block';
   });

   closeButton2.addEventListener('click', function(){
      trailerIframe2.src = '';
      trailerModal2.style.display = 'none';
   });

   window.addEventListener('click', 
      function(event) {
         if (event.target === trailerModal1) {
            trailerIframe2.src = '';
            trailerModal2.style.display = 'none';
         }
      });
});

document.addEventListener('DOMContentLoaded', function()
{
 const watchNowbtn3 = document.getElementById('watchNowbtn3');
   const trailerModal3 = document.getElementById('trailerModal3');
   const closeButton3 = document.querySelector('.close-button3');
   const trailerIframe3 = document.getElementById('trailerIframe3');
   const trailerUrl = 'pushpa 2.mp4';

   watchNowbtn3.addEventListener('click', function() {
       trailerIframe3.src = trailerUrl + '? autoplay=1';
       trailerModal3.style.display = 'block';
   });

   closeButton3.addEventListener('click', function(){
      trailerIframe3.src = '';
      trailerModal3.style.display = 'none';
   });

   window.addEventListener('click', 
      function(event) {
         if (event.target === trailerModal1) {
            trailerIframe3.src = '';
            trailerModal3.style.display = 'none';
         }
      });
});

document.addEventListener('DOMContentLoaded', function()
{
 const watchNowbtn5 = document.getElementById('watchNowbtn5');
   const trailerModal5 = document.getElementById('trailerModal5');
   const closeButton5 = document.querySelector('.close-button5');
   const trailerIframe5 = document.getElementById('trailerIframe5');
   const trailerUrl = 'stree 2.mp4';

   watchNowbtn5.addEventListener('click', function() {
       trailerIframe5.src = trailerUrl + '? autoplay=1';
       trailerModal5.style.display = 'block';
   });

   closeButton5.addEventListener('click', function(){
      trailerIframe5.src = '';
      trailerModal5.style.display = 'none';
   });

   window.addEventListener('click', 
      function(event) {
         if (event.target === trailerModal5) {
            trailerIframe5.src = '';
            trailerModal5.style.display = 'none';
         }
      });
});

document.addEventListener('DOMContentLoaded', function()
{
 const watchNowbtn6 = document.getElementById('watchNowbtn6');
   const trailerModal6 = document.getElementById('trailerModal6');
   const closeButton6 = document.querySelector('.close-button6');
   const trailerIframe6 = document.getElementById('trailerIframe6');
   const trailerUrl = 'pushpa 2.mp4';

   watchNowbtn6.addEventListener('click', function() {
       trailerIframe6.src = trailerUrl + '? autoplay=1';
       trailerModal6.style.display = 'block';
   });

   closeButton6.addEventListener('click', function(){
      trailerIframe6.src = '';
      trailerModal6.style.display = 'none';
   });

   window.addEventListener('click', 
      function(event) {
         if (event.target === trailerModal6) {
            trailerIframe6.src = '';
            trailerModal6.style.display = 'none';
         }
      });
});

document.addEventListener('DOMContentLoaded', function()
{
 const watchNowbtn7 = document.getElementById('watchNowbtn7');
   const trailerModal7 = document.getElementById('trailerModal7');
   const closeButton7 = document.querySelector('.close-button7');
   const trailerIframe7 = document.getElementById('trailerIframe7');
   const trailerUrl = 'stree 2.mp4';

   watchNowbtn7.addEventListener('click', function() {
       trailerIframe7.src = trailerUrl + '? autoplay=1';
       trailerModal7.style.display = 'block';
   });

   closeButton7.addEventListener('click', function(){
      trailerIframe7.src = '';
      trailerModal7.style.display = 'none';
   });

   window.addEventListener('click', 
      function(event) {
         if (event.target === trailerModal7) {
            trailerIframe7.src = '';
            trailerModal7.style.display = 'none';
         }
      });
});

document.addEventListener('DOMContentLoaded', function()
{
 const watchNowbtn8 = document.getElementById('watchNowbtn8');
   const trailerModal8 = document.getElementById('trailerModal8');
   const closeButton6 = document.querySelector('.close-button8');
   const trailerIframe8 = document.getElementById('trailerIframe8');
   const trailerUrl = 'stree 1.mp4';

   watchNowbtn8.addEventListener('click', function() {
       trailerIframe8.src = trailerUrl + '? autoplay=1';
       trailerModal8.style.display = 'block';
   });

   closeButton6.addEventListener('click', function(){
      trailerIframe8.src = '';
      trailerModal8.style.display = 'none';
   });

   window.addEventListener('click', 
      function(event) {
         if (event.target === trailerModal8) {
            trailerIframe8.src = '';
            trailerModal8.style.display = 'none';
         }
      });
});

document.addEventListener('DOMContentLoaded', function()
{
 const watchNowbtn9 = document.getElementById('watchNowbtn9');
   const trailerModal9 = document.getElementById('trailerModal9');
   const closeButton9 = document.querySelector('.close-button9');
   const trailerIframe9 = document.getElementById('trailerIframe9');
   const trailerUrl = 'pushpa 2.mp4';

   watchNowbtn9.addEventListener('click', function() {
       trailerIframe9.src = trailerUrl + '? autoplay=1';
       trailerModal9.style.display = 'block';
   });

   closeButton9.addEventListener('click', function(){
      trailerIframe9.src = '';
      trailerModal9.style.display = 'none';
   });

   window.addEventListener('click', 
      function(event) {
         if (event.target === trailerModal9) {
            trailerIframe9.src = '';
            trailerModal9.style.display = 'none';
         }
      });
});