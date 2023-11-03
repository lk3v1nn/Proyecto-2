"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const [datos, setDatos] = useState({ CorreoElectronico: "", Clave: "" });
    const router = useRouter();

    useEffect(() => {
        console.log("carga la pagina");
    }, []);

    const manejadorSumit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const axiosInstance = axios.create({
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Manejar la solicitud de inicio de sesión en el cliente
        axiosInstance
            .post("https://proyecto1-api.onrender.com/api/login/", datos)
            .then((respuesta) => {
                const cookieValue = respuesta.headers["Set-Cookie"]; // Obtén el valor de la cookie
                document.cookie = cookieValue;
                router.push('../catalogo')
            })
            .catch((error) => {
                if (error instanceof AxiosError) {
                    console.log(error.response?.data);
                    console.log("error en el login p2");
                }
            });
    };

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Inicia sesion en tu cuenta
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" onSubmit={manejadorSumit}>
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
                                    onChange={(e) =>
                                        setDatos({
                                            ...datos,
                                            CorreoElectronico: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) =>
                                        setDatos({
                                            ...datos,
                                            Clave: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Iniciar sesion
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        No tiene una cuenta?
                        <Link
                            href="../registrarse"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Registrate
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
