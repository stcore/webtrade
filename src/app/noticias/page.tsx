import { Carrusel } from '@/comp'
import dayjs from 'dayjs'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BiComment, BiLike, BiPhotoAlbum } from 'react-icons/bi'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
export const metadata: Metadata = {
  title: 'Noticias',
  description: 'Noticias de Comapany Cacel'
}
export default async function page() {
  const news: {
    content: { title: string; date: string; content: string; tickers: string; image: string; link: string; author: string; site: string }[]
    pageSize: number
    pageNumber: number
  } = await fetch('https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=5&apikey=XVHOmlkxB4mdcezQBmICYB2IsDwT1nh4').then(r => r.json())
  const peru: {
    totalArticles: number
    articles: { title: string; description: string; content: string; url: string; image: string; publishedAt: string; source: any }[]
  } = await fetch('https://gnews.io/api/v4/search?q=example&apikey=e9835411ef0d24f0b1be95277b93b40e').then(r => r.json())

  return (
    <>
      <section className='mt-20 p-8 md:px-0 bg-[url("/assets/noticias/img_noti.png")] bg-cover'>
        <div className='container mx-auto'>
          <h1 className='text-center text-2xl font-extrabold'>Trading</h1>
          <p className='text-center'>Más recientes cambios de los principales metales</p>
          <Carrusel className='flex md:grid md:grid-cols-4 gap-4'>
            {[
              { value: 8556.0, trend: -0.08, label: 'COBRE', className: '', svg: { className: '' } },
              { value: 2237.5, trend: 0.34, label: 'ALUMINIO', className: '', svg: { className: 'border-green-300' } },
              { value: 0, trend: 0, label: 'BRONCE', className: '', svg: { className: 'border-yellow-300' } },
              { value: 2158.0, trend: -0.19, label: 'PLOMO', className: '', svg: { className: 'border-orange-300' } }
            ].map((e, i) => (
              <div key={i} className={e.className}>
                <div>
                  <span>{e.label}</span>
                  <span className={e.trend < 0 ? 'text-red-600' : 'text-green-600'}>
                    {e.trend < 0 ? <FaArrowDown className='block' /> : <FaArrowUp className='block' />} {e.trend}%
                  </span>
                </div>
                <div>{e.value}</div>
                <svg xmlns='http://www.w3.org/2000/svg' width='278' height='80' viewBox='0 0 278 80' fill='none' className={e.svg.className}>
                  <g filter='url(#filter0_d_234_2640)'>
                    <path
                      d='M266.977 1.55713C266.977 1.55713 253.433 31.7251 241.583 31.7251C229.732 31.7251 224.653 14.2594 209.417 14.2594C194.18 14.2594 175.558 58.7174 160.321 58.7174C145.085 58.7174 126.463 31.7251 116.305 31.7251C106.147 31.7251 94.2969 52.3663 75.6746 52.3663C59.0972 52.3663 59.0972 41.8554 53.6664 44.6851C48.2357 47.5148 43.1729 47.5546 34.8762 38.9748C26.5794 30.395 20.3942 47.4638 11.343 38.9748'
                      stroke='url(#paint0_linear_234_2640)'
                      strokeWidth='2.87731'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_234_2640'
                      x='0.31328'
                      y='0.118164'
                      width='277.693'
                      height='79.2201'
                      filterUnits='userSpaceOnUse'
                      colorInterpolationFilters='sRGB'
                    >
                      <feFlood floodOpacity='0' result='BackgroundImageFix' />
                      <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                      <feOffset dy='9.59102' />
                      <feGaussianBlur stdDeviation='4.79551' />
                      <feColorMatrix type='matrix' values='0 0 0 0 0.0456816 0 0 0 0 0.0410428 0 0 0 0 0.12686 0 0 0 0.54362 0' />
                      <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_234_2640' />
                      <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_234_2640' result='shape' />
                    </filter>

                    <linearGradient id='paint0_linear_234_2640' x1='109.091' y1='-13.5763' x2='140.999' y2='95.5514' gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#A330FF' stopOpacity='0.01' />
                      <stop offset='0.393247' stopColor='#BC3DCB' />
                      <stop offset='1' stopColor='#E3507A' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            ))}
          </Carrusel>
        </div>
      </section>
      <section className='p-8 md:px-0 container mx-auto space-y-3'>
        <h2 className='text-center text-2xl font-extrabold'>Noticias</h2>
        <p className='text-center hidden md:block'>Principales noticias del medio</p>
        <div className='hidden w-full md:flex'>
          <div className='w-[80%] bg-[url("/assets/noticias/portada-1.png")] bg-cover p-8 space-y-4'>
            <div>Art & Design</div>
            <h2 className='text-4xl'>A Little Cottage Where You Can Smell the Natural History of Perfume</h2>
            <Link href={''} className='rounded-full bg-blue-500 px-4 py-2 flex space-x-2 w-fit'>
              <BiPhotoAlbum />
              <span>Ver fotos</span>
              <span>26</span>
            </Link>
            <p>The same theme </p>
            <br />
            <div className='grid grid-cols-3 gap-3 pt-6 '>
              {[{}, {}, {}].map((e, i) => (
                <div key={i} className='flex space-x-2'>
                  <Image width={50} height={50} alt='base' src={'/assets/noticias/miniat.png'} />
                  <div className='flex-grow text-xs'>
                    <p>Reimagining a Nazi Bunker</p>
                    <span>34 photos</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-[20%]'>
            <div className='bg-[url("/assets/noticias/portada-2.png")] bg-cover p-4'>
              <div>Education</div>
              <p>It’s a Diverse City, but Most Big Museum Boards Are Strikingly White</p>
            </div>
            <div className='bg-[url("/assets/noticias/portada-3.png")] bg-cover p-4'>
              <div>Destinations</div>
              <p>10 Travel Essentials That Will Help Make Flying More Bearable</p>
            </div>
          </div>
        </div>
        <div className='md:flex  text-xs'>
          <div className='md:w-[80%] pr-4'>
            <div className='md:bg-[#262D33] p-4 rounded-md'>
              <div className=' grid grid-cols-1 divide-y divide-gray-600'>
                {peru.articles.map((e, i) => {
                  return (
                    <div key={i} className='flex space-x-4 py-2'>
                      <img className='w-20 md:w-80' src={e.image} alt='image' />
                      <div>
                        <div className='hidden md:block'>{}</div>
                        <a target='_blank' href={e.url}>
                          <h3>{e.title}</h3>
                        </a>
                        <p className='hidden md:block text-neutral-400'>{e.description}</p>
                        <div className='md:flex space-x-3'>
                          <div className='text-neutral-400'>{dayjs(e.publishedAt).format('DD,MMM')}</div>
                          <div className='hidden md:flex text-neutral-400'>
                            <BiComment /> <span>4354</span>
                          </div>
                          <div className='hidden md:flex text-neutral-400'>
                            <BiLike /> <span>453</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='hidden w-[20%] h-fit md:block bg-[#262D33] rounded-md'>
            <div className='text-center py-3'>RECOMENDADO PARA TI</div>
            <hr className='border-gray-600 ' />
            <div className='px-4 divide-y divide-gray-600'>
              {news.content.map((e, i) => (
                <a className='relative flex space-x-2 py-4' target='_blank' href={e.link} key={i}>
                  <Image alt='img' width={50} height={50} src={e.image} />
                  <div className='z-10'>
                    <p>{e.title}</p>
                    <span>{dayjs(e.date).format('DD[ de ] MMM')}</span>
                  </div>
                  <div className='absolute text-5xl right-0 text-gray-700 font-extrabold'>{i + 1}</div>
                </a>
              ))}
            </div>
            <hr className='border-gray-600' />
            <div className='py-3 text-center'>LEER MAS</div>
          </div>
        </div>
        <hr className='border-gray-600 md:hidden' />
        <div className='flex justify-center md:hidden'>
          <Link className='border rounded-lg px-6 py-2' href={{ search: String(news.pageNumber + 1) }}>
            Cargar Más
          </Link>
        </div>
      </section>
    </>
  )
}
