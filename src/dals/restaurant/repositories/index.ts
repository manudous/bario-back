import { mockRepository } from './restaurant.mock-repository';
import { dbRepository } from './restaurant.db-repository';
import { envConstants } from "core/constants";

export const restaurantDbRepository = envConstants.isApiMock ? mockRepository : dbRepository;
