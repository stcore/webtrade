'use client'
import { round } from 'lodash'
import { useState } from 'react'
import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip } from 'recharts'
import Swal from 'sweetalert2'

export default function SimInversion() {
  const [monto, setMonto] = useState<number>(15000)
  const [t6m, setT6m] = useState<'S/' | '$'>('$')
  const data = [
    {
      period: 3,
      porcent: 7.25
    },
    {
      period: 6,
      porcent: 7.5
    },
    {
      period: 12,
      porcent: 8
    },
    {
      period: 18,
      porcent: 8.5
    },
    {
      period: 24,
      porcent: 9
    }
  ].map(e => {
    let porcent = e.porcent
    if (monto > 1000 && monto < 10000) {
      porcent += 0.5
    }
    if (monto > 10000 && monto < 100000) {
      porcent += 1
    }

    return { ...e, porcent: porcent, value: round((e.period * monto * porcent) / 100 / 12, 2) }
  })

  return (
    <div className='flex flex-col items-center space-y-3 pb-4 lg:p-4'>
      <div className='flex flex-col items-center border rounded-lg p-8 space-y-3'>
        <div className='space-x-2 flex flex-row '>
          <div>
            <input type='radio' name='t6m' value='S/' checked={t6m === 'S/'} onChange={e => setT6m(e.target.value as 'S/' | '$')} />
            <label>SOLES</label>
          </div>
          <div>
            <input type='radio' name='t6m' value='$' checked={t6m === '$'} onChange={e => setT6m(e.target.value as 'S/' | '$')} />
            <label>DOLARES</label>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-1 '>
          <label className='text-sm '>Invierte desde $15,000 ó S/ 50,000</label>
          <input
            className='rounded-lg text-black text-center text-base lg:text-3xl font-semibold'
            type='number'
            defaultValue={monto}
            onWheel={e => {
              //@ts-ignore
              e.target.blur()
            }}
            step={'1000'}
            onChange={e => {
              const value = Number(e.target.value)
              if (isNaN(value)) {
                Swal.fire('ATENCIÓN', 'Ingrese un monto valido', 'warning')
                return false
              }
              if (value > 1000001) {
                Swal.fire('ATENCIÓN', 'Ingrese un menor a $1,000,000', 'warning')
                return false
              }

              setMonto(value)
            }}
          />
        </div>
      </div>
      <ResponsiveContainer width={'100%'} className={'lg:px-40'} height={350}>
        <BarChart data={data} margin={{ top: 15, right: 30, left: 20, bottom: 30 }}>
          <Bar
            dataKey='value'
            className='fill-stone-200 hover:fill-red-800'
            onClick={e => {
              const p = document.getElementById('periodo')
              if (p) {
                //@ts-ignore
                p.value = e.period
              }
            }}
            radius={[8, 8, 0, 0]}
          >
            <LabelList
              dataKey='value'
              position={'top'}
              className='fill-white text-xs md:text-base'
              formatter={(e: number) => `${t6m} ${e.toFixed(2)}`}
            />
            <LabelList
              dataKey='porcent'
              position={'insideTop'}
              className='fill-black text-xs md:text-base'
              formatter={(e: number) => `${e.toFixed(2)}%`}
            />
            <LabelList dataKey='period' position={'bottom'} className='fill-white text-xs md:text-base' formatter={(e: number) => `${e} meses`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p></p>
      <div>
        <a
          className='border rounded-lg px-3 py-2 hover:bg-stone-200 hover:text-black font-extrabold'
          href='#sumbit'
          onClick={e => {
            //@ts-ignore
            const interes = document.getElementById('interes')
            if (interes) {
              //@ts-ignore
              interes.value = 'invertir'
            }
            //@ts-ignore
            const m = document.getElementById('monto')
            if (m) {
              //@ts-ignore
              m.value = monto
            }
            const moneda = document.getElementById('tmoneda')
            if (moneda) {
              //@ts-ignore
              moneda.value = t6m
            }
          }}
        >
          COMENZAR A INVERTIR
        </a>
      </div>
    </div>
  )
}
