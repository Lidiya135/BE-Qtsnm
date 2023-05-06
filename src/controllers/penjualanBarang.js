const ModelBarang = require("../models/penjualanBarang");
const { response } = require("../middleware/common");

const BarangController = {
    select: (req, res, next) => {
    const search = req.query.search || "";
    // const sortby = req.query.sortby || "nama_barang";
    // const sort = req.query.sort || "ASC";
        ModelBarang.selectBarang(search)
            .then((result) => response(res, 200, true, result.rows, "get data success"))
            .catch((err) => response(res, 404, false, err, "get data fail"))
    },

    // selectt: (req, res, next) => {
    //     const search = req.query.search || "";
    //     const sortby = req.query.sortby || "";
    //     const sort = req.query.sort || "";
    //         ModelBarang.selectBarang(search, sortby, sort)
    //             .then((result) => response(res, 200, true, result.rows, "get data success"))
    //             .catch((err) => response(res, 404, false, err, "get data fail"))
    //     },

    selectt: (req, res, next) => {
        
        const search = req.query.search || "";
        const sort = req.query.sort || "asc";
        const sortby = req.query.sortby || "nama_barang";

        ModelBarang.selectBarang(search, sortby, sort)
          .then((result) =>
            response(res, 200, true, result.rows, "Get product success")
          )
          .catch((err) => response(res, 404, false, err, "Get product failed"));
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

    selectType: (req, res, next) => {
        console.log(req.params.jenis_barang)
        ModelBarang.selectBarangByType(req.params.jenis_barang)
            .then((result) => response(res, 200, true, result.rows, "get data by type success"))
            .catch((err) => response(res, 404, false, err, "get data by type fail"))
    },
   
};



exports.BarangController = BarangController;