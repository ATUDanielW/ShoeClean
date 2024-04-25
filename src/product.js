import axios from "axios"; // Axios fetch product data 

export const PRODUCTS = [
    // store product data
];

// Fetch the product data from the server
axios.get('http://localhost:4000/api/boots')
  .then(response => {
    const data = response.data;
    PRODUCTS.push(...data); // retrieved data into PRODUCTS array
  })
  .catch(error => console.error(error)); // Log any errors that occur

