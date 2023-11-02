"use client";

import React, { createContext, useState } from "react";
import BotonCarrito from "./components/BotonCarrito";

export const NumProductsContext = createContext();

export default function ProductosLayout({
    children,
}) {
    const [numProducts, setNumProducts] = useState("");

    return (
        <NumProductsContext.Provider value={[numProducts, setNumProducts]}>
            <BotonCarrito />
            {children}
        </NumProductsContext.Provider>
    );
}
