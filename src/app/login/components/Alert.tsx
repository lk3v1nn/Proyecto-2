function Alert(props: { mensaje: string }) {
    return (
        <div className={`font-regular relative mb-4 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 p-4 text-base leading-5 text-white opacity-100`}>
            <i className="fas fa-exclamation mr-2"></i>
            {props.mensaje}
        </div>
    );
}

export { Alert };