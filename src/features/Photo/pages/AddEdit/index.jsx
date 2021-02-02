import React from 'react'
import Banner from '../../../../components/Banner'
import PhotoForm from '../../components/PhotoForm'

import './styles.scss'

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Good night <3" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={values => console.log('Form submit: ', values)} />
      </div>
    </div>
  )
}

AddEditPage.propTypes = {}

export default AddEditPage

