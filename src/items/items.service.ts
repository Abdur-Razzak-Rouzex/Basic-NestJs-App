import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ItemModel } from './models/item.model';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(ItemModel) private itemModel: typeof ItemModel) {}

  getAllItems(): any {
    return 'These are all of the items';
  }

  async createItem(createItemDto: CreateItemDto): Promise<ItemModel> {
    return this.itemModel.create<ItemModel>(createItemDto);
  }

  findOne(id: string): any {
    return `the found item is: ${id}`;
  }

  updateItem(id: string, body: UpdateItemDto): any {
    return `the updated item: ${id}, ${body}`;
  }

  deleteItem(id: string): any {
    return `${id} is deleted`;
  }
}
