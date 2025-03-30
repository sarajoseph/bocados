import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FormData, Errors } from '@mytypes/types'
import { Modal } from '@components/common/Modal'
import { FormGroup } from '@components/form/FormGroup'
import { Input } from '@components/form/Input'
import { Textarea } from '@components/form/Textarea'
import { Form } from '@components/form/Form'
import { SubmitButton } from '@components/form/SubmitButton'

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
    <Form handleSubmit={handleSubmit}>
      <div className='form-body'>
        <FormGroup label='Nombre' id='name'>
          <Input id='name' type='text' value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </FormGroup>
        <FormGroup label='Email' id='email'>
          <Input id='email' type='email' value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </FormGroup>
        <FormGroup label='Mensaje' id='message'>
          <Textarea id='message' value={formData.message} onChange={handleChange} />
          {errors.message && <p>{errors.message}</p>}
        </FormGroup>
      </div>
      <SubmitButton isLoading={isLoading} text='Enviar mensaje' />

      {isModalVisible &&
      <Modal onClose={() => setModalVisible(false)}>
        <h3>¡Mensaje enviado!</h3>
        <p>¡Muchas gracias por contactarnos! Tu mensaje se ha enviado correctamente. Pronto nos pondremos en contacto contigo.</p>
      </Modal>
      }
    </Form>
  )
}