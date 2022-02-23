import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from '../restaurant.model';

export const dbRepository: RestaurantRepository = {
  getRestaurantList: async () => {
    throw new Error('Not implemented');
  },
  getRestaurant: async (id: string) => {
    throw new Error('Not implemented');
  },
  saveRestaurant: async (book: Restaurant) => {
    throw new Error('Not implemented');
  },
  deleteRestaurant: async (id: string) => {
    throw new Error('Not implemented');
  },
};
