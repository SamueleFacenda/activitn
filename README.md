# activitn
Project for unitn software engineering

## Setup

See [docs/develop.md](docs/develop.md)

## To generate openapi react queries
- `npx openapi-rq -i ./swagger/oas3.yaml -o frontend/src/api`
- `npx tsc`
Note, there is a bug that puts `{}` as default values in some parameters where it shouldn't, remove the manually before
running `npx tsc`.
