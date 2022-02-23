import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from '../restaurant.model';
import { db } from '../../mock-data';

// TODO Test to this function
const paginateRestaurantList = (
  restaurantList: Restaurant[],
  page: number,
  pageSize: number
) => {
  if (Array.isArray(restaurantList)) {
    if (page && pageSize) {
      let paginatedRestaurant = [...restaurantList];
      const startIndex = (page - 1) * pageSize;
      const endIndex = Math.min(
        startIndex + pageSize,
        paginatedRestaurant.length
      );
      paginatedRestaurant = paginatedRestaurant.slice(startIndex, endIndex);

      return paginatedRestaurant;
    } else return restaurantList;
  } else return [];
};

const insertRestaurant = async (restaurant) => {
  const id = String(db.restaurants.length + 1);
  const newRestaurant = {
    ...restaurant,
    id,
  };

  db.restaurants = [...db.restaurants, newRestaurant];
  return newRestaurant;
};

const updateRestaurant = async (updateRestaurant: Restaurant) => {
  db.restaurants = db.restaurants.map((restaurant) =>
    restaurant.id === updateRestaurant.id
      ? { ...restaurant, ...updateRestaurant }
      : restaurant
  );
  return db.restaurants;
};

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
