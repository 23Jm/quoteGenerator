const apiUrl = "https://api.quotable.io/random";
const blockQuote=document.querySelector("#blockquote");
const span=document.querySelector("#span");
const button=document.querySelector("#new");
const tweetBtn=document.querySelector("#tweet");

async function generate(url){
  const response=await fetch(url);
  var data=await response.json();

  blockQuote.innerHTML=data.content;
  span.innerHTML=data.author;

}
button.addEventListener("click",()=>{
   generate(apiUrl);
});
tweetBtn.addEventListener("click",() => {
  window.open("https://twitter.com/intent/tweet?text=Hello%20world");
});