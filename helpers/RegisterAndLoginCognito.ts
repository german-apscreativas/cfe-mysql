//Funcion para realizar registro y login
import { CognitoIdentityServiceProvider } from 'aws-sdk';

const config = {
    region: 'us-east-1'
}
const CognitoIdentity = new CognitoIdentityServiceProvider(config);


