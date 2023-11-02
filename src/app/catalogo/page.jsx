"use client";

import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import "./styles/Catalogo.css";
import Producto from "./components/Producto";
import BotonCarrito from "./components/BotonCarrito";

export const NumProductsContext = createContext();

export default function Catalogo() {
    const [productos, setProducto] = useState([]);
    const [numProducts, setNumProducts] = useState("");

    useEffect(() => {
        obtenerDataProductos();
    }, []);

    const obtenerDataProductos = () => {
        const respuestaAxios = axios
            .get("https://proyecto1-api.onrender.com/api/productos")
            .then((res) => {
                setProducto(res.data);
            })
            .catch(() => {
                console.log("Error al obtener los datos");
            });
    };

    return (
        <>
        <NumProductsContext.Provider value={[numProducts, setNumProducts]}>
            <BotonCarrito />
        </NumProductsContext.Provider>
        
            <div className="container">
                <div className="containerProducts">
                    {productos &&
                        productos.map((producto) => (
                            <Producto
                                key={producto.id}
                                categorias={producto.Categorias}
                                nombre={producto.Nombre}
                                descripcion={producto.Descripcion}
                                descuento={producto.Descuento}
                                precioDescuento={producto.PrecioDescuento}
                                imagen={producto.Imagen}
                                identificador={producto.Identificador}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}
