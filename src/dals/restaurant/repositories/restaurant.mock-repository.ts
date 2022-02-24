import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from '../restaurant.model';
import { db } from '../../mock-data';
import {
  insertRestaurant,
  paginateRestaurantList,
  updateRestaurant,
} from './restaurant.mock-repository.helpers';

export const mockRepository: RestaurantRepository = {
  getRestaurantList: async (page: number, pageSize: number) =>
    paginateRestaurantList(db.restaurants, page, pageSize),
  getRestaurant: async (id: string) =>
    db.restaurants.find((restaurant) => restaurant.id === id),
  saveRestaurant: async (restaurant: Restaurant) =>
    Boolean(restaurant.id)
      ? updateRestaurant(restaurant)
      : insertRestaurant(restaurant),
  deleteRestaurant: async (id: string) => {
    db.restaurants = db.restaurants.filter(
      (restaurant) => restaurant.id !== id
    );
    return true;
  },
};
