# Marc White - Williams-Sonoma Code Exercise

This application was built using [create-react-app cli](https://github.com/facebook/create-react-app) tool.
I chose this tool because its ease of use for bootstrapping a project and for time's sake.

## Run the project on your local machine
1. You must first have [Node.js](https://nodejs.org/en/) and NPM (node package manager) installed on your machine.
2. Once you have those installed, using the command line, run **npm install**, this will install your node_modules
3. To run the project on a local server, on the command line, run **npm run start** this will open the project on a locally run server on port:3000

## Run local tests
For testing I used Jest and Enzyme, Jest is baked into the create-react-app CLI tool.
To run tests simply type **npm run test** in the console and an output of passing/failing tests will display


Considerations for this exercise --
1. For styling I wanted to use SASS to write my CSS, to do so I added a script and compiler in the package.json that will compile the SASS code to vanilla CSS. This is not baked in to the Webpack.config and if this were a larger project, I would have un-mounted the app from the CLI tool and implemented this into the build process of Webpack.
2. For the icons on the Slideshow, I used default characters for the **x** close button and the **<** and **>** buttons, if this were a production app, I would have used SVG icons, that were provided from the designer.
3. If a product without extra images, no slideshow will open. Also something I would address with designer/UX to see what the use case would be for that condition.

