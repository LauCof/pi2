import './Admin.css'

const Admin = () => {
  return (
    <div className='adm-div'>
        <section className='adm-search'> 
        <h1>Bienvenido Administrador</h1>
        <input type="text" placeholder="Buscar producto..."/>
        </section>
        <section className="adm">
            <button>Agregar prodcuto</button>
            <button>Modificar producto</button>
            <button>Eliminar producto</button>
        </section>
    </div>

  )
}

export default Admin