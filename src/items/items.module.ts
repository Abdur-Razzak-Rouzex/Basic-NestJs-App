import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemModel } from './models/item.model';

@Module({
  imports: [SequelizeModule.forFeature([ItemModel])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
