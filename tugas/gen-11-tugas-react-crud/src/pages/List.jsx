import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const initialForm = {
  nama: '',
  tgl_lahir: '',
  jns_kelamin: '',
  agama: '',
  jmlh_saudara: '',
  keterangan: ''
}


export default function List () {
    const [biodata, setBiodata] = useState([])
    const [formInput, setFormInput] = useState({ ...initialForm })

    const isEditing = formInput.id

    async function getBiodata () {
        const result = await axios.get('http://localhost:3000/biodata')
        setBiodata(result.data)
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
        <center><h1>Halaman List</h1></center>
        <Link to="/">Ke Home</Link>
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
                        <Link to={'/form/'+biodata.id}>
                        <button onClick={() => prepareEdit(biodata)}>Edit</button>
                        </Link>
                        <button onClick={() => deleteBiodata(biodata.id)}>Hapus</button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    </>
}