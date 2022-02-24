import path from 'path';
import { createRestApiServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { restaurantApi } from './pods/restaurant';

const restApiServer = createRestApiServer();

// TODO: Feed env variable in production
const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);

restApiServer.use(async (req, res, next) => {
  console.log(req.url);
  next();
});

restApiServer.use('/api/restaurant', restaurantApi);

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port ${envConstants.PORT}`);
});
