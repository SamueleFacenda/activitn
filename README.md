# activitn
Project for unitn software engineering

## Setup

See [docs/develop.md](docs/develop.md)

## TODO
- footer
- events
- event
- login
- signup

## api client
To regenerate the openapi fetchers for react (when the specs are modified run):
- `npx openapi-generate gen -c frontend/src/api/openapi-codegen.config.ts api`
- `npx tsc`
