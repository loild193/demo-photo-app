import RandomPhoto from 'components/RandomPhoto';
import PropTypes from 'prop-types'
import { FormGroup, Label } from 'reactstrap';

RandomPhotoField.propTypes = {
  label: PropTypes.string,
}
RandomPhotoField.defaultProps = {
  label: '',
}


function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

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
      />
    </FormGroup>
  )
}

export default RandomPhotoField

