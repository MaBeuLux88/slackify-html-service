const express = require('express')
const bodyParser = require('body-parser');
const slackify = require('slackify-html');
const app = express()
app.use(bodyParser.json());

app.post('/html2md', (req, res) => {
  res.send(slackify(req.body.text));
})

app.listen(3000, () => console.log(`Started server on port 3000!`));
