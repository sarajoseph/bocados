import { useState } from 'react'
import { FormGroup } from '@components/form/FormGroup'
import { Input } from '@components/form/Input'
import { Form } from '@components/form/Form'
import { useLogin } from '@hooks/useLogin'
import { Spinner } from '@components/common/Spinner'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isSuccess, isLoading, isError, errorMessage } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <>
    <h1 className='admin-panel-page--title'>Panel de administración - Inicio de sesión</h1>
    <Form size='xs' handleSubmit={handleSubmit}>
      <FormGroup label='Email' id='email'>
        <Input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup label='Contraseña' id='password'>
        <Input id='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
      </FormGroup>
      {isError && !isLoading && <p>{errorMessage}</p>}
      {isSuccess && <p>Logged in successfully</p>}
      <button type='submit' className='btn-primary'>
        {isLoading ? <Spinner /> : 'Entrar'}
      </button>
    </Form>
    </>
  )
}