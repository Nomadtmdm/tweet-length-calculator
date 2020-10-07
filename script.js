
const calculateCharacter = () =>{ var tweet = prompt ("Enter your tweet here");
var name = prompt ("enter your name");

//the number of characters in the tweet above
var tweetCount = tweet.length;
var tweetleft  = 150 - tweetCount;
alert(name + ", you have written " + tweetCount + " characters, you have " + tweetleft + " charecters remaining.");
console.log (`You have written ${tweetCount} characters, you have ${tweetleft} characters remaining.`);

}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
