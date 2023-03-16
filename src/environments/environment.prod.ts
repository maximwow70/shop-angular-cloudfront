import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://6l3xpd8y54.execute-api.us-east-1.amazonaws.com/dev',
    order: 'https://6l3xpd8y54.execute-api.us-east-1.amazonaws.com/dev',
    import: 'https://8uapxy3fb3.execute-api.us-east-1.amazonaws.com/dev',
    bff: 'https://6l3xpd8y54.execute-api.us-east-1.amazonaws.com/dev',
    cart: 'https://6l3xpd8y54.execute-api.us-east-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
