import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Banner from 'components/Banner';
import Images from 'constants/images';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
function MainPage(props) {
  const photos = useSelector(state => state.photos);
  const dispatch = useDispatch();

  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  }

  return (
    <div className="photo-main">
      <Banner title="Good luck :v" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add" >Add new photo</Link>
        </div>

        <PhotoList 
          photoList={photos}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  )
}

MainPage.propTypes = {}

export default MainPage

