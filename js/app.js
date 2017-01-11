const Markov = require('markov-strings');

const options = {
  maxLength: 140,
  checker: sentence => {
    var regex = new RegExp('^[A-Z].*[\.\!\?]$');
    return regex.test(sentence);
  }
};

let t = document.getElementById("text");

const markov = new Markov(data, options);

function buildCorpus() {
  markov.buildCorpus()
  .then(() => {
    generateSentence()
  });
}

function generateSentence() {
  markov.generateSentence({
      maxLength: 140
    })
    .then(shorterTweet => {
      // shorterTweet.string += ' https://github.com/scambier/markov-strings'; // Links always take 23 characters in a tweet
      if(shorterTweet.string == document.getElementById("text").innerHTML) {
        generateSentence()
      } else {
        t.innerHTML = shorterTweet.string;
      }
    });
}

buildCorpus();

document.getElementById("refresh").addEventListener("click", generateSentence);
