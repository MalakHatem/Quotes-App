var Quotes=[
    {
    quote:"A room without books is like a body without a soul.",
    author: "— Marcus Tullius Cicero"
},
{
    quote:"So many books,so little time.",
    author:"— Frank Zappa"
},
{
    quote:"Without music, life would be a mistake.",
    author:"— Friedrich Nietzsche"
},
{
    quote:"We accept the love we think we deserve.",
    author:"— Stephen Chbosky"
},
{
    quote:"I'm selfish, impatient and a little insecure. I make mistakes.",
    author:"— Marilyn Monroe"
},
{
    quote:"Two things are infinite: the universe and human stupidity.",
    author:"— Albert Einstein"
},
{
    quote:"Insanity is doing the same thing, over and over again.",
    author:"— Narcotics Anonymous"
},
{
    quote:"A friend is someone who knows all about you and still loves you.",
    author:"— Elbert Hubbard"
},
{
    quote:"Be yourself; everyone else is already taken.",
    author:"— Oscar Wilde"
},
{
    quote:"Be the change that you wish to see in the world.",
    author:"— Mahatma Gandhi"
},
{
    quote:"In three words I can sum up everything I've learned about life: it goes on.",

    author:"— Robert Frost"
},
];
var random=-1;
function showQuote(){
    var random=Math.floor(Math.random()*Quotes.length);//math.floor to delete the decimal part
    document.getElementById("quote").innerHTML=Quotes[random].quote;
    document.getElementById("author").innerHTML=Quotes[random].author;
}