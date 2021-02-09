import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup, Spinner } from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import { FastField, Form, Formik } from 'formik'
import InputField from 'custom-fields/InputField'
import SelectField from 'custom-fields/SelectField'
import RandomPhotoField from 'custom-fields/RandomPhotoField'

import * as Yup from 'yup'

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object.isRequired,
  isAddMode: PropTypes.bool,
}

PhotoForm.defaultProps = {
  onSubmit: null,
  initialValues: {},
  isAddMode: false,
}

function PhotoForm(props) {
  const { initialValues, isAddMode } = props;
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required.'),

    categoryId: Yup.number()
    .required('This field is required.')
    .nullable(),

    photo: Yup.string().when('categoryId', {
      is: 3,
      then: Yup.string().required('This field is required.'),
      otherwise: Yup.string().notRequired(),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        // do something
        const { values, errors, touched, isSubmitting} = formikProps;
        console.log({values, errors, touched})

        return (
          <Form>
            <FastField 
              name="title"
              component={InputField}

              label="Title"
              placeholder="Eg: Vjp pr0..."
            />

            <FastField 
              name="categoryId"
              component={SelectField}

              label="Category"
              placeholder="Your photo's category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField 
              name="photo"
              component={RandomPhotoField}

              label="Photo"
            />

            <FormGroup>
              <Button 
                type="submit" 
                color={isAddMode ? "primary" : "success"}
              >
                {isSubmitting && <Spinner size="sm" className="mr-1" />}
                {isAddMode ? 'Add to album' : 'Update photo'}
              </Button>
            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  )
}

export default PhotoForm

