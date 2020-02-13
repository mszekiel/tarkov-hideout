import { Module } from '@nestjs/common';
import { HideoutController } from './controllers/hideout.controller';
import { ItemProvider } from './providers/ItemProvider';
import { ItemService } from './services/ItemService';

@Module({
  imports: [],
  controllers: [HideoutController],
  providers: [ItemProvider, ItemService],
})
export class AppModule {}
