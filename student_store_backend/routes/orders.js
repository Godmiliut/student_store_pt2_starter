const express = require("express")
const { restart } = require("nodemon")
const Order = require("../models/order")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const orders = await Order.listOrdersForUser()
        res.status(200).json({ orders })
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const newOrder = await Order.createOrder(req.body)
        res.status(200).json({})
    } catch (err) {
        next(err)
    }
})

module.exports = router;
