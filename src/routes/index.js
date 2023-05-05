const express = require('express');
const router = express.Router();
const BarangRouter = require('../routes/penjualanBarang');

router.use("/barang",BarangRouter);

module.exports = router;