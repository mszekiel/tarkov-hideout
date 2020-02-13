import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { setupCache } from 'axios-cache-adapter';
import { Item, ItemInterface } from 'src/types/Item';
import { response } from 'express';

const cache = setupCache({
  maxAge: 1000 * 60 * 30,
});

const api = axios.create({
  adapter: cache.adapter,
});

@Injectable()
export class HideoutProvider {
  async fetch(name: string) {
    return api
      .request<ItemInterface[]>({
        url: `${process.env.API_URL}/item?q=${encodeURIComponent(name)}`,
        headers: {
          'x-api-key': process.env.API_KEY,
        },
      })
      .then(response => new Item(name).setData(response.data[0] || {}));
  }
}
