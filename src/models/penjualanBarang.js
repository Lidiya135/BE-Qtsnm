const Pool = require("../config/db");

const selectBarang = () => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM barang`, (err, result) => {
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

module.exports = { selectBarang, deleteBarang, insertBarang, updateBarang, selectBarangById };
