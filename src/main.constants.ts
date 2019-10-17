import 'dotenv/config'

export const
  { PORT, NODE_ENV, GMAIL_USER, GMAIL_PASS, SEND_MAIL_TO } = process.env,
  PRODUCTION = NODE_ENV === `production`