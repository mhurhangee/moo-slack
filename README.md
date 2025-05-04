# slack-edge-test

Basic [slack-edge](https://github.com/slack-edge/slack-edge) slack app that is deployable to Vercel.

## Quick Setup

- Git clone this repo
- Set up a slack app and get the signing secret and bot token from the [slack app configuration](https://api.slack.com/apps) using HTTP mode
- Add .env file with the following variables:
    - SLACK_SIGNING_SECRET
    - SLACK_BOT_TOKEN
- Run `pnpm install`
- Run `vercel deploy`
- Add slash command `/hello` with https://<your-vercel-url>/api/slack to your slack app
- Install your slack app to a workspace
- Test it out by typing `/hello` in a channel
