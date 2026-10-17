
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let words = feedback.trim().split(/\s+/);
console.log("Word Count:", words.length);

// Convert feedback to lowercase for checking
let lowerFeedback = feedback.toLowerCase();

// Check for negative words
if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
