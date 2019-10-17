import { IsNotEmpty, IsEmail, IsOptional, IsString } from 'class-validator'

export class SendMailDto {

  @IsEmail()
  to: string

  @IsNotEmpty()
  @IsString()
  subject: string

  @IsString()
  @IsOptional()
  text: string

}