var quotes;
var authorName = document.getElementById("author");
var qoute = document.getElementById("qoute");
var counter = 1;
function change() {
  if (counter === quotes.length) {
    counter = 0;

    for (var i = quotes.length - 1; i > 0; i--) {
      console.log(i);
      var j = Math.floor(Math.random() * (i + 1));
      console.log(j);
      var temp = quotes[i];
      quotes[i] = quotes[j];
      quotes[j] = temp;
      if (quotes) {
      }
    }
  }

  authorName.innerHTML = "";
  qoute.innerHTML = "";

  authorName.innerHTML = quotes[counter].author;
  qoute.innerHTML = quotes[counter].qoute;
  counter++;
}

quotes = [
  {
    qoute: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    qoute:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: " Marilyn Monroe ",
  },
  {
    qoute:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: " Albert Einstein",
  },
  {
    qoute: "“So many books, so little time.”",
    author: "Frank Zappa",
  },
  {
    qoute: "“A room without books is like a body without a soul.”",
    author: "Marcus Tullius Cicero",
  },
];
