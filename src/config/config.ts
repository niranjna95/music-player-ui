import Constants from 'expo-constants';

const ENV = {
  dev: {
    //API_URL: 'http://192.168.29.36:82',
    API_URL: 'http://demoapi.somee.com',
    CLIENT_ID: 'D95BF9406E39035D87D9EAF4AEA05017EF02ACD1629D52220CAFDD54422A6A35',
  },
  staging: {
    //API_URL: 'http://192.168.29.36:82',
    API_URL: 'http://demoapi.somee.com',
    CLIENT_ID: 'D95BF9406E39035D87D9EAF4AEA05017EF02ACD1629D52220CAFDD54422A6A35',
  },
  prod: {
   // API_URL: 'http://192.168.29.36:82',
    API_URL: 'http://demoapi.somee.com',
    CLIENT_ID: 'D95BF9406E39035D87D9EAF4AEA05017EF02ACD1629D52220CAFDD54422A6A35',
  },
};

const getEnvVars = () => {
  const manifest = Constants.manifest as any;
  const releaseChannel = manifest?.releaseChannel;

  if (__DEV__) {
    return ENV.dev; // Return development environment variables
  }
  if (releaseChannel === 'staging') {
    return ENV.staging; // Return staging environment variables
  }
  return ENV.prod; // Return production environment variables
};

export default getEnvVars;
