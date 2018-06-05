const fs = require('fs')
const map = require('async/map')
const { WebClient } = require('@slack/client')

const web = new WebClient(process.env.SAAR_SLACK_TOKEN)

let main = async () => {
  let users: any = {}

  if (typeof process.env.SAAR_SLACK_CHANNEL === 'undefined') {
    console.log('No channel given')
    return
  }

  try {
    users = await web.apiCall('conversations.members', { channel: process.env.SAAR_SLACK_CHANNEL })
  } catch (err) {
    console.log(err)
  }

  await map(users.members, async (user: any, cb: Function) => {
    try {
      let res: any = await web.apiCall('users.info', { user: user })
      cb(null, res)
    } catch (err) {
      cb(err)
    }
  }, (err: Error, results: any) => {
    if (err) {
      console.log(err)
      return
    }

    fs.writeFileSync('./users.json', JSON.stringify(results))
  })
}

main()
