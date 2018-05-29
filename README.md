# slack-auto-add-reaction

Add a reaction for a precise message on slack

## Requirements

* [`node`](https://nodejs.org/en/)

```
$ npm i
```

## How to

First you must set some env variable

```json5
$ export SAAR_API_TOKEN=<token> // Slack token for web api
$ export SAAR_API_DOMAIN=<domain> // Slack domain
$ export SAAR_SLACK_CHANNEL=<channel id> // Channel id
$ export SAAR_SLACK_AIM_USER=<user id> // User id of aimed people
$ export SAAR_SLACK_CURRENT_USER=<user id> // User id of people who react
$ export SAAR_SLACK_REACTION_NAME=<name reaction> // Name of the reaction
```

You can start it with:

```
$ npm run start
```

If you want to develop this tool you can use:

```
$ npm run dev
```

## Docker image

You can use docker image build with this [Dockerfile](/Dockerfile)

Or you can use the docker-compose example [docker-compose.yml](docker-compose.yaml)

## License

[MIT](https://fr.wikipedia.org/wiki/Licence_MIT)
