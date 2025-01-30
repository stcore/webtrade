import SimInversion from './SimInversion'

export default function page() {
  return (
    <section className='bg-[url("/assets/inicio/inversiones.png")]   bg-cover'>
      <div className='container mx-auto mt-20 backdrop-brightness-[0.30]'>
        <h2 className='text-center text-3xl  uppercase py-3 text-stone-200 font-extrabold'>Simulador de inversiones</h2>
        <p className='hidden'>ELIGE</p>
        <SimInversion />
      </div>
    </section>
  )
}
