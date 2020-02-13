import { Module } from '@nestjs/common';
import { HideoutController } from './controllers/hideout.controller';
import { HideoutProvider } from './providers/item.provider';
import { HideoutService } from './services/hideout.service';

@Module({
  imports: [],
  controllers: [HideoutController],
  providers: [HideoutProvider, HideoutService],
})
export class AppModule {}
