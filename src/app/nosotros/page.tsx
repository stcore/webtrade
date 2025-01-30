import { Carrusel } from '@/comp'
import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Nosotros de Company Cacel'
}

export default function page() {
  return (
    <>
      <section className='mt-20 bg-[url("/assets/nosotros/nosotros.png")] bg-opacity-95 h-[calc(100vh-10rem)] md:h-[calc(100vh-5rem)] '>
        <div className='pt-10 p-8 space-y-3 container mx-auto md:w-2/3'>
          <h1 className='text-center text-3xl font-bold text-red-600'>Nosotros</h1>
          <p className='text-center'>
            Nuestra compañía COMPANY CACEL, está formada por un equipo humano excepcional que trabaja con dedicación y profesionalismo. Nos
            especializamos en la comercialización y exportación de una amplia variedad de metales y materiales reciclables. Nuestro enfoque principal
            es satisfacer las necesidades y demandas de nuestros clientes, ofreciendo productos de alta calidad y soluciones eficientes. Nuestro
            compromiso con la excelencia nos ha permitido establecer relaciones sólidas con proveedores y clientes, impulsando así nuestro crecimiento
            y éxito en el sector.
          </p>
        </div>
        <div className='h-40 md:h-80 pt-10 p-8 space-y-3 container relative mx-auto md:w-2/3'>
          <Carrusel className='flex w-full h-full md:grid  md:grid-cols-4' arrow={true}>
            {[
              { className: 'md:border-r md:border-b md:border-white', value: '+10M', label: 'COMERCIO ACUMULATIVO' },
              { className: 'md:border-x md:border-b md:border-white', value: '0.8%', label: 'Volumen global de comercio' },
              { className: 'md:border-x md:border-b md:border-white', value: '30%', label: 'Crecimiento anual' },
              { className: 'md:border-l md:border-b md:border-white', value: '20+', label: 'Años de experiencia' },
              { className: 'md:border-r md:border-t md:border-white', value: '2005', label: 'Inicio de operaciones' },
              { className: 'md:border-x md:border-t md:border-white', value: '+1,200', label: 'Exportaciones' },
              { className: 'md:border-x md:border-t md:border-white', value: '24/7', label: 'Soporte y contacto' },
              { className: 'md:border-l md:border-t md:border-white', value: '+5 M', label: 'Materiales exportados' }
            ].map((e, i) => {
              return (
                <div key={i} className={`${e.className} grid place-content-center hover:bg-red-600`}>
                  <div className='text-5xl font-extrabold text-center'>{e.value}</div>
                  <div className='text-center'>{e.label}</div>
                </div>
              )
            })}
          </Carrusel>
        </div>
      </section>
      <section className='md:flex'>
        <div className='p-8 container mx-auto md:px-0 md:flex md:flex-col justify-center'>
          <h2 className='text-center md:text-left text-red-700 text-3xl font-bold my-3'>Visión</h2>
          <p className='text-center md:text-left'>
            Comercializar y exportar productos metalúrgicos y de reciclaje. Nuestro objetivo es ser una fuerza que impulsa el cambio positivo en la
            industria, cuidando y preservando el medio ambiente
          </p>
        </div>
        <Image height={150} width={400} className='self-center' src={'/assets/nosotros/IMAGEN_VISIÓN.png'} alt='Visión Cacel' />
      </section>
      <section className='md:flex'>
        <div className='p-8 container mx-auto md:px-0 md:flex md:flex-col justify-center md:order-last'>
          <h2 className='text-center md:text-left text-red-700 text-3xl font-bold my-3'>Misión</h2>
          <p className='text-center md:text-left'>
            Liderar el mercado nacional e internacional de la Industria Metalúrgica, dejando huella en comercialización y exportación de productos
            metales minerales reciclados. Contribuyendo con el crecimiento sostenible de la economía mundial.
          </p>
        </div>
        <Image height={150} width={400} className='self-center' src={'/assets/nosotros/IMAGEN_MISIÓN.png'} alt='Mision Cacel' />
      </section>
      <section className='p-8 container mx-auto md:px-0 text-4xl md:text-6xl '>
        <div className='text-center md:text-left'>INTEGRIDAD</div>
        <div className='text-center md:text-right font-extrabold'>CONSISTENCIA</div>
        <div className='text-center md:text-center'>
          <span className='bg-red-600 italic'>Confiabilidad</span>
        </div>
      </section>
      <section className='p-8 relative pb-10'>
        <h2 className='text-center text-red-700 text-3xl font-bold my-3'>Nuestras Fortalezas</h2>
        <Carrusel className='md:grid grid-cols-3 gap-4 flex'>
          {[
            {
              title: 'COMERCIO LIBRE',
              desc: (
                <>
                  <span className='md:block'>
                    Empresa independiente de comercio libre capaz de suministrar a cualquier planta industrial del mundo.
                  </span>
                  <span className='md:hidden'>
                    Nos dedicamos a la recolección y procesamiento de metales minerales provenientes de diversas fuentes de reciclaje, como desechos
                    electrónicos, chatarra industrial y residuos mineros. De esta manera promovemos el reciclaje de metales, contribuimos al cuidado
                    del medio ambiente, y la disminución de la contaminación.
                  </span>
                </>
              ),
              className: ''
            },
            {
              title: 'COMERCIALIZACIÓN',
              desc: 'Relaciones a largo plazo en comercializacion y con Conocimiento profundo en el mercado metalúrgico.',
              className: ''
            },
            {
              title: 'PRECIOS DEL MERCADO',
              desc: 'Precio competitivo y accesible en el mercado (LME, COMEX).',
              className: ''
            },
            {
              title: 'FINANZAS ESTRATEGICAS',
              desc: 'Como socios estratégicos en inversiones, nuestra empresa cuenta con una sólida estructura financiera diseñada para agilizar el proceso de compra y suministro.',
              className: ''
            },
            {
              title: 'LOGISTICA EFICIENTE',
              desc: 'Finanzas eficientes con pagos rápidos y logística justo a tiempo.',
              className: ''
            },
            {
              title: 'PERMISOS Y REGULACIONES',
              desc: (
                <>
                  <span className='hidden md:block'>
                    Permisos y acreditaciones de las entidades competentes en cumplimineto de los requisitos exigidos.
                  </span>
                  <span className='md:hidden'>
                    Gracias a esto, logramos simplificar los controles y trámites aduaneros, ya que contamos con la autorización como Exportador
                    Autorizado por entidades como MINAM, MTC, SUNAT, ADUANAS y OEA.
                  </span>
                </>
              ),
              className: ''
            },
            {
              title: '',
              desc: '',
              className: 'hidden md:block'
            },
            {
              title: 'TECNOLOGÍA',
              desc: 'Con nuestro marketplace digital avanzado, conectamos proveedores y compradores de metales de manera eficiente y segura. ¡Optimiza tu transacciones y maximiza rendimiento con nuestra plataforma tecnológica líder en el sector!',
              className: ''
            },
            {
              title: '',
              desc: '',
              className: 'hidden md:block'
            }
          ].map((e, i) => (
            <div className={`space-y-3 ${e.className}`} key={i}>
              <h3 className='text-center font-extrabold text-2xl'>{e.title}</h3>
              <div className='text-center'>{e.desc}</div>
            </div>
          ))}
        </Carrusel>
      </section>
    </>
  )
}
