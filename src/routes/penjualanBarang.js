const express = require("express");
const router = express.Router();
const { BarangController } = require("../controllers/penjualanBarang");

router.get('/',BarangController.select);
router.get('/get',BarangController.selectt);
router.delete('/:id',BarangController.delete);
router.post('/',BarangController.insert);
router.put('/:id',BarangController.update);
router.get('/:id',BarangController.selectId);
router.get('/:jenis_barang',BarangController.selectType);

module.exports = router;