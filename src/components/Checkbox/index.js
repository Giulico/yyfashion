import React from 'react'
import PropTypes from 'prop-types'

// Styles
import style from './Checkbox.module.css'

const Checkbox = ({ name, id = name, children, onChange, required }) => {
  return (
    <div className={style.root}>
      <input
        className={style.input}
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        required={required}
      />
      <label className={style.label} htmlFor={id}>
        {children}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func,
  required: PropTypes.bool
}

export default Checkbox
