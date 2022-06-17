import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ItemModel } from './models/item.model';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(ItemModel) private itemModel: typeof ItemModel) {}

  async getAllItems() {
    try {
      return await this.itemModel.findAll();
    } catch (error) {
      console.log('error in item service');
      throw new Error(error);
    }
  }

  async createItem(createItemDto: CreateItemDto) {
    try {
      return await this.itemModel.create<ItemModel>(createItemDto);
    } catch (error) {
      console.log('error in item service');
      throw new Error(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.itemModel.findOne({ where: { id } });
    } catch (error) {
      console.log('error in item service');
      throw new Error(error);
    }
  }

  async updateItem(id: number, updateItemDto: UpdateItemDto) {
    try {
      const item = await this.itemModel.findOne({ where: { id } });
      await item.update(updateItemDto);
      return item;
    } catch (error) {
      console.log('error in item service');
      throw new Error(error);
    }
  }

  async deleteItem(id: number): Promise<string> {
    try {
      const item = await this.itemModel.findOne({ where: { id } });
      await item.destroy();
      return 'Item deleted Successfully';
    } catch (error) {
      console.log('error in item service');
      throw new Error(error);
    }
  }
}
