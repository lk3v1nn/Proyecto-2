"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Registrarse() {
    const [datos, setDatos] = useState({ nombre: "", });

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="no carga xd"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Registra una cuenta
                    </h2>
                </div>
                <p className="mt-2 text-center text-sm text-gray-500">
                    Ya tienes una cuenta?
                    <Link
                        href="../login"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Inicia sesion
                    </Link>
                </p>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-2">
                        <div>
                            <label
                                htmlFor="nombre"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    autoComplete="Nombre"
                                    onChange={(e)=> setDatos({...datos, nombre: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="apellido"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Apellido
                            </label>
                            <div className="mt-2">
                                <input
                                    id="apellido"
                                    name="apellido"
                                    type="text"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="fechaNacimiento"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Fecha de nacimiento
                            </label>
                            <div className="mt-2">
                                <input
                                    id="fechaNacimiento"
                                    name="fechaNacimiento"
                                    type="date"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="clave"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Clave
                            </label>
                            <div className="mt-2">
                                <input
                                    id="clave"
                                    name="clave"
                                    type="password"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="clave2"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Repite la clave
                            </label>
                            <div className="mt-2">
                                <input
                                    id="clave2"
                                    name="clave2"
                                    type="password"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="direccionEntrega"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Direccion de entrega
                            </label>
                            <div className="mt-2">
                                <input
                                    id="direccionEntrega"
                                    name="direccionEntrega"
                                    type="text"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="nit"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                NIT
                            </label>
                            <div className="mt-2">
                                <input
                                    id="nit"
                                    name="nit"
                                    type="number"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="numeroTelefonico"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Telefono
                            </label>
                            <div className="mt-2">
                                <input
                                    id="numeroTelefonico"
                                    name="numeroTelefonico"
                                    type="text"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Correo
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
