import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';

import Banner from 'components/Banner';
import Images from 'constants/images';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
function MainPage(props) {
  const photos = useSelector(state => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  }

  const handlePhotoEditClick = (photo) => {
    history.push(`photos/${photo.id}`);
  }

  return (
    <div className="photo-main">
      <Banner title="Good luck :v" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList 
          photoList={photos}
          onPhotoRemoveClick={handlePhotoRemoveClick}
          onPhotoEditClick={handlePhotoEditClick}
        />
      </Container>
    </div>
  )
}

MainPage.propTypes = {}

export default MainPage

