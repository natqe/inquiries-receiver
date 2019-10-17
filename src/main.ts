import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PORT } from './main.constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.
    useGlobalPipes(new ValidationPipe()).
    enableCors({
      credentials: true,
      origin: true
    })
  await app.listen(PORT || 3000)
}
bootstrap()
