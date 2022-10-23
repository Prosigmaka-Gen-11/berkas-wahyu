import React, { useEffect, useState } from 'react'

export default function LaptopFunctional () {
    const [merk, setMerk] = useState('')
    const [tipe, setTipe] = useState('')
    const [detail, setDetail] = useState('')

    useEffect(() => {
		console.log('efek samping setiap update')

		return () => {
			console.log('sebelum efek samping selanjutnya jalan')
		}
	})

    useEffect(() => {
        console.log('efek samping untuk render pertama kali')

        const laptopDb = {
            merk: 'ASUS',
            tipe: 'X441MA'
        }

        setMerk(laptopDb.merk)
        setTipe(laptopDb.tipe)

        return () => {
            console.log('sebelum component hilang')

            setMerk('')
            setTipe('')
        }
    }, [])

    useEffect(() => {
        console.log('efek samping ketika merk dan tipe berubah')
        setDetail(`Laptop Merk ${merk} Tipe ${tipe}`)
        return () => {
            console.log('sebelum merk dan tipe hilang')
        }
    }, [merk, tipe])

    return <>
        <h2>LifeCycle Functional Component</h2>
        <ul>
            <li>Merk Laptop : {merk}</li>
            <li>Tipe Laptop: {tipe}</li>
        </ul>
        <button onClick={() => setMerk('Lenovo')}>
            Ubah Merk Laptop
        </button>
        <button onClick={() => setTipe('v14')}>
            Ubah Tipe
        </button>
        <p>Detail : {detail}</p>
    </>
}