'use client'
import { EnviarCorreo } from '@/app/action'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { MdLogin } from 'react-icons/md'
import { Form } from '.'

export default function Contactos() {
  const segment = useSelectedLayoutSegment()

  return (
    <section className='container mx-auto p-8 md:px-0 space-y-3'>
      <div className='md:flex items-center justify-between'>
        <h1 className='text-center text-red-600 text-3xl font-bold my-8'>
          {segment === 'simulacion' ? 'COMPLETA TU PERFIL COMO INVERSIONISTA' : 'Contáctanos'}{' '}
        </h1>
        <div className='flex space-x-2 justify-center'>
          <Link
            target='_blank'
            href={'#'}
            className='bg-white rounded-md px-3 py-2 text-black hover:bg-red-700 hover:text-white font-extrabold flex items-center'
          >
            MI PORTAL <MdLogin />
          </Link>
        </div>
      </div>
      <div className='md:flex justify-end'>
        <Form action={EnviarCorreo as any} className='bg-inherit md:w-5/6 grid md:grid-cols-2 gap-2'>
          <input required type='text' name='name' placeholder='Nombre' className='w-full bg-inherit border-0 border-b' />
          <input id='monto' type='hidden' name='monto' />
          <input id='tmoneda' type='hidden' name='tmoneda' />
          <input id='periodo' type='hidden' name='periodo' />
          {segment === 'simulacion' && (
            <>
              <select name='oriegnFondo' className='w-full border-0 border-b bg-primary' defaultValue={''} required>
                <option value={''} disabled>
                  ORIGEN DE FONDOS
                </option>
                {[
                  'Herencia',
                  'Ganancias de inversiones previas',
                  'Venta de propiedades o activos',
                  'Préstamos',
                  'Dividendos de acciones',
                  'Ingresos de negocios propios',
                  'Ahorros personales'
                ].map(e => (
                  <option value={e} key={e}>
                    {e}
                  </option>
                ))}
              </select>
              <select className='w-full border-0 border-b bg-primary' defaultValue={''} name='tdocumento' required>
                <option value={''} disabled>
                  TIPO DE DOCUMENTO
                </option>
                <option value={'DNI'}>DNI</option>
                <option value={'RUC'}>RUC</option>
                <option value={'CE'}>C.E.</option>
              </select>
              <input required name='ndocumento' type='text' placeholder='Nro Identificación' className='w-full bg-inherit border-0 border-b' />
            </>
          )}

          <select
            id='interes'
            name='interes'
            aria-placeholder='Proceso de Interes'
            className={`${segment === 'simulacion' ? 'hidden' : ''} form-select w-full bg-inherit border-0 border-b auto`}
          >
            <option value={'comprar'}>COMPRAR</option>
            <option value={'vender'}>VENDER</option>
          </select>

          <input required name='telefono' type='text' placeholder='Nro Telefono' className='w-full bg-inherit border-0 border-b' />
          <input required name='correo' type='email' placeholder='Correo' className='w-full bg-inherit border-0 border-b' />
          <textarea required name='mensaje' rows={4} placeholder='Mensaje' className='w-full bg-inherit border-0 border-b col-span-full'></textarea>
          <div className='my-10 space-x-2'>
            <div>
              <input required name='terminos' type='checkbox' className='bg-inherit' />
              <label>Acepto los términos y condiciones</label>
            </div>
            <div>
              <input required name='terminos' type='checkbox' className='bg-inherit' />
              <label>Acepto los politica de Privacidad</label>
            </div>
          </div>

          <div className='flex justify-center md:justify-end'>
            <button className='rounded-3xl border text-2xl px-8 py-6 self-center'>ENVIAR SOLICITUD</button>
          </div>
        </Form>
      </div>
    </section>
  )
}
