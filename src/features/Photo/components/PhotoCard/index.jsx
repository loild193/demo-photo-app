import PropTypes from 'prop-types'
import { Button } from 'reactstrap';
import './PhotoCard.scss';

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired,
  onRemoveClick: PropTypes.func,
}
PhotoCard.defaultProps = {
  photo: {},
  onRemoveClick: null,
}

function PhotoCard(props) {
  const { photo, onRemoveClick } = props;

  const handleRemoveClick = (photo) => {
    onRemoveClick && onRemoveClick(photo);
  }

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="m" color="light">
              Edit
            </Button>
          </div>

          <div>
            <Button outline size="m" color="danger" onClick={() => handleRemoveClick(photo)}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard

