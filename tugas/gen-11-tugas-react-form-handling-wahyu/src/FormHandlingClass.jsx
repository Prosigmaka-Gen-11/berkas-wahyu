import React, { Component } from "react";

export default class FormHandlingClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nama: '',
            tgl_lahir: '',
            jns_kelamin: '',
            agama: '',
            jmlh_saudara: '',
            detail: '',
        }
    }

    handleFormInput(evt, propNama) {
        this.setState({[propNama]: evt.target.value})
    }

    handleSubmit(evt) {
        evt.preventdefault()
        console.log(this.state)
    }

    render() {
        return(
            <>
            <h2>Data Diri</h2>
            <p>Nama : {this.state.nama}</p>
            <p>Tanggal Lahir : {this.state.tgl_lahir}</p>
            <p>Jenis Kelamin : {this.state.jns_kelamin}</p>
            <p>Agama : {this.state.agama}</p>
            <p>Jumlah Saudara : {this.state.jmlh_saudara}</p>
            <p>Detail : {this.state.detail}</p>

            <br/>

            <form onSubmit={evt => this.handleSubmit(evt)}>
                <h2>Input Data</h2>
                <label>
                    Nama : <input type="text" value={this.state.nama} onChange={evt => this.handleFormInput(evt, 'nama')} />
                </label>
                <br/><br/>
                <label>
                    Tanggal Lahir : <input type="date" value={this.state.tgl_lahir} onChange={evt => this.handleFormInput(evt, 'tgl_lahir')} />
                </label>
                <br /><br />
                <label>
                    Jenis Kelamin: 
                    <input type="radio" value="L" onChange={evt => this.handleFormInput(evt, 'jns_kelamin')}/> Laki-laki
                    <input type="radio" value="P" onChange={evt => this.handleFormInput(evt, 'jns_kelamin')}/> Perempuan
                </label>
                <br /><br />
                <label>
                    Agama :
                    <input type="checkbox" value="Islam" onChange={evt => this.handleFormInput(evt, 'agama')}></input> Islam
                    <input type="checkbox" value="Katholik" onChange={evt => this.handleFormInput(evt, 'agama')}></input> Katholik
                    <input type="checkbox" value="Protestan" onChange={evt => this.handleFormInput(evt, 'agama')}></input> Protestan
                    <input type="checkbox" value="Hindu" onChange={evt => this.handleFormInput(evt, 'agama')}></input> Hindu
                    <input type="checkbox" value="Budha" onChange={evt => this.handleFormInput(evt, 'agama')}></input> Budha
                    <input type="checkbox" value="Konghucu" onChange={evt => this.handleFormInput(evt, 'agama')}></input> Konghucu
                </label>
                <br /><br />
                <label>
                    Jumlah Saudara : 
                    <select value={this.state.jmlh_saudara} onChange={evt => this.handleFormInput(evt, 'jmlh_saudara')}>
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
                    <textarea value={this.state.detail} onChange={evt => this.handleFormInput(evt, 'detail')} />
                </label>
                <br /><br />
                <button>
                    Submit
                </button>
            </form>
            </>
        )
    }
}