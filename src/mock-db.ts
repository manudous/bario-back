// // TODO Test to this function
// const paginateRestaurantList = (
//   restaurantList,
//   page: number,
//   pageSize: number
// ) => {
//   if (Array.isArray(restaurantList)) {
//     if (page && pageSize) {
//       let paginatedRestaurant = [...restaurantList];
//       const startIndex = (page - 1) * pageSize;
//       const endIndex = Math.min(
//         startIndex + pageSize,
//         paginatedRestaurant.length
//       );
//       paginatedRestaurant = paginatedRestaurant.slice(startIndex, endIndex);

//       return paginatedRestaurant;
//     } else return restaurantList;
//   } else return [];
// };

// export const getRestaurantList = async (page, pageSize) =>
//   paginateRestaurantList(mockRestaurantList, page, pageSize);
// export const getRestaurant = async (id) => {
//   return mockRestaurantList.find((restaurant) => restaurant.id === id);
// };

// export const insertRestaurant = async (restaurant) => {
//   const id = String(mockRestaurantList.length + 1);
//   const newRestaurant = {
//     ...restaurant,
//     id,
//   };

//   mockRestaurantList = [...mockRestaurantList, newRestaurant];
//   return newRestaurant;
// };

// export const updateRestaurant = async (id, updatedRestaurant) => {
//   mockRestaurantList = mockRestaurantList.map((restaurant) =>
//     restaurant.id === id
//       ? {
//           ...restaurant,
//           ...updatedRestaurant,
//           id,
//         }
//       : restaurant
//   );
// };

// export const deleteRestaurant = async (id) => {
//   mockRestaurantList = mockRestaurantList.filter(
//     (restaurant) => restaurant.id !== id
//   );
//   return true;
// };
