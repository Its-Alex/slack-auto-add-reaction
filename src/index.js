'use strict'

const Slack = require('slack-node')

const apiToken = process.env.SAAR_API_TOKEN
const domain = process.env.SAAR_API_DOMAIN

let slack = new Slack(apiToken, domain)

let loop = () => {
  slack.api('conversations.history', {
    channel: process.env.SAAR_SLACK_CHANNEL
  }, (err, response) => {
    if (err) {
      console.log(err)
      return
    }
    response.messages.forEach(elmt => {
      if (elmt.user === process.env.SAAR_SLACK_AIM_USER) {
        let alreadyReacted = false
        if (elmt.reactions) {
          elmt.reactions.forEach(reaction => {
            if (reaction.users !== process.env.SAAR_SLACK_CURRENT_USER && reaction.name === process.env.SAAR_SLACK_REACTION_NAME) {
              console.log('Already reacted')
              alreadyReacted = true
            }
          })
        }
        if (alreadyReacted === false) {
          slack.api('reactions.add', {
            name: 'dong',
            channel: process.env.SAAR_SLACK_CHANNEL,
            timestamp: elmt.ts
          }, (err, response) => {
            if (err) {
              console.log(err)
            }
            console.log(response)
          })
        }
      }
    })
  })
}

console.log('Server start')
setInterval(loop, 30000)
