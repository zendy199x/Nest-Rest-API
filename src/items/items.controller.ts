import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Item {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}. Desc: ${createItemDto.description}`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemDto: CreateItemDto,
  ): string {
    return `Updated ${id}. Name: ${updateItemDto.name}. Desc: ${updateItemDto.description}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Removed ${id}`;
  }
}
