import React from "react";
import Button from "./Button";


function UbahString () {
    const [name, setName] = React.useState('Muhammad Wahyu Ilahi')
	const [age, setAge]   = React.useState(21)
    const [univ, setUniv] = React.useState('UNSRI')

    return <div className="text-center">
        <h1 className="text-lg font-bold"> Hallo Perkenalkan </h1>
        <p> Nama : {name}</p>
        <Button buttonName= "Ubah Nama" handleClick={() => setName("ALEX")}/>
        <p> Umur :{age}</p>
        <Button buttonName= "Ubah Umur" handleClick={() => setAge(25)}/>
        <p> Kuliah di : {univ}</p>
        <Button buttonName= "Ubah Univ" handleClick={() => setUniv('UGM')}/>     
        <p className="text-bold">SALAM KENAL, THANK YOU ALL</p>
    </div>
}

export default UbahString;