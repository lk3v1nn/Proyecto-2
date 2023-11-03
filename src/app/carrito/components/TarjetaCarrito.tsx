import axios from "axios";
import React, { useState } from "react";

export default function TarjetaCarrito(prop: {
    nombre: string;
    descripcion: string;
    cantidad: string;
    precio: string;
    id: string;
}) {
    const axiosInstance = axios.create({
        withCredentials: true,
    });

    const [idProducto, setIdProducto] = useState("");

    const eliminarProducto = async () => {
        try {
            const responseAxios = await axiosInstance.delete(`https://proyecto1-api.onrender.com/api/carrito/${idProducto}`);
            window.location.reload();
        } catch (error) {
            console.log('no se pudo eliminar el producto')            
        }
    };

    return (
        <a
            href="#"
            className="w-full mt-2 grid grid-cols-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 bg-white border-gray-200  bg-opacity-50"
        >
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-m tracking-tight text-indigo-600">
                    {prop.nombre}
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                    {prop.descripcion}
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                    Q {prop.precio}
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                    Cantidad: {prop.cantidad}
                </p>
            </div>
            <div className="flex justify-end items-stretch">
                <button
                    className="relative  px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-opacity-50"
                    onClick={() => {
                        setIdProducto(prop.id);
                        console.log(prop.id)
                        eliminarProducto();
                    }}
                >
                    Eliminar
                </button>
            </div>
        </a>
    );
}
