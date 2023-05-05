const express = require("express");
const router = express.Router();
const { BarangController } = require("../controllers/penjualanBarang");

router.get('/',BarangController.select);
router.delete('/:id',BarangController.delete);
router.post('/',BarangController.insert);
router.put('/:id',BarangController.update);
router.get('/:id',BarangController.selectId);

module.exports = router;