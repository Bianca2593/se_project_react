import React, { useEffect, useState } from 'react'
import ModalWithFrom from '../ModalWithForm/ModalWithForm'
import { useFormAndValidation } from '../../hooks/useFormAndValidation'

function LoginModal({
  isOpen,
  onClose,
  onLogin,
  isLoading,
  handleSignUpClick,
}) {
  const { values, handleChange, isValid, errors, resetForm } =
    useFormAndValidation()
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    if (isOpen) {
      resetForm()
    }
  }, [isOpen, resetForm])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoginError('')
    onLogin(values).catch((err) => {
      setLoginError('Email or password incorrect')
    })
  }

  return (
    <ModalWithFrom
      title="Log In"
      buttonText={isLoading ? 'Logging In...' : 'Log In'}
      formType="login"
      isOpen={isOpen}
      closeActiveModal={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isValid}
      noValidate
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          required
          placeholder="Email"
          value={values.email || ''}
          onChange={handleChange}
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          required
          placeholder="Password"
          minLength={8}
          maxLength={16}
          value={values.password || ''}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <button
        onClick={handleSignUpClick}
        type="button"
        className="modal__login-btn"
      >
        or Sign Up
      </button>

      {/* Login error message*/}
      {loginError && <span className="modal__error">{loginError}</span>}
    </ModalWithFrom>
  )
}

export default LoginModal