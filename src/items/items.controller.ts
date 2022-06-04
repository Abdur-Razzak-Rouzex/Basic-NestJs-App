import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  getAllItems(): any {
    return this.itemService.getAllItems();
  }

  @Post()
  createItems(@Body() createItemDto: CreateItemDto): any {
    return this.itemService.createItem(createItemDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.itemService.findOne(id);
  }

  @Put(':id')
  updateItem(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ): any {
    return this.itemService.updateItem(id, updateItemDto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string): any {
    return this.itemService.deleteItem(id);
  }
}
