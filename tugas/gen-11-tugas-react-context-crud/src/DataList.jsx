import { useContext } from "react";
import { DataContext } from "./DataForm";

function DataList() {
  const { data } = useContext(DataContext);

  return (
    <>
      <h1>ISI DATA BIASA</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Alamat</th>
            <th>laporan</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataorang) => (
            <tr key={dataorang.id}>
              <td>{dataorang.nama}</td>
              <td>{dataorang.umur}</td>
              <td>{dataorang.alamat}</td>
              <td>{dataorang.laporan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DataList;