"use client";

import React, { useEffect, useState, createContext, Dispatch, SetStateAction } from "react";
// import React from "react";
import axios from "axios";
import "./styles/Catalogo.css";
import Producto from "./components/Producto";
import BotonCarrito from "./components/BotonCarrito";

const axiosInstance = axios.create({
    withCredentials: true,
});

type StateType = [string, Dispatch<SetStateAction<string>>];

export const NumProductsContext = createContext<StateType>(["", () => {}]);

export default function Catalogo() {
    const [productos, setProducto] = useState([]);
    const [numProducts, setNumProducts] = useState("");

    useEffect(() => {
        obtenerDataProductos();
        actualizarNumProducts();
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

    const actualizarNumProducts = () => {
        axiosInstance
            .get("https://proyecto1-api.onrender.com/api/carrito")
            .then((res) => {
                console.log("res num: ", res.data.length);
                setNumProducts(res.data.length);
            })
            .catch((err) => {
                console.log("error al acualizar el numero");
                console.log(err);
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
