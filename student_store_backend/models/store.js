const db = require("../db")

class Store{
    static async listProducts(){
        const query = `SELECT * FROM products`

        const result = await db.query(query)

        const products = result

        return products
    }
}

module.exports = Store
