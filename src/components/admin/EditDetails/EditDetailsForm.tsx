import { Form } from '@components/form/Form'
import { FormGroup } from '@components/form/FormGroup'
import { Input } from '@components/form/Input'
import { SubmitButton } from '@components/form/SubmitButton'
import { Textarea } from '@components/form/Textarea'
import { useEditDetails } from '@hooks/useEditDetails'
import { Toast } from '@components/common/Toast'

export const EditDetailsForm = () => {
  const {
    name, setName,
    address, setAddress,
    phone, setPhone,
    email, setEmail,
    town, setTown,
    city, setCity,
    zipCode, setZipCode,
    description, setDescription,
    aboutUs, setAboutUs,
    timetable, setTimetable,
    isLoading,
    successMessage,
    errorMessage,
    handleSubmit
  } = useEditDetails()

  return (
    <Form size='md' adminForm={true} handleSubmit={handleSubmit}>
      <div className='form-body grid'>
        <FormGroup label='Nombre' id='name'>
          <Input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup label='Dirección' id='address'>
          <Input id='address' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormGroup>
        <FormGroup label='Teléfono' id='phone'>
          <Input id='phone' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormGroup>
        <FormGroup label='Email' id='email'>
          <Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup label='Población' id='town'>
          <Input id='town' type='text' value={town} onChange={(e) => setTown(e.target.value)} />
        </FormGroup>
        <FormGroup label='Ciudad' id='city'>
          <Input id='city' type='text' value={city} onChange={(e) => setCity(e.target.value)} />
        </FormGroup>
        <FormGroup label='Código postal' id='zipcode'>
          <Input id='zipcode' type='text' value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </FormGroup>
        <FormGroup label='Descripción' id='description'>
          <Textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormGroup>
        <FormGroup label='Sobre nosotros' id='aboutus'>
          <Textarea id='aboutus' value={aboutUs} onChange={(e) => setAboutUs(e.target.value)} />
        </FormGroup>
        <div className='timetable'>
          <h2 className='timetable-title'>Horario</h2>
          <div className='timetable-content'>
          {timetable && (
            Object.keys(timetable).map((key) => {
              const k = Number(key)
              const timetableEntry = timetable[k]
              return (
              <div key={'timetable-'+k} className='card timetable-day'>
                <h3 className='timetable-day-title'>{timetableEntry.day}</h3>
                <FormGroup key={'timetable-'+k+'-open'} label='Hora de apertura' id={'timetable-'+k+'-open'}>
                  <Input
                    id={'timetable-'+k+'-open'}
                    type='text'
                    value={timetableEntry.open}
                    onChange={(e) =>
                      setTimetable((prev) => ({
                        ...prev,
                        [k]: { ...prev[k], open: e.target.value }
                      }))
                    }
                  />
                </FormGroup>
                <FormGroup key={'timetable-'+k+'-close'} label='Hora de cierre' id={'timetable-'+k+'-close'}>
                  <Input
                    id={'timetable-'+k+'-close'}
                    type='text'
                    value={timetableEntry.close}
                    onChange={(e) =>
                      setTimetable((prev) => ({
                        ...prev,
                        [k]: { ...prev[k], close: e.target.value }
                      }))
                    }
                  />
                </FormGroup>
              </div>
              )
            })
          )}
          </div>
        </div>
      </div>
      <SubmitButton isLoading={isLoading} text='Guardar' className='btn-admin' />
      {successMessage && <Toast message={successMessage} />}
      {errorMessage && <Toast message={errorMessage} type='error' />}
    </Form>
  )
}