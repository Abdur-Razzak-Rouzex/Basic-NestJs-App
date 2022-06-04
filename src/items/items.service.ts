import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  getAllItems(): any {
    return 'These are all of the items';
  }

  createItem(body: CreateItemDto): any {
    return `Item created from the service ${body}`;
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
