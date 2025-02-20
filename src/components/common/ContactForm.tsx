import { useState } from 'react'
import { ImSpinner6 } from 'react-icons/im'
import emailjs from '@emailjs/browser'
import { FormData, Errors } from '@mytypes/types'

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [isModalVisible, setModalVisible] = useState(false)
  const [errors, setErrors] = useState<Errors>({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setErrors({ name: '', email: '', message: '' })
    setIsLoading(true)

    const newErrors: Errors = { name: '', email: '', message: '' }
    if (!formData.name) newErrors.name = 'Por favor, introduce un nombre'
    if (!formData.email) newErrors.email = 'Por favor, introduce un email'
    if (!formData.message) newErrors.message = 'Por favor, introduce un mensaje'
    if (Object.values(newErrors).some(error => error !== '')) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      const response = await emailjs.send(
        'service_c1ukcko',
        'template_z3l83pi',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message
        },
        'fr1GtEFEPSO56LFFT'
      )
      if (response.status === 200) {
        setModalVisible(true)
        setFormData({ name: '', email: '', message: '' })
        setIsLoading(false)
      } else {
        alert('Error sending message.')
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      console.error('Error submitting form:', error)
      alert('Failed to send the message. Please try again later.')
    }
  }

  return (
    <div className='contact-form'>
      <div className='contact-form-box'>
        <form onSubmit={handleSubmit} className='form'>
          <div className='form-group'>
            <label htmlFor='name'>Nombre</label>
            <input id='name' type='text' name='name' value={formData.name} onChange={handleChange} autoComplete='off' required />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' value={formData.email} onChange={handleChange} autoComplete='off' required />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Mensaje</label>
            <textarea id='message' name='message' value={formData.message} onChange={handleChange} autoComplete='off' required />
            {errors.message && <p>{errors.message}</p>}
          </div>

          <button type='submit' className='btn-primary'>
            {isLoading ? <ImSpinner6 className='spinner' size={19} /> : 'Enviar mensaje'}
          </button>
        </form>

        {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setModalVisible(false)}>&times;</button>
            <div className="modal-content">
              <h3>¡Mensaje enviado!</h3>
              <p>¡Muchas gracias por contactarnos! Tu mensaje se ha enviado correctamente. Pronto nos pondremos en contacto contigo.</p>
              <button className='btn-secondary' onClick={() => setModalVisible(false)}>Cerrar</button>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}