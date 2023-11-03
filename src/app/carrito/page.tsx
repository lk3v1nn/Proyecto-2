"use client"

import TarjetaCarrito from "./components/TarjetaCarrito";
import "./styles/carrito.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Carrito() {
    const [productos, setProductos] = useState([{_id:'', Nombre:'', Descripcion:'', cantidad:'', precio:''}]);

    useEffect(() => {
        buscarProductosCliente();
    }, []);

    const buscarProductosCliente = async () => {
        const axiosInstance = axios.create({
            withCredentials: true,
        });
        axiosInstance.get(
            "https://proyecto1-api.onrender.com/api/carrito"
        ).then((res) =>{
            console.log(res.data)
            setProductos(res.data);
            console.log(productos);
        }).catch(()=>{
            console.log('Error al recuperar los datos')
        })
    };

    return (
        <div className="container">
            <div className="products">
                {productos &&
                    productos.map((v) => (
                        <TarjetaCarrito
                            key={v._id}
                            id={v._id}
                            nombre={v.Nombre}
                            descripcion={v.Descripcion}
                            cantidad={v.cantidad}
                            precio = {v.precio}
                        />
                    ))}
            </div>
            <div className="info"></div>
        </div>
    );
}