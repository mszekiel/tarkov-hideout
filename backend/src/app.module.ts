import { Module } from '@nestjs/common';
import { HideoutController } from './controllers/hideout.controller';
import { ItemProvider } from './providers/item.provider';
import { HideoutService } from './services/hideout.service';

@Module({
  imports: [],
  controllers: [HideoutController],
  providers: [ItemProvider, HideoutService],
})
export class AppModule {}
