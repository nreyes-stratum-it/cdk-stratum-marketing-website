import * as cdk from 'aws-cdk-lib';
import {StratumMarketingWebsiteStack} from '../lib/stratum-marketing-website-stack';


const app = new cdk.App();

// 1. Desplegamos primero la infraestructura base (S3, CloudFront, Route53)
const websiteStack = new StratumMarketingWebsiteStack(app, 'StratumMarketingWebsiteStack', {
    // props de la stack, si los necesitas
});
