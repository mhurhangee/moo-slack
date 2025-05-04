// api/slack.ts
import { SlackApp } from 'slack-edge'

export const config = {
  runtime: 'edge'
}

const app = new SlackApp({
  env: {
    SLACK_SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET!,
    SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN!,
    SLACK_LOGGING_LEVEL: 'DEBUG'
  }
})

app.command('/moo-hello', async (req) => {
  return '🐮 Mooooooo from MooAI!'
})

export default async function handler(req: Request): Promise<Response> {
  return await app.run(req)
}
