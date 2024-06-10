const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Define the webhook endpoint
app.post('/webhook', (req, res) => {
  const responseData = req.body;
  console.log('Received response from Kommunicate:', responseData);

  // Acknowledge receipt of the webhook
  res.status(200).send('Webhook received');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Kommunicate Webhook Server is running on port ${PORT}`);
});
