var quotes = [
"A bird in the hand is better than two on the tree.",
"A bad workman always blames his tools.",
"Absence makes the heart grow fonder.",
"A cat has nine lives.",
"A chain is only as strong as its weakest link.",
"Actions speak louder than words.",
"A drowning man will clutch at a straw.",
"A fool and his money are soon parted.",
"A journey of thousand miles begins with a single step.",
"All’s well that ends well.",
"All roads lead to Rome.",
"All that glitters is not gold.",
"Always put your best foot forward.",
"An idle brain is the devil’s workshop.",
"As you sow, so you shall reap.",
"Barking dogs seldom bite.",
"Beauty is in the eye of the beholder.",
'Better late than never.',
'Clothes do not make the man.',
"Cowards die many times before their deaths.",
"Curiosity killed the cat.",
"Don’t bite the hand that feeds you.",
"Don’t judge a book by its cover.",
"Don’t make a mountain out of a molehill.",
"Don’t put all your eggs in one basket.",
"Early bird catches the worm.",
'Good things come to those who wait.',
'Half a loaf is better than none.',
'it’s no use crying over spilt milk.',
"Make hay while the sun shines.",
"Money doesn’t grow on trees.",
"No gain without pain.",
"Pen is mightier than sword.",
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    
}


 let heading =  document.createElement("h1");
 heading.classList.add("fw-bolder","text-center","py-2");
 heading.innerText="Quote of the Day";
 document.querySelector("body").append(heading);
 let para =  document.createElement("p");
 para.classList.add("fw-bolder","text-center");
 para.innerText="Press the button below to recieve a random quote!";
 document.body.append(para);
 let btn=  document.createElement("button");
btn.classList.add("m-auto","text-center","d-block");
btn.innerText="New Quote";
 document.body.append(btn);
let display = document.createElement("p");
display.setAttribute("id" ,"quoteDisplay");
display.classList.add("text-center");
document.body.append(display)


document.querySelector("button").addEventListener("click" , function(){
    newQuote();
    document.querySelector("button").style.backgroundColor="#009D5F";
    document.querySelector("button").style.width="350px";
})