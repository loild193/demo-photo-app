import Banner from 'components/Banner'
import PhotoForm from 'features/Photo/components/PhotoForm'
import { addPhoto } from 'features/Photo/photoSlice';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

import './styles.scss'

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    console.log(values);
    const action = addPhoto(values);
    dispatch(action);

    history.push('/photos');
  }

  return (
    <div className="photo-edit">
      <Banner title="Good night <3" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

AddEditPage.propTypes = {}

export default AddEditPage

