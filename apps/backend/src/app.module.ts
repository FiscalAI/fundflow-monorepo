import { Module, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Redis from 'ioredis';
import { JwtStrategy } from './auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { BusinessPlanGeneratorController } from './businessPlanGenerator/businessPlanGenerator.controller';
import { BusinessPlanGeneratorService } from './businessPlanGenerator/businessPlanGenerator.service';

@Module({
  imports: [
    PrismaModule,
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register({
    //   global: true,
    //   secret: process.env.JWT_SECRET,
    //   signOptions: { expiresIn: process.env.EXPIRES_IN },
    // }),
  ],
  controllers: [AppController, AuthController, BusinessPlanGeneratorController],
  providers: [
    AuthService,
    AppService,
    {
      provide: 'REDIS',
      useFactory: () => {
        const client = new Redis(process.env.REDDIS_URL);
        client.on('error', (err) => console.error('Redis error', err));
        return client;
      },
      scope: Scope.DEFAULT,
    },
    BusinessPlanGeneratorService,
    // JwtStrategy,
  ],
})
export class AppModule {}
