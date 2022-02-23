import { Restaurant } from '../restaurant.model';

export interface RestaurantRepository {
  getRestaurantList: (
    page: number,
    pageSize: number
  ) => Promise<Restaurant[]>;
  getRestaurant: (id: string) => Promise<Restaurant>;
  saveRestaurant: (restaurant: Restaurant) => Promise<Restaurant>;
  deleteRestaurant: (id: string) => Promise<boolean>;
}
