import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const initialForm = {
    nama: '',
    tgl_lahir: '',
    jns_kelamin: '',
    agama: '',
    jmlh_saudara: '',
    keterangan: ''
}

export default function Form (){
    const [biodata, setBiodata] = useState([])
    const [formInput, setFormInput] = useState({ ...initialForm })
    const param = useParams()
    const isEdit = formInput.id

    async function getBiodata(){ 
        const res = await axios.get("http://localhost:3000/biodata")
        setBiodata(res.data)
    }

    function handleInput (evt, inputName){ 
        setFormInput({ ...formInput,[inputName]: evt.target.value})
    }

    async function prepareEdit (){ 
        const res = await axios.get("http://localhost:3000/biodata/"+param.Id)
        setFormInput(res.data)
    }

    async function handleSubmit (evt) { 
        evt.preventDefault()
    
        if(isEdit){
          await axios.put(`http://localhost:3000/biodata/${formInput.id}`, formInput)
        } else {
          await axios.post("http://localhost:3000/biodata", formInput)
        }
        
        getBiodata() 
        setFormInput({ ...initialForm})
    }

    useEffect(()=>{
        prepareEdit()
    },[])

    return <>
        <h1>Form Biodata</h1>
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
                Keterangan : <br/>
                <textarea value={formInput.keterangan} onChange={evt => handleInput(evt, 'keterangan} />
            </label>
            <br /><br />
      <button>
        Submit
      </button>
            </form>
    </>
}