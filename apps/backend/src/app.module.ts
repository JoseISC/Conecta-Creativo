import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import { CreatorsModule } from './modules/creators/creators.module';
import { MarketplaceModule } from './modules/marketplace/marketplace.module';
import { QrModule } from './modules/qr/qr.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    HealthModule,
    CreatorsModule,
    MarketplaceModule,
    QrModule,
  ],
})
export class AppModule {}
