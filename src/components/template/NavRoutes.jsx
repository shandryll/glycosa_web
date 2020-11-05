import React from 'react'

import NavItems from './NavItems'
import NavTree from './NavTree'

export default (props) => {
  return (
    <React.Fragment>
      <NavItems path='/statistic' icon='chart-bar' label='Estatísticas' />

      {/* <NavTree icon='user-lock' label='Permissões'
        subItems={[
          { path: '/permission-add', label: 'Adicionar permissão' },
          { path: '/permission-list', label: 'Lista de permissões' }
        ]} /> */}

      <NavItems path='/sign-in' icon='sign-out-alt' label='Sair' />
    </React.Fragment>
  )
}
