import { Module } from '@nestjs/common';
import { HideoutController } from './controllers/hideout.controller';
import { HideoutProvider } from './providers/item.provider';
import { HideoutService } from './services/hideout.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'application', 'dist'),
    }),
  ],
  controllers: [HideoutController],
  providers: [HideoutProvider, HideoutService],
})
export class AppModule {}
