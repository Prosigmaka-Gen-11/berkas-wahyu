import axios from "axios"
import { useState, useEffect } from "react"

const initialForm = {
  nama: '',
  tgl_lahir: '',
  jns_kelamin: '',
  agama: '',
  jmlh_saudara: '',
  detail: '',
  nofav: ''
}

export default function App () {
  const [biodata, setBiodata] = useState([])
  const [formInput, setFormInput] = useState({ ...initialForm })

  const isEditing = formInput.id

  async function getBiodata () {
    const result = await axios.get('http://localhost:3000/biodata')
    setBiodata(result.data)
  }

  function handleInput (evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value })
  }

  async function handleSubmit (evt) {
    evt.preventDefault()

    if (isEditing) {
      await axios.put(`http://localhost:3000/biodata/${formInput.id}`, formInput)
    } else {
      await axios.post('http://localhost:3000/biodata', formInput)
    }

    getBiodata()
    setFormInput({ ...initialForm })
  }

  function prepareEdit (biodata) {
    setFormInput({ ...biodata })
  }

  async function deleteBiodata (id) {
    await axios.delete(`http://localhost:3000/biodata/${id}`)
    getBiodata()
  }

  useEffect(() => {
    getBiodata()
  }, [])

  return <>
    <center><h1>Kumpulan Biodata</h1></center>

    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Tanggal Lahir</th>
          <th>Jenis Kelamin</th>
          <th>Agama</th>
          <th>Jumlah Saudara</th>
          <th>Detail</th>
          <th>Nomor Favorit</th>
          <th>Opsi</th>
        </tr>
      </thead>
      <tbody>
        {biodata.map(biodata => 
          <tr key={biodata.id}>
            <td>{biodata.nama}</td>
            <td>{biodata.tgl_lahir}</td>
            <td>{biodata.jns_kelamin}</td>
            <td>{biodata.agama}</td>
            <td>{biodata.jmlh_saudara}</td>
            <td>{biodata.detail}</td>
            <td>{biodata.nofav}</td>
            <td>
              <button onClick={() => prepareEdit(biodata)}>Edit</button>
              <button onClick={() => deleteBiodata(biodata.id)}>Hapus</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>

    <br /><hr /><br />

    <h2>Form Input Biodata</h2>

    <form onSubmit={handleSubmit}>
            <label>
                Nama : <input type="text" value={formInput.nama} onChange={evt => handleInput(evt, 'nama')} />
            </label>
            <br/><br />
            <label>
                Tanggal Lahir : <input type="date" value={formInput.tgl_lahir} onChange={evt => handleInput(evt, 'tgl_lahir')} />
            </label>
            <br /><br />
            Jenis Kelamin: 
            <input type="radio" value="Laki-Laki" onChange={evt => handleInput(evt, 'jns_kelamin')}/> Laki-laki
            <input type="radio" value="Perempuan" onChange={evt => handleInput(evt, 'jns_kelamin')}/> Perempuan
            <br /><br />
            Agama :
            <input type="checkbox" value="Islam" onChange={evt => handleInput(evt, 'agama')}></input> Islam
            <input type="checkbox" value="Katholik" onChange={evt => handleInput(evt, 'agama')}></input> Katholik
            <input type="checkbox" value="Protestan" onChange={evt => handleInput(evt, 'agama')}></input> Protestan
            <input type="checkbox" value="Hindu" onChange={evt => handleInput(evt, 'agama')}></input> Hindu
            <input type="checkbox" value="Budha" onChange={evt => handleInput(evt, 'agama')}></input> Budha
            <input type="checkbox" value="Konghucu" onChange={evt => handleInput(evt, 'agama')}></input> Konghucu
            <br /><br />
            <label>
                Jumlah Saudara : 
                <select value={formInput.angkatan} onChange={evt => handleInput(evt, 'jmlh_saudara')}>
                    <option value="-Jumlah Saudara-">- Pilih -</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
            </label>
            <br /><br />
            <label>
                Detail : <br/>
                <textarea value={formInput.detail} onChange={evt => handleInput(evt, 'detail')} />
            </label>
            <br /><br />
            <label>
                Nomor Favorit : <input type="number" value={formInput.nofav} onChange={evt => handleInput(evt, 'nofav')} />
            </label>
            <br /><br />
      <button>
        Submit
      </button>
    </form>
  </>
}