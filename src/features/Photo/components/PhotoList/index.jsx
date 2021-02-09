import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
  photoList: PropTypes.array.isRequired,
  onPhotoRemoveClick: PropTypes.func,
  onPhotoEditClick: PropTypes.func,
}
PhotoList.defaultProps = {
  photoList: [],
  onPhotoRemoveClick: null,
  onPhotoEditClick: null,
}

function PhotoList(props) {
  const { photoList, onPhotoRemoveClick, onPhotoEditClick } = props;

  const handlePhotoRemoveClick = (photo) => {
    onPhotoRemoveClick && onPhotoRemoveClick(photo);
  }

  const handlePhotoEditClick = (photo) => {
    onPhotoEditClick && onPhotoEditClick(photo);
  }

  return (
    <Row>
      {
        photoList.map(photo => (
          <Col key={photo.title} xs="12" md="6" lg="3">
            <PhotoCard 
              photo={photo}
              onRemoveClick={handlePhotoRemoveClick}
              onEditClick={handlePhotoEditClick}
            />
          </Col>
        ))
      }
    </Row>
  )
}

export default PhotoList

