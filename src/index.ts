import { extractQRFromImage, extractQRFromPDF } from './decode'

const findQRData = async (source: InputSource): Promise<string[]> => {
  let qrSources = []
  if (source.image) {
    qrSources = await extractQRFromImage(source.image)
  } else if (source.pdf) {
    qrSources = await extractQRFromPDF(source.pdf)
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
