import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { obtenerClientes } from '../data/cliente';
import Cliente from '../components/Cliente';

export function loader(){
    const clientes = obtenerClientes()

    return clientes;
}


function Index() {

    const clientes = useLoaderData();

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900' >Cliente</h1>
            <p className='mt-3'>Administra tus Clientes</p>

            {clientes.length ? (
                <table className='w-full bg-white shadow mt-5 table-auto'>
                    <thead>
                        <tr>
                            <th className='p-2'>Cliente</th>
                            <th className='p-2'>Contacto</th>
                            <th className='p-2'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { clientes.map( cliente =>(
                            <Cliente 
                                key={cliente.id}
                                cliente={cliente}
                            />
                        ))}
                    </tbody>
                </table>
                ) : (
                <p className='text-center mt-10'>No hay clientes</p>
            )}
        </>
    )
}

export default Index