import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '1234',
      name: 'Item Two',
      qty: 200,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
