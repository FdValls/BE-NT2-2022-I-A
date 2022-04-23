const saludo = (prop) => {

    const { persona, edad } = prop
    console.log("persona", persona)
    console.log("edad", edad)
    return(
        <div>
            {
                (persona && persona.edad >=18) ?
                <h2>
                    Bienvenido {persona.nombre}
                </h2>
                :
                <h2>
                    Introduzca un nombre para saludar
                </h2>
            }
            
        </div>
    )
}

export default saludo