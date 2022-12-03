import PropTypes from 'prop-types';

const Stack = ({children, pos}) => (
  <div className='stack' style={{
    justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
  }}>
     {children}
  </div>
);

export {Stack};

Stack.propTypes = {
  children: PropTypes.node.isRequired,
}