import React, { Component } from "react";

export default class LaptopClass extends Component {

    constructor() {
        super()

        this.state = {
            merk: '',
            tipe: '',
            detail: ''
        }
    }

    componentDidMount() {
        console.log('subscribe to db laptop')
        document.addEventListener('wheel', this.getMouseMoveEvent)
        console.log('ngambil data dari database')
        this.setState({
            merk: 'ASUS',
            tipe: 'X441MA'
        })
    }

    componentDidUpdate(propsSebelumnya, stateSebelumnya) {
        console.log(propsSebelumnya)
		console.log(this.props)
        // console.log(stateSebelumnya)
		// console.log(this.state)

        if(stateSebelumnya.merk !== this.state.merk || stateSebelumnya.tipe !== this.state.tipe) {
            this.setState({
                detail: `Laptop Merk ${this.state.merk} Tipe ${this.state.tipe}`
            })
        }
    }

    componentWillUnmount() {
        console.log('saya akan menghilang')
        console.log('unsubscribe ke db laptop')
        document.removeEventListener('wheel', this.getMouseMoveEvent)
        this.setState({
            merk: '',
            tipe: '',
            detail: ''
        })
    }

    render() {
        return <div>
            <h2>LifeCycle Class Component</h2>
            <ul>
                <li>Merk Laptop : {this.state.merk}</li>
                <li>Tipe Laptop: {this.state.tipe}</li>
            </ul>
            <button onClick={() => this.setState({ merk: 'Lenovo'})}>
                Ubah Merk
            </button>
            <button onClick={() => this.setState({ tipe: 'v14'})}>
                Ubah Tipe 
            </button>
            <p>Detail : {this.state.detail}</p>
        </div>
    }
}