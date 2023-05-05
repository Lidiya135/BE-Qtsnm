-- Active: 1678680489796@@149.129.241.190@5432@lidiya03@public

CREATE TABLE barang (
    id SERIAL PRIMARY KEY,
    nama_barang VARCHAR,
    stok INT,
    jumlah_terjual INT,
    tanggal_transaksi DATE,
    jenis_barang VARCHAR
);

SELECT * FROM barang;

INSERT INTO barang (id, nama_barang, stok, jumlah_terjual, tanggal_transaksi, jenis_barang) VALUES (1, 'kopi', 100, 10, '1-05-2021', 'konsumsi');

UPDATE barang SET nama_barang='Kopi', stok=99, jumlah_terjual=101, tanggal_transaksi='2021-03-11', jenis_barang='Konsumsi' WHERE id='1';

DELETE FROM barang WHERE id='2';