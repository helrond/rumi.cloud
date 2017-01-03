const Markov = require('markov-strings');

const options = {
  maxLength: 140,
  checker: sentence => {
    var regex = new RegExp('^[A-Z].*[\.\!\?]$');
    return regex.test(sentence);
  }
};

const markov = new Markov(data, options);

document.getElementById("text").innerHTML = "Thinking...";

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
        generateText()
      } else {
        document.getElementById("text").innerHTML = shorterTweet.string;
      }
    });
}

document.addEventListener('DOMContentLoaded', buildCorpus, false);

document.getElementById("refresh").addEventListener("click", generateSentence);
