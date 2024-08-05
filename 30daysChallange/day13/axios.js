import axios from "axios";


// Example: Making a GET request
axios.get('https://api.example.com/posts')
  .then(response => {
    console.log('Response data:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  