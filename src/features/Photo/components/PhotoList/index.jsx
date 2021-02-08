import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
  photoList: PropTypes.array.isRequired,
  onPhotoRemoveClick: PropTypes.func,
}
PhotoList.defaultProps = {
  photoList: [],
  onPhotoRemoveClick: null,
}

function PhotoList(props) {
  const { photoList, onPhotoRemoveClick } = props;

  const handlePhotoRemoveClick = (photo) => {
    onPhotoRemoveClick && onPhotoRemoveClick(photo);
  }

  return (
    <Row>
      {
        photoList.map(photo => (
          <Col key={photo.title} xs="12" md="6" lg="3">
            <PhotoCard 
              photo={photo}
              onRemoveClick={handlePhotoRemoveClick}
            />
          </Col>
        ))
      }
    </Row>
  )
}

export default PhotoList

