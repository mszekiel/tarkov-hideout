import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { setup } from 'axios-cache-adapter';
import { Item, ItemInterface } from 'src/types/Item';

@Injectable()
export class HideoutProvider {
  api = setup({
    cache: {
      maxAge: 15 * 60 * 1000,
      exclude: { query: false },
    },
  });

  async fetch(name: string) {
    return this.api
      .request<ItemInterface[]>({
        url: `${process.env.API_URL}/item?q=${encodeURIComponent(name)}`,
        headers: {
          'x-api-key': process.env.API_KEY,
        },
      })
      .then(response =>
        new Item(name.replace('"', "'")).setData(response.data[0] || {}),
      );
  }
}
