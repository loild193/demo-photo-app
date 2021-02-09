import Banner from 'components/Banner'
import PhotoForm from 'features/Photo/components/PhotoForm'
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

import './styles.scss'

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const editedPhoto = useSelector(state => state.photos.find(photo => photo.id === +photoId));
  const isAddMode = !photoId;

  const initialValues = isAddMode ? 
  {
    title: '',
    categoryId: null,
    photo: '',
  }
  : editedPhoto;

  const handleSubmit = (values) => {
    if (isAddMode) {
      const action = addPhoto(values);
      dispatch(action);
    }
    else {
      const action = updatePhoto(values);
      dispatch(action);
    }
    history.push('/photos');
  }

  return (
    <div className="photo-edit">
      <Banner title="Good night <3" />

      <div className="photo-edit__form">
        <PhotoForm 
          onSubmit={handleSubmit} 
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  )
}

AddEditPage.propTypes = {}

export default AddEditPage

