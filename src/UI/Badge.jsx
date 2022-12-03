import PropTypes from 'prop-types';
import {ReactComponent as Remove} from '../assets/images/icon-remove.svg';

const Badge = ({
  variant = 'basic',
  colorScheme = 'light',
  children,
  onClear,
  onClick,
}) => (
  <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
    <span>
      {children}
    </span>
    {variant === 'clearable' && (
      <div className='badge-remover' onClick={onClear}>
        <Remove />
      </div>
    )}
  </div>
);

export {Badge};

Badge.propTypes = {
  variant: PropTypes.oneOf(['basic', 'clearable', 'rounded']),
  colorScheme: PropTypes.oneOf(['light', 'primary', 'dark']),
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func,
}