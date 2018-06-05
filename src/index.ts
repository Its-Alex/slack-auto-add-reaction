const { WebClient } = require('@slack/client')

const token = process.env.SAAR_SLACK_TOKEN

const web = new WebClient(token)

interface SlackWeb {
  channels: string;
}

web.channels.list()
  .then((res: SlackWeb) => {
    // `res` contains information about the channels
    res.channels.forEach(c => console.log(c.name));
  })
  .catch(console.error);
});
