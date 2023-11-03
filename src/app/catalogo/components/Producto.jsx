import "../styles/Producto.css";
import React, { useContext, useEffect } from 'react';
import axios from "axios";
import {NumProductsContext} from '../page'
import { stringify } from "querystring";

const axiosInstance = axios.create({
    withCredentials: true,
});

export default function Producto(props) {
    const [numProducts, setNumProducts] = useContext(NumProductsContext);

    useEffect(() => {
        actualizarNumProducts();
    }, [numProducts]);

    const extraeDatosProducto = async (e) => {
        try {
            const identificadorProducto = e.value;
            const dataProduct = await axios.get(
                `https://proyecto1-api.onrender.com/api/Producto/${identificadorProducto}`
            );
            // console.log(dataProduct.data)
            agregarAlCarrito(dataProduct.data);
        } catch (error) {
            console.log("Producto no encontrado");
        }
    };

    const agregarAlCarrito = async (dataProduct) => {
        try {
            const data = {
                Nombre: dataProduct.Nombre,
                Descripcion: dataProduct.Descripcion,
                Identificador: dataProduct.Identificador,
                cantidad: "1",
                precio: dataProduct.PrecioDescuento,
            };
            console.log("pal carrito", data);
            const res = await axiosInstance.post(
                "https://proyecto1-api.onrender.com/api/carrito/add",
                data
            );
        } catch (error) {
            console.log("no se pudo agregar al carrito");
            console.error(error);
        }
        actualizarNumProducts();
    };

    const actualizarNumProducts = () => {
        axiosInstance
            .get("https://proyecto1-api.onrender.com/api/carrito")
            .then((res) => {
                console.log("res num: ", numProducts);
                setNumProducts(stringify(res.data.length));
            })
            .catch((err) => {
                console.log("error al acualizar el numero");
                console.log(err);
            });
    };

    return (
        <>
            <div className="product-card">
                <div className="product-tumb">
                    <img src={props.imagen} alt="" />
                </div>
                <div className="product-details">
                    <div className="product-catagory">
                        {props.categorias &&
                            props.categorias.map((c, index) => {
                                return (
                                    <span className="catagory" key={index}>
                                        {c}
                                    </span>
                                );
                            })}
                    </div>
                    <h4>
                        <a href="">{props.nombre}</a>
                    </h4>
                    <p>{props.descripcion}</p>
                    <div className="product-bottom-details">
                        <div className="product-price">
                            <small>Antes: Q {props.descuento}</small>
                            <h4>Ahora: Q {props.precioDescuento}</h4>
                        </div>
                    </div>
                    <button
                        value={props.identificador}
                        onClick={(e) => {
                            extraeDatosProducto(e.target);
                            actualizarNumProducts();
                        }}
                        className="my-4 bg-indigo-600 hover:bg-blue-700 text-white py-2 px-2 "
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    );
}
