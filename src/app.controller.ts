import { Body, Controller, Post, ServiceUnavailableException, Logger } from '@nestjs/common'
import { createTransport } from 'nodemailer'
import { SendMailDto } from './app.dto'
import { GMAIL_USER, GMAIL_PASS } from './main.constants'

@Controller(`mailto`)
export class AppController {
  @Post()
  async sendMail(@Body() { subject, text, to }: SendMailDto) {
    Logger.log({
      service: 'gmail',
      secure: false,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    })
    Logger.log({
      to, subject, text,
      from: GMAIL_USER
    })
    try {
      await createTransport({
        service: 'gmail',
        secure: false,
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS
        }
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
