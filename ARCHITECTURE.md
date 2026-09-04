# Architecture

The project follows a layered architecture (`routes → middleware → controllers → services`) as defined in the initial project requirements. To implement this correctly, I researched REST API best practices rather than following the structure literally.

## Layers

**Routes**
Define endpoints and determine which middleware chain applies to each request before it reaches business logic.

**Middleware**
Validates and sanitizes incoming data (trimming whitespace, stripping potentially dangerous characters) *before* the request can reach the database layer. If validation fails, the middleware short-circuits the chain and returns an error response immediately — the request never proceeds further.

**Controllers**
Receive already-clean, validated data and handle the request/response logic, without needing to worry about raw or unsafe input.

**Services**
Act as the bridge to the database. All database interactions are wrapped in try/catch blocks, so that any failure returns a specific error response to the frontend instead of crashing silently.

## Why this separation

Each layer is responsible for exactly one concern — request handling, validation, business logic, and data access don't mix.
This makes the code easier to debug (errors are caught at the layer where they occur) and easier to extend (a new endpoint can reuse existing middleware and services without duplicating validation or database logic).
