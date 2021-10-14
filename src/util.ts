export function qrNotDetected() {
  const error = new Error()
  error.name = 'QR_NOT_DETECTED'

  return error
}
