'use server'

import { Resend } from 'resend'

export async function EnviarCorreo(req: formType) {
  'use server'
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const data = await resend.emails.send({
      from: 'WEB COMPANYCACEL <admin@companycacel.com>',
      to: ['gerencia@companycacel.com'],
      subject: 'DATOS DEL FORMULARIO',
      react: (
        <div>
          <h1>DATOS DEL FORMULARIO</h1>
          <div>
            <label>NOMBRE:</label>
            <span>{req.name}</span>
          </div>
          <div>
            <label>CORREO:</label>
            <span>{req.correo}</span>
          </div>
          <div>
            <label>TIPO DOCUMENTO:</label>
            <span>{req.tdocumento}</span>
          </div>
          <div>
            <label>NRO DE DOCUMENTO:</label>
            <span>{req.ndocumento}</span>
          </div>
          <div>
            <label>MONTO DE INVERSIÓN:</label>
            <span>
              {req.tmoneda}
              {req.monto}
            </span>
          </div>
          <div>
            <label>Periodo</label>
            <span>{req.periodo} meses</span>
          </div>
          <div>
            <label>TELÉFONO:</label>
            <span>{req.telefono}</span>
          </div>
          <div>
            <label>ORIGEN DE FONDOS:</label>
            <span>{req.oriegnFondo}</span>
          </div>
          <div>
            <label>INTERES:</label>
            <span>{req.interes}</span>
          </div>
          <div>
            <label>MENSAJE:</label>
            <span>{req.mensaje}</span>
          </div>
        </div>
      )
    })
    if (data.error) {
      console.log(data.error)
      return { status: false, msg: 'El correo no fue recibido!' }
    }
    const res = await resend.emails.send({
      from: 'WEB COMPANYCACEL <admin@companycacel.com>',
      to: [req.correo],
      subject: 'CONFIRMACIÓN DE CORREO',
      react: (
        <div>
          <div>Hola: {req.name}!</div>
          <p>
            Gracias por comunicarte con nosotros! Hemos recibido su correo <span style={{ color: 'green' }}>Satisfactoriamente</span>
          </p>
          <p>Nos comunicaremos pronto con usted.</p>
          <div>
            <label>Atte:</label>
            <span>COMPANY CACEL SAC</span>
          </div>
        </div>
      )
    })
    if (res.error) {
      return { status: false, msg: 'Se extravio el correo de Respuesta!' }
    }
    return { status: true, msg: 'Correo Enviado Correctamente' }
  } catch (e) {
    console.log(e)
    return { status: false, msg: 'Error en el Proceso, Intentelo de nuevo.' }
  }
}
