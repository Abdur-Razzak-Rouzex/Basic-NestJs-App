import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ItemModel } from './models/item.model';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(ItemModel) private itemModel: typeof ItemModel) {}

  getAllItems(): Promise<ItemModel[]> {
    return this.itemModel.findAll();
  }

  createItem(createItemDto: CreateItemDto): Promise<ItemModel> {
    return this.itemModel.create<ItemModel>(createItemDto);
  }

  findOne(id: number): any {
    return this.itemModel.findOne({ where: { id } });
  }

  async updateItem(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemModel.findOne({ where: { id } });
    await item.update(updateItemDto);
    return item;
  }

  async deleteItem(id: number): Promise<string> {
    const item = await this.itemModel.findOne({ where: { id } });
    await item.destroy();
    return 'Item deleted Successfully';
  }
}
