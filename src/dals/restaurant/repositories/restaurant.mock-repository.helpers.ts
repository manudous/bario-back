import { Restaurant } from '../restaurant.model';
import { db } from '../../mock-data';

// TODO Test to this function
export const paginateRestaurantList = (
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

export const insertRestaurant = async (restaurant) => {
  const id = String(db.restaurants.length + 1);
  const newRestaurant = {
    ...restaurant,
    id,
  };

  db.restaurants = [...db.restaurants, newRestaurant];
  return newRestaurant;
};

export const updateRestaurant = async (updateRestaurant: Restaurant) => {
  db.restaurants = db.restaurants.map((restaurant) =>
    restaurant.id === updateRestaurant.id
      ? { ...restaurant, ...updateRestaurant }
      : restaurant
  );
  return updateRestaurant;
};