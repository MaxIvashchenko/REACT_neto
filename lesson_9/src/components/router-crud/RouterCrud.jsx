import React from 'react'

import './index.css'
import ContProvider from './ContProvider'
import Crud from './Crud'



function RouterCrud() {
  return (
    <ContProvider>
      <Crud />
    </ContProvider>
  );
}

export default RouterCrud;
