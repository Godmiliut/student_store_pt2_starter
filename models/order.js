const db = require("../db")
const { post } = require("../routes/auth")
const { BadRequestError, NotFoundError } =require("../utils/errors")

class Order{
    static async listOrdersForUser(){
        
    }
    static async createOrder({user, order}){
        const requiredFields = ["customer_id"]
        requiredFields.forEach(field => {
            if(!order.hasOwnProperty(field)) {
                throw new BadRequestError(`Required field - ${field} - missing from request body.`)
            }
        })
        const results = await db.query(
            `
            INSERT INTO orders (customer_id)
            VALUES ((SELECT id FROM users WHERE email = $1))
            RETURNING id AS orderId,
                      customer_id
                      created_at
            `, [customer_id]
        )
    }
}

module.exports = Order
