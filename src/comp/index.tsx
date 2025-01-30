'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import { AnchorHTMLAttributes, FormHTMLAttributes, ReactNode, RefAttributes, useEffect, useRef, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Swal from 'sweetalert2'

export default function Navigation({ children }: { children: ReactNode }) {
  return (
    <div
      tabIndex={1}
      className='md:hidden'
      onFocus={e => {
        e.preventDefault()
        e.target.lastElementChild?.classList.remove('hidden')
      }}
      onBlur={e => {
        e.preventDefault()
        setTimeout(() => {
          e.target.lastElementChild?.classList.add('hidden')
        }, 220)
      }}
    >
      <BiMenuAltRight size={40} className='fill-white' />
      <ul
        className='hidden absolute top-20 right-0 w-full bg-zinc-800  z-10 divide-y divide-dashed divide-zinc-500 border-y border-dashed border-zinc-500'
        onClick={e => e.target}
      >
        {children}
      </ul>
    </div>
  )
}

export function Header({ children }: { children: ReactNode }) {
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      const threshold = 20
      setIsSticky(offset >= threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <header className={`fixed top-0 left-0 w-full z-20 ${isSticky ? 'bg-zinc-800 bg-opacity-95' : ''}`}>{children}</header>
}

export function Carrusel2() {
  const [number, setNumber] = useState(0)
  const data = [
    { value: '+7', label: 'DIVERSOS METALES' },
    { value: '+250', label: 'CLIENTES SATISFECHOS' },
    { value: '+5', label: 'PAISES DE EXPORTACIÓN' },
    { value: '+5T', label: 'TONELADAS EXPORTADAS' },
    { value: '100%', label: 'ECONOMIA SOSTENIBLE' }
  ]
  return (
    <section className='bg-red-600 h-60' style={{ background: 'linear-gradient(113deg, #B22129 0%, #9B0008 100%)' }}>
      <div className='w-full h-full grid place-content-center relative md:grid-cols-5 md:divide-x container mx-auto'>
        {data.map((e, i) => (
          <div key={i} className={`md:w-full px-8 flex flex-col items-center ${number === i ? 'flex' : 'md:flex hidden'}`}>
            <div className='text-6xl md:text-4xl font-extrabold'>{e.value}</div>
            <div className='text-4xl md:text-3xl text-center'>{e.label}</div>
          </div>
        ))}
        <button
          className='absolute top-1/2 -translate-y-1/2 md:hidden'
          onClick={e => {
            setNumber(number === 0 ? data.length - 1 : number - 1)
          }}
        >
          <FiArrowLeft size={40} />
        </button>
        <button
          className='absolute right-0 top-1/2 -translate-y-1/2 md:hidden'
          onClick={e => {
            setNumber(number === data.length - 1 ? 0 : number + 1)
          }}
        >
          <FiArrowRight size={40} />
        </button>
        <div className={`flex space-x-4 py-4 justify-center md:hidden`}>
          {data.map((e, i) => (
            <span key={i} onClick={e => setNumber(i)} className={`rounded-full h-4 w-4 bg-white ${number === i ? '' : 'bg-opacity-40'} `} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Carrusel({ children, className = '', arrow = false }: { children: ReactNode[]; className?: string; arrow?: boolean }) {
  const [number, setNumber] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <>
      <div
        ref={ref}
        onScroll={e => {
          if (ref.current) {
            setNumber(Math.round(ref.current.scrollLeft / ref.current.offsetWidth))
          }
        }}
        className={`${className} overflow-x-auto scroll-smooth snap-mandatory overscroll-none snap-x md:h-full container mx-auto md:py-8 [&_*]:snap-center [&_*]:min-w-full [&_*]:md:min-w-0`}
      >
        {children}
      </div>
      {arrow && (
        <>
          <button
            className='absolute top-1/2 -translate-y-1/2 md:hidden'
            onClick={e => {
              let n = number === 0 ? children.length - 1 : number - 1
              ref.current?.scroll({ left: innerWidth * n })
            }}
          >
            <FiArrowLeft size={40} />
          </button>
          <button
            className='absolute right-0 top-1/2 -translate-y-1/2 md:hidden'
            onClick={e => {
              let n = number === children.length - 1 ? 0 : number + 1
              ref.current?.scroll({ left: innerWidth * n })
            }}
          >
            <FiArrowRight size={40} />
          </button>
        </>
      )}

      <div className={`flex space-x-4 h-[15%] justify-center  md:hidden`}>
        {Array(children.length)
          .fill(1)
          .map((e, i) => (
            <span
              key={i}
              className={`rounded-full h-4 w-4 bg-white ${number === i ? '' : 'bg-opacity-40'} `}
              onClick={() => {
                setNumber(i)
                ref.current?.scroll({ left: innerWidth * i })
              }}
            />
          ))}
      </div>
    </>
  )
}

export function LinkSearch({ href, children }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const path = usePathname()
  return (
    <Link href={href} className={`${path === href ? 'text-red-600' : ''} w-full h-full  flex items-center justify-center`}>
      {children}
    </Link>
  )
}

export function Form({
  action,
  className,
  children
}: FormHTMLAttributes<HTMLFormElement> & {
  action: (data: formType) => Promise<resType>
}) {
  const segment = useSelectedLayoutSegment()
  const ref = useRef<HTMLFormElement>(null)
  return (
    <form
      ref={ref} /*@ts-ignore*/
      action={form => {
        //@ts-ignore
        const data = Object.fromEntries(form) as formType
        if (!data.monto && segment === 'simulacion') {
          return Swal.fire('Atención', 'Seleccione un periodo de preferencia y aplique los cambios.', 'warning')
        }
        if (!data.terminos) {
          return Swal.fire('Atención', 'Acepte los Terminos y Condiciones', 'error')
        }
        document.querySelector('#loading')?.classList.toggle('hidden')
        action(data)
          .then(a => {
            document.querySelector('#loading')?.classList.toggle('hidden')
            if (!a.status) {
              return Swal.fire('Atención', a.msg, 'error')
            }
            ref.current?.reset()
            Swal.fire('Exitoso', a.msg, 'success')
          })
          .catch(e => {
            Swal.fire('Atencion', 'error en el Proceso', 'error')
            document.querySelector('#loading')?.classList.toggle('hidden')
          })
      }}
      className={className}
    >
      {children}
    </form>
  )
}
