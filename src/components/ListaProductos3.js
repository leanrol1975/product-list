import React, { Component } from 'react';

class ListaProductos extends Component {

    constructor(props) {
        super(props);
    }

   

    productosAReponerStock = () => this.props.productos.filter(fruta => fruta.cantidad == 1)
    
   


    render() {
        return (
            <div>
              
                

                <h2>
                {this.props.titulo}
                </h2>

                <ul>
                    {this.productosAReponerStock().map(fruta => <li>{fruta.nombre}</li>)}
                </ul>

            
            </div>
        )
    }

}

export default ListaProductos;