import express from 'express';
import path from 'path';
import { createRestApiServer } from 'core/servers';
import { envConstants } from 'core/constants';
import {
  logRequestMiddleware,
  logErrorRequestMiddleware,
} from 'common/middlewares';
import { restaurantApi } from './pods/restaurant';

const restApiServer = createRestApiServer();

// TODO: Feed env variable in production
const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use('/', express.static(staticFilesPath));

restApiServer.use(logRequestMiddleware);

restApiServer.use('/api/restaurant', restaurantApi);

restApiServer.use(logErrorRequestMiddleware);
