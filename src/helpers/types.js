import PropTypes from 'prop-types'

export const columnSizeType = PropTypes.oneOfType([PropTypes.string, PropTypes.number])
export const CSSPropertyType = PropTypes.oneOfType([PropTypes.string, PropTypes.object])