import express from "express";
import {
  getRestaurant,
  getRestaurantList,
  insertRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "./mock-db";

const restApiServer = express();
restApiServer.use(express.json());

restApiServer.get("/", (req, res) => {
  res.send("My awesome restaurant menu portal");
});

restApiServer.get("/api/restaurants", async (req, res) => {
  const restaurantList = await getRestaurantList();
  res.send(restaurantList);
});

restApiServer.get("/api/restaurants/:id", async (req, res) => {
  const { id } = req.params;
  const restaurant = await getRestaurant(id);
  res.send(restaurant);
});

restApiServer.post("/api/restaurants", async (req, res) => {
  const restaurant = req.body;
  const newRestaurant = await insertRestaurant(restaurant);
  res.status(201).send(newRestaurant);
});

restApiServer.put("/api/restaurants/:id", async (req, res) => {
  const { id } = req.params;
  const restaurant = req.body;
  await updateRestaurant(id, restaurant);
  res.sendStatus(204);
});

restApiServer.delete("/api/restaurants/:id", async (req, res) => {
  const { id } = req.params;
  await deleteRestaurant(id);
  res.sendStatus(204);
});

restApiServer.listen(3000, () => {
  console.log("Server ready at port 3000");
});
