<img alttext="COVID Green Logo" src="https://raw.githubusercontent.com/lfph/artwork/master/projects/covidgreen/stacked/color/covidgreen-stacked-color.png" width="300" />

# Digital Covid Ceritifcate Decoder

A node module for extracting qr codes from images or PDFs

For more on DCC see:
- https://github.com/ehn-dcc-development
- https://github.com/eu-digital-green-certificates

## Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Methods](#methods)
- [Team](#team)
- [License](#license)

## Getting started

To install this module

```
# with npm
npm install --save covid-green-dcc-file-decoder
```

## Usage

This module supports extracting QR data from an image or a PDF document.

The response will contain the QR data 

#### Example

```javascript
import { extractQRCodes } from 'covid-green-dcc-file-decoder';

const resultImage = await extractQRCodes({source: {image: <buffer>}});

const resultPDF = await extractQRCodes({source: {pdf: <buffer>}});

```

Extracts a DCC qr code return a promise containing an array of the extracted QR codes.

---

## Team

### Lead Maintainers

* @colmharte - Colm Harte <colm.harte@nearform.com>

### Core Team

* @colmharte - Colm Harte <colm.harte@nearform.com>

### Contributors
* TBD

### Past Contributors
* TBD

## Hosted By

<img alttext="Linux Foundation Public Health Logo" src="https://www.lfph.io/wp-content/themes/cncf-theme/images/lfph/faces-w_2000.png" width="100">

[Linux Foundation Public Health](https://lfph.io)

## Acknowledgements

<a href="https://nearform.com"><img alttext="NearForm Logo" src="https://openjsf.org/wp-content/uploads/sites/84/2019/04/nearform.png" width="400" /></a>

## License

Copyright (c) The COVID Green Contributors

[Licensed](LICENSE) under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
