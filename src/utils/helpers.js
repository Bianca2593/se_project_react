export function setButtonText(button, isLoading, defaultText, loadingText) {
  if (!button) return
  button.textContent = isLoading ? loadingText : defaultText
}

export function handleSubmitButton(
  setIsLoading,
  asyncAction,
  { event = null, loadingText = 'Adding...', resetForm = true } = {}
) {
  if (event?.preventDefault) event.preventDefault()

  const button = event?.submitter
  const defaultText = button?.textContent

  setIsLoading(true)
  setButtonText(button, true, defaultText, loadingText)

  return asyncAction()
    .then(() => {
      if (resetForm && event?.target?.reset) {
        event.target.reset()
      }
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(button, false, defaultText, loadingText)
      setIsLoading(false)
    })
}