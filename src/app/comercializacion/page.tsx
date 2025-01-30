import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comercialización',
  description: 'Comercialización de Company Cacel'
}

export default function page({ searchParams: sp }: { searchParams: { s: string | undefined } }) {
  return (
    <>
      <section className='mt-20 p-8 h-80 grid place-content-center bg-[url("/assets/comercializacion/com.png")] bg-cover'>
        <div className='space-y-4'>
          <h1 className='text-center font-bold text-3xl'>Comercialización</h1>
          <p className='text-center'>Descubre nuestros productos y descarga el catálogo correspondiente.</p>
        </div>
      </section>
      <section className='p-8 space-y-4 container mx-auto'>
        <h2 className='font-extrabold text-2xl text-center'>Catálogo de Productos</h2>
        <div className='flex flex-wrap justify-center space-x-1 space-y-1'>
          <Link href={{ search: '?s=all' }} className={`rounded-lg px-4 py-2 ${sp.s === 'all' ? 'bg-red-800' : 'bg-zinc-700 bg-opacity-70'}`}>
            Todos
          </Link>
          <Link href={{ search: '?s=cobre' }} className={`rounded-lg px-4 py-2 ${sp.s === 'cobre' ? 'bg-red-800' : 'bg-zinc-700 bg-opacity-70'}`}>
            Cobre
          </Link>
          <Link
            href={{ search: '?s=aluminio' }}
            className={`rounded-lg px-4 py-2 ${sp.s === 'alumninio' ? 'bg-red-800' : 'bg-zinc-700 bg-opacity-70'}`}
          >
            Aluminio
          </Link>
          <Link href={{ search: '?s=bronce' }} className={`rounded-lg px-4 py-2 ${sp.s === 'bronce' ? 'bg-red-800' : 'bg-zinc-700 bg-opacity-70'}`}>
            Bronce
          </Link>
          <Link href={{ search: '?s=plomo' }} className={`rounded-lg px-4 py-2 ${sp.s === 'plomo' ? 'bg-red-800' : 'bg-zinc-700 bg-opacity-70'}`}>
            Plomo
          </Link>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {[
            { src: '/assets/comercializacion/IMAGEN_CATÁLOGO_COBRE BRILLANTE.png', title: 'Cobre brillante' },
            { src: '/assets/comercializacion/IMAGEN_CATÁLOGO_05.png', title: 'PET' },
            { src: '/assets/comercializacion/IMAGEN_CATÁLOGO_04.png', title: 'Bronce' },
            { src: '/assets/comercializacion/IMAGEN_CATÁLOGO_06.png', title: 'Aluminio Perfil' },
            { src: '/assets/comercializacion/IMAGEN_CATÁLOGO_08.png', title: 'Bronce' },
            { src: '/assets/comercializacion/IMAGEN_CATÁLOGO_ALUMINIO.png', title: 'Aluminio Duro' },
            { src: '/assets/comercializacion/IMAGEN_CATÁLOGO_COBRE.png', title: 'Cobre' },
            { src: '/assets/comercializacion/IMAGEN_CATÁLOGO_PLOMO.png', title: 'Plomo' }
          ].map((e, i) => {
            if (sp.s != 'all' && sp.s) {
              if (e.title.toLowerCase().indexOf(sp.s) > -1) {
                return (
                  <div key={i} className='p-8 bg-zinc-700 bg-opacity-70 flex flex-col justify-center rounded-lg space-y-3'>
                    <Image width={250} height={250} className='w-full' src={e.src} alt={e.title} />
                    <p>{e.title}</p>
                  </div>
                )
              }
              return null
            }
            return (
              <div key={i} className='p-8 bg-zinc-700 bg-opacity-70 flex flex-col justify-center rounded-lg space-y-3'>
                <Image width={250} height={250} className='w-full' src={e.src} alt={e.title} />
                <p>{e.title}</p>
              </div>
            )
          })}
        </div>
        <div className='flex justify-center'>
          <button className='border px-8 py-2 rounded-lg'> Cargar Mas</button>
        </div>
      </section>
    </>
  )
}
