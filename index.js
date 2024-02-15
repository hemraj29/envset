const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

// Now you can access environment variables using process.env
const port = process.env.PORT || 3000; // Assign a default value if PORT is not defined


// ... (rest of your Express.js application code)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});