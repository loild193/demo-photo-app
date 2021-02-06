import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap';

RandomPhotoField.propTypes = {
  label: PropTypes.string,
}
RandomPhotoField.defaultProps = {
  label: '',
}


function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  }

  return (
    <FormGroup>
      { label && <Label for={name}>{label}</Label> }

      <RandomPhoto 
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onBlur={onBlur}

        className={showError ? 'is-invalid' : ''}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}

export default RandomPhotoField

