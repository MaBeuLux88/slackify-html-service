# slackify-html-service
Mini Node.js application to which I can send via REST some HTML content and retrieve Slack MD content.

I'm basically just exposing slackify-html via an express POST.

# Run it: 

```
npm install
docker run -d --rm -p 3000:3000 --name slackify -v "$PWD":/usr/src/app -w /usr/src/app node:14 node index.js
```

