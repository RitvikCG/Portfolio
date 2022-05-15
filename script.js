document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".fetch-new-quote");
  const quote = document.querySelector("blockquote p");
  const cite = document.querySelector("blockquote cite");
  async function updateQuote() {

    const response = await fetch(
      "https://programming-quotes-api.herokuapp.com/Quotes/random"
    );
    const data = await response.json();
    if (response.ok) {
      quote.textContent = data.en;
      cite.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }

  button.addEventListener("click", updateQuote);


  updateQuote();
});
var a=document.getElementById("submit_div")
function greeting(name) {

  }
function submitingToAPI(){
  return new Promise((res)=>{
    setTimeout(res,500);
  });
}

function load(){
    var a=document.getElementById("submit_div")
    var submit_btn=document.createElement("button")
    submit_btn.innerText="Send Message"
    submit_btn.setAttribute("id", "submit")
    submit_btn.addEventListener("click",async function(){ 
        await submitingToAPI()
        submit_btn.innerText="Message Sent"
    } )
    a.appendChild(submit_btn)
}
load();

document.getElementById("demo").innerHTML = getuserCurry("I'm an innovative and tech savvy person who is always ready to upgrade skills and take up challenges.")("Problem solving and developing are my key skills. I'm skilled in prioritizing and completing tasks independently. ")(" Apart from this I also have fluent communication and great leadership skills. I also have a strong hold in data structures and algorithms in java programming language.");
           
           
    function getuserCurry(firstname) {
            return function(lastname) {
              return function(age) {
                return  firstname + lastname  + age;
              }
            }
          }


function Ritvik(){
    this.phno="9464540027";
}
Ritvik.prototype.name="Ritvik Sharma";

const p1=new Ritvik();
document.getElementById("name").innerHTML=p1.name;