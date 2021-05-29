
# Natural Language Processing
## Overview of the Project
The project receives an URL and then it sends it to an endpoint on a server, to finally send the URL to Meaning Cloud. After that, the project retrieves the response provided by MC and then presents it to the user. This response is a Natural Processing Language analysis. The project checks if the user types a valid URL and also prints if MC could not analyze a particular URL.

Additionally, the page works if the server is down due to the WebWorker. For Production environment files are minified. 

## Components

Its main components:
- Webpack
- babel
- sass
- express

## Installation

### Front-End
- Production: ```npm run build-prod```
- Development: ```npm run build-dev```

### Back-End
- Production: ```npm run prod```
- Development: ```npm run dev```

### Tests
- Tests: ```npm run jest```
- Development: ```npm run dev```

