import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types'
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  lable: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
}
SelectField.defaultProps = {
  lable: '',
  placeholder: '',
  disabled: false,
  options: [],
}

function SelectField(props) {
  const {
    field, form,
    label, placeholder, disabled, options
  } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOpion = options.find(option => option.value === value);

  const handleSelectedOptionsChange = (selectedOpion) => {
    const selectedValue = selectedOpion ? selectedOpion.value : selectedOpion;

    const changeEvent = {
      target: {
        name,
        value: selectedValue,
      }
    };

    field.onChange(changeEvent);
  }

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select 
        id={name}
        {...field}
        value={selectedOpion}
        onChange={handleSelectedOptionsChange}

        placeholder={placeholder}
        isDisabled={disabled}
        options={options}

        className={showError ? 'is-invalid' : ''}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}

export default SelectField

