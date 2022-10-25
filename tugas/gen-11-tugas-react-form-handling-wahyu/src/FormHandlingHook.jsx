import { useState } from "react";
import useFormInput from "./useFormInput";

export default function FormHandlingHook () {

    const { formInput, handleFormInput } = useFormInput ({
        nama: '',
        tgl_lahir: '',
        jns_kelamin: '',
        agama: '',
        jmlh_saudara: '',
        detail: '',
    })

    function handleSubmit (evt) {
        evt.preventDefault()
        console.log(formInput)
    }

    return <>

        <h2>Data Diri</h2>
        <p>Nama : {formInput.nama}</p>
        <p>Tanggal Lahir : {formInput.tgl_lahir}</p>
        <p>Jenis Kelamin : {formInput.jns_kelamin}</p>
        <p>Agama : {formInput.agama}</p>
        <p>Jumlah Saudara : {formInput.jmlh_saudara}</p>
        <p>Detail : {formInput.detail}</p>

        <br/>

        <form onSubmit={evt => handleSubmit(evt)}>
            <h2>Input Data</h2>
            <label>
                Nama : <input type="text" value={formInput.nama} onChange={evt => handleFormInput(evt, 'nama')} />
            </label>
            <br/><br />
            <label>
                Tanggal Lahir : <input type="date" value={formInput.tgl_lahir} onChange={evt => handleFormInput(evt, 'tgl_lahir')} />
            </label>
            <br /><br />
            <label>
                Jenis Kelamin: 
                <input type="radio" value="L" onChange={evt => handleFormInput(evt, 'jns_kelamin')}/> Laki-laki
                <input type="radio" value="P" onChange={evt => handleFormInput(evt, 'jns_kelamin')}/> Perempuan
            </label>
            <br /><br />
            <label>
                Agama :
                <input type="checkbox" value="Islam" onChange={evt => handleFormInput(evt, 'agama')}></input> Islam
                <input type="checkbox" value="Katholik" onChange={evt => handleFormInput(evt, 'agama')}></input> Katholik
                <input type="checkbox" value="Protestan" onChange={evt => handleFormInput(evt, 'agama')}></input> Protestan
                <input type="checkbox" value="Hindu" onChange={evt => handleFormInput(evt, 'agama')}></input> Hindu
                <input type="checkbox" value="Budha" onChange={evt => handleFormInput(evt, 'agama')}></input> Budha
                <input type="checkbox" value="Konghucu" onChange={evt => handleFormInput(evt, 'agama')}></input> Konghucu
            </label>
            <br /><br />
            <label>
                Jumlah Saudara : 
                <select value={formInput.angkatan} onChange={evt => handleFormInput(evt, 'jmlh_saudara')}>
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
                <textarea value={formInput.detail} onChange={evt => handleFormInput(evt, 'detail')} />
            </label>
            <br /><br />
            <button>
                Submit
            </button>
        </form>

    </>
    
}