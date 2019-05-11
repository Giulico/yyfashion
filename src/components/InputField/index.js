import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Styles
import style from './InputField.module.css'

const InputField = ({
  name,
  id = name,
  label,
  type,
  onChange,
  required,
  hasContent
}) => {
  const classes = classNames({
    [style.root]: true,
    [style.pinned]: hasContent
  })
  return (
    <div className={classes}>
      {type === 'textarea' ? (
        <textarea
          name={name}
          id={id}
          className={style.textarea}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          className={style.input}
          name={name}
          type={type}
          id={id}
          onChange={onChange}
          required={required}
        />
      )}
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool
}

export default InputField
