const url = "/artwork?title=true&q=sunflowers";

// Create a URLSearchParams object with the URL query parameters
const searchParams = new URLSearchParams(url);

// Get the value of the "q" parameter
const qParam = searchParams.get("q");
console.log(qParam);

// Split the value by "=" to extract the word "sunflowers"
const words = qParam.split("=")[1];

console.log(words); // Output: sunflowers
