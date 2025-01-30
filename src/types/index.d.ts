type formType = {
  name: string
  interes: 'comprar' | 'vender' | 'invertir'
  tdocumento?: string
  periodo?: string
  tmoneda?: string
  ndocumento?: string
  monto?: number
  telefono: string
  oriegnFondo?: string
  correo: string
  mensaje: string
  terminos?: 'on'
}

type resType = { status: boolean; msg: string; data?: unknown }
