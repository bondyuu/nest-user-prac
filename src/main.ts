import { NestFactory } from '@nestjs/core';
import passport from 'passport';
import { AppModule } from './app.module';
import session from 'express-session';
import cookieParser from 'cookie-parser'
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.use(cookieParser());
  app.use(
    session({
      resave:false,
      saveUninitialized:false,
      secret: 'SECRET',
      cookie:{
        httpOnly:true,
      }
    })
  );
  app.use(passport.initialize())
  app.use(passport.session());
}
bootstrap();
