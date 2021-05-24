# Stengetid

Simple [Azure Static Web App](https://docs.microsoft.com/en-us/azure/static-web-apps/overview) to show today's closing time of [Vinmonopolet](https://www.vinmonopolet.no/).

## Development

### Frontend only

1. Install dependencies: `yarn install`
2. Compile and hot-reload: `yarn serve`
3. Compile and minify for production: `yarn build`
4. Lint and fix files: `yarn lint`

### Frontend and backend

Backend requires an [Open API key from Vinmonopolet](https://api.vinmonopolet.no/products/open) to fetch data.

1. Run frontend steps 1 and 3
2. Install Azure Static Web Apps CLI: `npm install -g @azure/static-web-apps-cli`
3. Install Azure Functions Core Tools V3: `npm install -g azure-functions-core-tools@3`
4. Initialize Azure Function app: `cd api && yarn && func init --worker-runtime node --language javascript && cd ..`
5. Add your API key in api/local.settings.json Values as `"VUE_APP_apikey": "REPLACE_ME"`
6. Run the Static Web Apps CLI `swa start dist --api api`

Reference: <https://docs.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vue#run-the-frontend-and-api-locally>
