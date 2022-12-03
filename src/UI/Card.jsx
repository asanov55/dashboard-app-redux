import PropTypes from 'prop-types';

const Card = ({children, isFeatured, className}) => {
  return (
    <div
      className={
        `card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`
      }
    >
      {children}
    </div>
  )
}

export {Card};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isFeatured: PropTypes.bool,
  className: PropTypes.string,
}