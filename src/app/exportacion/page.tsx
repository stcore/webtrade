import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'Exportación',
  description: 'Exportación de Company Cacel'
}
export default function page() {
  return (
    <>
      <section className='mt-20 p-8 md:px-0 bg-[url("/assets/exportacion/fondo.png")] bg-cover'>
        <div className='container mx-auto md:flex justify-between'>
          <div className='md:flex md:flex-col justify-center'>
            <h1 className='font-bold text-2xl text-center'>Exportaciones</h1>
            <div className='text-center'>
              Nos enorgullece decir que nuestras exportaciones llegan a cada rincón del mundo. A lo largo de los años, hemos establecido relaciones
              sólidas con socios comerciales en diversos países y continentes. Esto nos permite ofrecer a nuestros clientes un acceso sin precedentes
              a los mercados internacionales, así como la tranquilidad de saber que sus productos llegarán de manera oportuna y en condiciones
              óptimas.
            </div>
          </div>
          <Image width={300} height={300} src={'/assets/exportacion/mundo.png'} alt='Exportacion Cacel' />
        </div>
      </section>
      <section className='p-8 md:px-0 space-y-6 container mx-auto'>
        <h2 className='text-center text-red-700'>Preguntas Frecuentes</h2>
        <p className='text-center text-gray-500'>Sobre nuestras exportaciones</p>
        <div className='grid md:grid-cols-2 gap-4'>
          <div tabIndex={1} className='[&_div]:focus:block'>
            <p className='border-b'>¿Qué es una exportación?</p>
            <div className='hidden text-gray-400'>
              La exportación es el acto de vender productos o servicios a compradores situados fuera del país de origen, contribuyendo así al
              intercambio global de bienes y servicios.
            </div>
          </div>
          <div tabIndex={1} className='[&_div]:focus:block'>
            <p className='border-b'>¿A qué países exporta company CACEL?</p>
            <div className='hidden text-gray-400'>Respuesta</div>
          </div>
          <div tabIndex={1} className='[&_div]:focus:block'>
            <p className='border-b'>¿Cómo gestionan la logística de los materiales?</p>
            <div className='hidden text-gray-400'>Respuesta</div>
          </div>
          <div tabIndex={1} className='[&_div]:focus:block'>
            <p className='border-b'>¿Cómo ponerse en contacto para su servicio de exportación?</p>
            <div className='hidden text-gray-400'>Respuesta</div>
          </div>
          <div tabIndex={1} className='[&_div]:focus:block'>
            <p className='border-b'>¿Qué tipo de materiales exporta su empresa?</p>
            <div className='hidden text-gray-400'>Respuesta</div>
          </div>
          <div tabIndex={1} className='[&_div]:focus:block'>
            <p className='border-b'>¿Cuál es el principal mercado para los materiales exportados?</p>
            <div className='hidden text-gray-400'>Respuesta</div>
          </div>
        </div>
      </section>
    </>
  )
}
