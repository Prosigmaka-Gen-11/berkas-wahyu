import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detail(){
    const params = useParams()
    const [biodata, setBiodata] = useState({})

    async function getDetail(){
        const res = await axios.get("http://localhost:3000/biodata/"+params.Id)
        setBiodata(res.data)
    }

    useEffect(() => {
        getDetail()
    },[])
    
    return <>
        <h1>Detail Biodata</h1>
        <table>
            <tr>
                <td>Nama : </td>
                <td>{biodata.nama}</td>
            </tr>
            <tr>
                <td>Tanggal Lahir : </td>
                <td>{biodata.tgl_lahir}</td>
            </tr>
            <tr>
                <td>Jenis Kelamin : </td>
                <td>{biodata.jns_kelamin}</td>
            </tr>
            <tr>
                <td>Agama : </td>
                <td>{biodata.agama}</td>
            </tr>
            <tr>
                <td>Jumlah Saudara : </td>
                <td>{biodata.jmlh_saudara}</td>
            </tr>
            <tr>
                <td>Keterangan : </td>
                <td>{biodata.keterangan}</td>
            </tr>
        </table>
    </>
}