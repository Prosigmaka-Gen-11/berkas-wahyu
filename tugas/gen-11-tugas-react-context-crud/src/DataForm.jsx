import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

function DataProvider(props) {
  const laporanList = [
    { value: "Sudah", label: "Sudah" },
    { value: "Belum", label: "Belum" },
    { value: "Proses", label: "Proses" },
  ];

  const inputData = {
    nama: "",
    umur: "",
    alamat: "",
    laporan: ""
  };

  const [data, setData] = useState([]);
  const [formInput, setFormInput] = useState({ ...inputData });

  //fungsi buat manggil API
  async function getData() {
    const orang = await axios.get("http://localhost:3000/data");
    setData(orang.data);
  }

  //fungsi handle input form
  function handleForm(evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value });
  }

  //fungsi handle submit
  async function handleSubmit(evt) {
    evt.preventDefault();
    await axios.post("http://localhost:3000/data", formInput);
    getData();
    setFormInput({ ...inputData });
  }

  //render
  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      <h1>Data Biasa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama : <br />
          <input
            type="text"
            value={formInput.nama}
            onChange={(evt) => handleForm(evt, "nama")}
          />
        </label>
        <br /> <br />
        <label>
          Umur: <br />
          <input
            type="number"
            value={formInput.umur}
            onChange={(evt) => handleForm(evt, "umur")}
          />
        </label>
        <br /> <br />
        <label>
          Alamat <br />
          <select
            value={formInput.alamat}
            onChange={(evt) => handleForm(evt, "alamat")}
          >
            <option value="">-Pilih Alamat-</option>
            <option value="palembang">Palembang</option>
            <option value="jakarta">Jakarta</option>
            <option value="bandung">Bandung</option>
          </select>
        </label>
        <br /> <br />
        <label>
          Laporan: <br />
          {laporanList.map((laporanItem) => (
            <label key={laporanItem.value}>
              <br />
              <input
                type="radio"
                name="laporan"
                value={laporanItem.value}
                checked={formInput.laporan === laporanItem.value}
                onChange={(evt) => handleForm(evt, "laporan")}
              />
              {laporanItem.label}
            </label>
          ))}
        </label>
        <br /> <br />
        <button>Submit</button>
      </form>
      <br />
      <hr />
      {/* nampilin data list */}
      {props.children}
      </DataContext.Provider>
  );
}
export default DataProvider;