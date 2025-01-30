import Navigation, { Header, LinkSearch } from '@/comp'
import Contactos from '@/comp/Contactos'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineLoading } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { MdAccountBox, MdStorefront } from 'react-icons/md'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Company Cacel',
  description: 'Pagina Web de Company Cacel'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const data: { title: string; href: string }[] = [
    { title: 'Nosotros', href: '/nosotros' },
    { title: 'Comercialización', href: '/comercializacion' },
    { title: 'Exportación', href: '/exportacion' },
    // { title: 'Noticias', href: '/noticias' }
  ]

  return (
    <html lang='es'>
      <body className={inter.className}>
        <div className='text-white w-full md:text-xl '>
          <Header>
            <div className='container mx-auto'>
              <div className='h-20 w-full flex px-[1.5rem] items-center'>
                <div className='flex basis-0 flex-grow flex-col'>
                  <Link href={'/'}>
                    <Image width={150} height={30} alt='logo' src={'/assets/trading.png'} />
                  </Link>
                  {/* <div className='text-xs hidden md:block'>Corporacion Americana de Comercio Empresarial Libre</div> */}
                </div>
                <div className='space-x-6 basis-0 flex-grow hidden md:flex'>
                  {data.map(({ title, href }, i) => (
                    <LinkSearch key={i} href={href} className='w-full h-full  flex items-center justify-center'>
                      {title}
                    </LinkSearch>
                  ))}

                </div>
                <div className='mr-4 flex-nowrap'>+1 (305)513-1913</div>
                <div className='flex space-x-2 basis-0 flex-grow justify-end'>
                  <Image width={100} height={20} alt='logo' src={'/assets/eeuu.png'} />
                  <Navigation>
                    {data.map(({ title, href }, i) => (
                      <li key={i} className='h-14 w-full font-semibold text-3xl text-center'>
                        <Link href={href} className='w-full h-full  flex items-center justify-center'>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </Navigation>
                </div>
              </div>
            </div>
          </Header>
          <main>{children}</main>
          <div id='loading' className={`fixed hidden bg-black opacity-60  h-screen w-full top-0  z-40 `}>
            <div className='h-screen w-full grid place-content-center '>
              <div className='animate-spin'>
                <AiOutlineLoading size={150} />
              </div>
            </div>
          </div>
          <section id='sumbit' className='container mx-auto'>
            <hr className='border-gray-600 border-2' />
          </section>
          <Contactos />
          <footer className='bg-[url("/assets/inicio/IMAGEN_FOOTER.png")]'>
            <div className='top-0 py-4 container mx-auto p-8 md:px-0 space-y-6 md:space-y-20'>
              <div className='flex justify-center'>
                <Image width={150} height={30} alt='logo' className='hidden md:block' src={'/assets/logo-op.svg'} />
              </div>
              <h2 className='text-center'>Corporacion Americana de Comercio Empresarial Libre</h2>
              <div className='flex justify-center space-x-16'>
                <a target='_blank'>
                  <FaFacebook size={40} />
                </a>
                <a target='_blank' href='https://www.linkedin.com/company/98146480/admin/feed/posts/'>
                  <FaLinkedin size={40} />
                </a>
                <a target='_blank'>
                  <FaInstagram size={40} />
                </a>
              </div>
              <p className='text-center'>Copyright © 2024 Todos los Derechos Reservados - CACEL</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
