import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const initialForm = {
    nama: '',
    tgl_lahir: '',
    jns_kelamin: '',
    agama: '',
    jmlh_saudara: '',
    detail: ''
  }

export default function List(){
    
    const [biodata, setBiodata] = useState([])
    const [formInput, setFormInput] = useState({ ...initialForm })
    const isEdit = formInput.id

    async function getBiodata(){ 
        const res = await axios.get("http://localhost:3000/biodata")
        setBiodata(res.data)
    }
    

    function prepareEdit (biodata){ 
        setFormInput({...biodata})
    }
    
      async function deleteBiodata(id){ 
        await axios.delete(`http://localhost:3000/biodata/${id}`)
        getBiodata() 
    }

    useEffect(() =>{
        getBiodata()
    },[])
    
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
      <th>Keterangan</th>
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
        <td>{biodata.keterangan}</td>
        <td>
            <Link to={'/biodata/'+biodata.id}>
                <button>Tes</button>
            </Link>
            <Link to={'/biodata/form/'+biodata.id}>
                <button onClick={() => prepareEdit(biodata)}> Edit</button>
            </Link>
                <button onClick={() => deleteBiodata(biodata.id)}>Delete</button>
        </td>
      </tr>
    )}
  </tbody>
</table>
    </>
}