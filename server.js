const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/invoke', (req, res) => {
  const { skillId, intentName, slots } = req.body;

  const alexaResponse = {
    version: '1.0',
    sessionAttributes: {},
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: `Intent ${intentName} invoked successfully with skill ID ${skillId}`
      },
      shouldEndSession: true
    }
  };

  res.send(alexaResponse);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
