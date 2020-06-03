import React, { Component } from 'react';

class ListaProductos extends Component {

    constructor(props) {
        super(props);
    }

   

    productosSinStock = () => this.props.productos.filter(fruta => fruta.cantidad == 0)
    
   


    render() {
        return (
            <div>
              
                

                <h2>
                {this.props.titulo}
                </h2>

                <ul>
                    {this.productosSinStock().map(fruta => <li>{fruta.nombre}</li>)}
                </ul>

            
            </div>
        )
    }

}

export default ListaProductos;