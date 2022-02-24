import { Router } from 'express';
import { restaurantDbRepository } from 'dals';
import {
  mapRestaurantFromApiModelToModel,
  mapRestaurantFromModelToApiModel,
  mapRestaurantListFromModelToApiModel,
} from './restaurant.mappers';

export const restaurantApi = Router();

restaurantApi
  // Use this endpoint to bring us all restaurants
  // http://localhost:3001/api/restaurant
  // if on the other hand you want to filter by number
  // and quantity of restaurants per page use:
  // http://localhost:3001/api/restaurant?page=1&pageSize=2
  // http://localhost:3001/api/restaurant?page=2&pageSize=1

  .get('/', async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const restaurantList = await restaurantDbRepository.getRestaurantList(
        page,
        pageSize
      );
      res.send(mapRestaurantListFromModelToApiModel(restaurantList));
    } catch (error) {
      next(error);
    }
  })

  // Use this endpoint to bring us an especific restaurant
  // http://localhost:3001/api/restaurant/5
  // where 5 is the restaurant id
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const restaurant = await restaurantDbRepository.getRestaurant(id);
      res.send(mapRestaurantFromModelToApiModel(restaurant));
    } catch (error) {
      next(error);
    }
  })
  // Use this endpoint to create a new restaurant
  // http://localhost:3001/api/restaurant/
  // and use a JSON as Restaurant Model
  .post('/', async (req, res, next) => {
    try {
      const restaurant = mapRestaurantFromApiModelToModel(req.body);
      const newRestaurant = await restaurantDbRepository.saveRestaurant(
        restaurant
      );
      res.status(201).send(newRestaurant);
    } catch (error) {
      next(error);
    }
  })
  // Use this endpoint to modify a restaurant
  // http://localhost:3001/api/restaurant/
  // and use a JSON as Restaurant Model
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const restaurant = req.body;
      await restaurantDbRepository.saveRestaurant({ ...restaurant, id });
      res.sendStatus(204).send('Restaurant modify');
    } catch (error) {
      next(error);
    }
  })
  // Use this endpoint to delete a restaurant
  // you must specify the restaurant id
  // http://localhost:3001/api/restaurant/<id Restaurant>
  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      await restaurantDbRepository.deleteRestaurant(id);
      res.sendStatus(204).send('Restaurant deleted');
    } catch (error) {
      next(error);
    }
  });
