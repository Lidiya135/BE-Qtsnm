const ModelBarang = require("../models/penjualanBarang");

const { response } = require("../middleware/common");

const BarangController = {
    select: (req, res, next) => {
        ModelBarang.selectBarang()
            .then((result) => response(res, 200, true, result.rows, "get data success"))
            .catch((err) => response(res, 404, false, err, "get data fail"))
    },

    delete: (req, res, next) => {
        ModelBarang.deleteBarang(req.params.id)
            .then((result) => response(res, 200, true, result.rows, "delete data success"))
            .catch((err) => response(res, 404, false, err, "delete data fail"))
    },

    insert: (req, res, next) => {
        // console.log(req.body)
        ModelBarang.insertBarang(req.body)
            .then((result) => response(res, 200, true, result.rows, "input data success"))
            .catch((err) => response(res, 404, false, err, "input data fail"))
    },

    update: (req, res, next) => {
        ModelBarang.updateBarang(req.params.id, req.body)
            .then((result) => response(res, 200, true, result.rows, "update data success"))
            .catch((err) => response(res, 404, false, err, "update data fail"))
    },

    selectId: (req, res, next) => {
        ModelBarang.selectBarangById(req.params.id)
            .then((result) => response(res, 200, true, result.rows, "get data by id success"))
            .catch((err) => response(res, 404, false, err, "get data by id fail"))
    },
};

exports.BarangController = BarangController;