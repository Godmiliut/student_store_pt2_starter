const express = require("express")
const Order = require("../models/order")
const security = require("../middleware/security")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const { user } = res.locals
        const orders = await Order.listOrdersForUser(user)
        res.status(200).json({ orders })
    } catch (err) {
        next(err)
    }
})

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try{
        const { user } = res.locals
        const newOrder = await Order.createOrder({ user, order: req.body})
        res.status(201).json({ order })
    } catch (err) {
        next(err)
    }
})

module.exports = router;
