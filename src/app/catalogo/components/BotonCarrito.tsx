"use client";
import "../styles/Carrito.css";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { numProductsContext } from "../layout";

export default function BotonCarrito() {
    const router = useRouter();
    const redireccionar = () => {
        router.push("../carrito");
    };
    const [numProducts, setNumProductsContext] = useContext(numProductsContext);

    return (
        <div className="cartContainer">
            <button className="cartButton" onClick={redireccionar}>
                carrito
            </button>
            <div className="cantidadArticulosContainer">
                <div className="cantidad">{numProducts}</div>
            </div>
        </div>
    );
}
