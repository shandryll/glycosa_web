import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import axios from 'axios'

import Main from '../../components/template/Main'

const headerProps = {
  icon: 'chart-bar',
  title: 'Estatísticas',
  subtitle: 'Veja todas as informações do paciente'
}

const initialValues = {
  searchInfo: ''
}

class Statistic extends Component {

  onSubmit = (props) => {
    try {
      axios.get(`http://www.insoftsystem.com/glycosaTools/assinaturadigital.asmx`)
        .then(res => {
          console.log(res)
        }).catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="app">
        <Main {...headerProps}>

          <Formik initialValues={initialValues} onSubmit={this.onSubmit}>
            {(props) => (
              <Form>
                <button type="submit" className="btn btn-action btn-primary">Pesquisar</button>
              </Form>
            )}
          </Formik>

        </Main>
      </div>
    )
  }
}

export default Statistic
