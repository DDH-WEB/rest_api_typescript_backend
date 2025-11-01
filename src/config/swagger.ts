import swaggerJSDoc from "swagger-jsdoc";
import Product from "../models/Product.model";
import type { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.4',
        tags:[
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info:{
            title: 'REST API node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for Products'
        }
    },
    apis:['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions = {
  customCss: `
    .topbar-wrapper {
      background-image: url('https://cdn.pixabay.com/photo/2024/05/21/19/58/code-8779051_1280.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;
      height: 40rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .topbar-wrapper::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    .topbar-wrapper .link svg{
       display: none;
    }

    .topbar-wrapper .link::after {
      content: 'Documentation REST API Express / TypeScript {👇}';
      position: relative;
      z-index: 2;
      color: #ffffff;
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
    }

    .swagger-ui {
      margin-top: 0px;
    }
  `,
  customSiteTitle: 'Documentation REST API Express / TypeScript'
};


export default swaggerSpec
export{
    swaggerUiOptions
}