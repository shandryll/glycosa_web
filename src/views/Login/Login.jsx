import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Logo from '../../assets/img/glycosa-icon.png'
import FormikControl from '../../components/formik/FormikControl'

const initialValues = {
  name: '',
  password: ''
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório')
})

function Login(props) {
  let history = useHistory();

  const onSubmit = (props) => {
    history.push('/')
  }

  return (
    <React.Fragment>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props) => (

          <div className="container">
            <div className="full-height">
              <div className="user_card">

                <div className="brand_logo_container">
                  <img src={Logo} className="brand_logo" alt="Logo" />
                </div>

                <Form>
                  <div className="input-group mb-3">
                    <FormikControl control='input' type='text' label='Nome *' name='name' className='form-control' />
                  </div>
                  <div className="input-group mb-2">
                    <FormikControl control='input' type='password' label='Senha *' name='password' className='form-control' />
                  </div>
                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button type="submit" className="btn btn-block btn-danger">Entrar</button>
                  </div>
                </Form>

              </div>
            </div>
          </div>

        )}
      </Formik>

    </React.Fragment>
  )
}

export default Login
