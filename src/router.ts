import { Router  } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

/**
 * @swagger 
 * components:
 *      schemas:
 *          product:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: the Product ID
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description: the Product name
 *                      example: Celular Barato
 *                  price:
 *                      type: number
 *                      description: the Product price
 *                      example: 99.99
 *                  availability:
 *                      type: boolean
 *                      description: the Product availability
 *                      example: true
 */

/**
 * @swagger
 * /api/products:
 *      get:    
 *          summary: Get a list of products
 *          tags:
 *              - Products
 *          description: Return a list of Products
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/product'
 */

const router = Router()

router.get('/', getProducts)

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get a Product by ID
 *      tags:
 *          - Products
 *      description: Return a product based on its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:    
 *              description: Successful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/product'
 *          400:    
 *              description: Not Found
 *          404:
 *              description: Bad Resquest - Invalid ID
 *                  
*/

router.get('/:id',
    param('id').isInt().withMessage('ID No Valido'),
    handleInputErrors,
    getProductById
)

/**
 * @swagger
 * /api/products:
 *  post:
 *      summary: Create a new product
 *      tags:
 *          - Products
 *      description: Returns a new record in the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Monitor Curvo 49 Pulgadas"
 *                          price:
 *                              type: number
 *                              example: 599.99
 *      responses:
 *          201:
 *              description: Successful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/product'
 *          400:
 *              description: Bad Request - invalid input data
 */

router.post('/',
    //Valicaion 
    body('name')
        .notEmpty()
        .withMessage('No se Aceptan Datos Valicio, Productos'),
    body('price')
        .isNumeric().withMessage('Solo Numero, Pecio')
        .notEmpty().withMessage('No se Aceptan Datos Vacios, Precio')
        .custom(value => value > 0).withMessage('No valido, Precio'),
    handleInputErrors,
    createProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Update a product with user input
 *      tags:
 *          - Products
 *      description: Returns The update product
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Monitor Curvo 49 Pulgadas"
 *                          price:
 *                              type: number
 *                              example: 599.99
 *                          availability:
 *                              type: boolean
 *                              example: false
 *      responses:
 *          200:
 *              description: Successful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/product'
 *          400:
 *              description: Bad Request - Invalid ID or Invalid input data
 *          404:
 *              description: Product Not Found
 */

router.put('/:id',
    //Valicaion 
    param('id').isInt().withMessage('ID No Valido'),
    body('name')
        .notEmpty()
        .withMessage('No se Aceptan Datos Valicio, Productos'),
    body('price')
        .isNumeric().withMessage('Solo Numero, Pecio')
        .notEmpty().withMessage('No se Aceptan Datos Vacios, Precio')
        .custom(value => value > 0).withMessage('No valido, Precio'),
    body('availability')
        .isBoolean().withMessage('Valor de Disponibilidad no Valido'),
    handleInputErrors,
    updateProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *      summary: Update Product Availability
 *      tags:
 *          - Products
 *      description: Returns the update availability
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer     
 *      responses:
 *          200:
 *              description: Successful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/product'
 *          400:
 *              description: Bad Request - Invalid ID
 *          404:
 *              description: Product Not Found
 */

router.patch('/:id', 
    param('id').isInt().withMessage('ID No Valido'),
    handleInputErrors,
    updateAvailability
)

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      summary: Deletes a product by a given ID
 *      tags:
 *          - Products
 *      description: Returns a confirmation message
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to delete
 *          required: true
 *          schema:
 *              type: integer     
 *      responses:
 *          200:
 *              description: Successful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          value: "producto Eliminado"
 *          400:
 *              description: Bad Request - Invalid ID
 *          404:
 *              description: Product Not Found
 */

router.delete('/:id', 
    param('id').isInt().withMessage('ID No Valido'),
    handleInputErrors,
    deleteProduct
)

export default router