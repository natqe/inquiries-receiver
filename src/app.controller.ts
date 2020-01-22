import { Body, Controller, Post, ServiceUnavailableException, Logger } from '@nestjs/common'
import { createTransport } from 'nodemailer'
import { SendMailDto } from './app.dto'
import { GMAIL_USER, GMAIL_PASS } from './main.constants'

@Controller(`mailto`)
export class AppController {
  @Post()
  async sendMail(@Body() { subject, text, to }: SendMailDto) {
    try {
      await createTransport({
        service: 'gmail',
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS
        },
      }).sendMail({
        to, subject, text,
        from: GMAIL_USER
      })
      return true
    }
    catch {
      throw new ServiceUnavailableException
    }
  }
}
