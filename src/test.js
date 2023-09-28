

import { createRequire } from "module"; // Import the 'createRequire' function from the 'module' package
const require = createRequire(import.meta.url); // Create the 'require' method
const arr = require("../src/assets/listIMG/file.json"); // Use the 'require' method

const sortJSON =((arr, key, asc = true)=> {
  return( arr.sort((a, b) => {
    let x = a[key];
    let y = b[key];
    if (asc) {
      return x < y ? -1 : x > y ? 1 : 0;
    } else {
      return x > y ? -1 : x < y ? 1 : 0;
    }
    
  })
  );
});

// Sort the JSON array by the "index" key in descending order
const sortedArray = sortJSON(arr, "index", false);


console.log(sortedArray); // Print the sorted JSON array
export default sortJSON