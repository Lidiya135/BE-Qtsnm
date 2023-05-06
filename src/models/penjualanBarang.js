const Pool = require("../config/db");

const selectBarangg = (search, sortby, sort) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `SELECT * FROM product where (nama_barang) ilike '%${search}%' order by ${sortby} ${sort}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const selectBarang = (search) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM barang WHERE nama_barang ILIKE '%${search}%'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const deleteBarang = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`DELETE FROM barang WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  )
};

const insertBarang = (data) => {
  const { nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang
  } = data;
  return Pool.query(`INSERT INTO barang ( nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang) VALUES 
  ( '${nama_barang}', ${stok}, ${jumlah_terjual}, '${tanggal_transaksi}', '${jenis_barang}')`)
};

const updateBarang = (id, data) => {
  const {nama_barang,stok,jumlah_terjual,tanggal_transaksi,jenis_barang
  } = data;
  // console.log(data, "model")
  return Pool.query(`UPDATE barang SET nama_barang='${nama_barang}', stok=${stok}, jumlah_terjual=${jumlah_terjual}, tanggal_transaksi='${tanggal_transaksi}', jenis_barang='${jenis_barang}' WHERE id='${id}'`)
};

const selectBarangById = (id) => {
  return Pool.query(`Select * from barang where id='${id}'`)
};

const selectBarangByType = (jenis_barang) => {
  return Pool.query(`Select * from barang where jenis_barang='${jenis_barang}'`)
};



module.exports = { 
  selectBarang, 
  selectBarangg, 
  deleteBarang, 
  insertBarang, 
  updateBarang, 
  selectBarangById,
  selectBarangByType
};
