import {DEV_BACKEND_URL, PROD_BACKEND_URL} from 'react-native-dotenv';

const devEnvironmentVariable = {
    DEV_BACKEND_URL,
}

const prodEnvironmentVariable = {
    PROD_BACKEND_URL,
}

export default __DEV__ ? devEnvironmentVariable : prodEnvironmentVariable;
