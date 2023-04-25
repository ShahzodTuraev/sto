const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY 
});
const openai = new OpenAIApi(config);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors('AllowAll'));

// Set up the ChatGPT endpointS
app.post("/chat", async(req, res) => {
  // Get the prompt from the request
  const { prompt } = req.body;

  // Generate a response with ChatGPT
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

// Start the server
const port = 8020;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});