import { Body, Controller, Get, Post } from '@nestjs/common'
import { createTransport } from 'nodemailer'
import { SendMailDto } from './app.dto'
import { from } from 'rxjs'
import { mapTo } from 'rxjs/operators'
import { GMAIL_USER, GMAIL_PASS } from './main.constants'

@Controller(`mailto`)
export class AppController {
  @Post()
  sendMail(@Body() { subject, text, to }: SendMailDto) {
    return from(
      createTransport({
        service: 'gmail',
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS
        }
      }).
        sendMail({
          to, subject, text,
          from: GMAIL_USER
        })
    ).pipe(
      mapTo(<const>true)
    )
  }
}
