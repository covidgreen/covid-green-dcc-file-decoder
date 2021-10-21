import { extractQRFromImage, extractQRFromPDF } from './decode'

enum scaleOptions {
  standard = 2.0,
  fallback = 1.4
}

const findQRData = async (source: InputSource): Promise<string[]> => {
  let qrSources = []
  if (source.image) {
    qrSources = await extractQRFromImage(source.image)
  } else if (source.pdf) {
    qrSources = await extractQRFromPDF(source.pdf, scaleOptions.standard)
    if (qrSources.length === 0) {
      qrSources = await extractQRFromPDF(source.pdf, scaleOptions.fallback)
    }
  }

  return qrSources
}

const extractQRCodes = async (inputs: {
  source: InputSource
}): Promise<string[]> => {
  const qrSources = await findQRData(inputs.source)

  return qrSources
}

export type InputSource = {
  image: Buffer
  pdf: Buffer
}

export { extractQRCodes }
