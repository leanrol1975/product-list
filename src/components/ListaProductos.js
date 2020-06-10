import React, { Component } from 'react';

class ListaProductos extends Component {

    constructor(props) {
        super(props);
    }

    productosEnStock = () => this.props.productos.map(fruta => <li>{fruta.nombre}</li>)

    

    render() {
        return (
            <div>
                <h2>
                    {this.props.titulo}
                </h2>

                <ul>
                    {this.productosEnStock()}
                </ul>

            </div>
        )
    }

}

export default ListaProductos;