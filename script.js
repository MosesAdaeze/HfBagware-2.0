// Get the reference to the <h3> element
var heading = document.getElementById("changing-text");

// Define the target text
var targetText = "50% discount on best seller bags.";

// Calculate the duration in milliseconds (3 seconds = 3000 milliseconds)
var duration = 3000;

// Calculate the interval time to update the text gradually
var intervalTime = duration / targetText.length;

// Start the interval to change the text
var currentIndex = 0;
var interval = setInterval(function() {
  if (currentIndex >= targetText.length) {
    clearInterval(interval); // Stop the interval when the text has been fully changed
    return;
  }
  
  // Update the text with each character
  heading.textContent += targetText[currentIndex];
  currentIndex++;
}, intervalTime);
