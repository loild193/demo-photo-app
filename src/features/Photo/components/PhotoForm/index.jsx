import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import Select from 'react-select'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import Images from 'constants/images'

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Vjp pr0..." />
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">Category</Label>
        <Select 
          id="categoryId"
          name="categoryId"

          placeholder="Your photo's category?"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">Category</Label>

        <div>
          <Button type="button" outline color="primary">
            Random a photo
          </Button>
        </div>
        <div>
          <img 
            width="200px" 
            height="200px" 
            src={Images.BLUE_BG}
            alt="Random"
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Button color="primary">Add to album</Button>
      </FormGroup>
    </Form>
  )
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
  onSubmit: null,
}

export default PhotoForm

