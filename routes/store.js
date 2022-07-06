const express = require("express")
const { restart } = require("nodemon")
const Store = require("../models/store")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const products = await Store.listProducts()
        restart.status(200).json({ products })
    } catch (err) {
        next(err)
    }
})

module.exports = router;
