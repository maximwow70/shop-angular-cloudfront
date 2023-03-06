import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://ho7zrlcv88.execute-api.us-east-1.amazonaws.com/dev',
    order: 'https://ho7zrlcv88.execute-api.us-east-1.amazonaws.com/dev',
    import: 'https://ho7zrlcv88.execute-api.us-east-1.amazonaws.com/dev',
    bff: 'https://ho7zrlcv88.execute-api.us-east-1.amazonaws.com/dev',
    cart: 'https://ho7zrlcv88.execute-api.us-east-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: false,
    bff: true,
    cart: false,
  },
};
