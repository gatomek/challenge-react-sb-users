# Backend - User Administration API

Spring Boot REST API for user management with OpenAPI documentation.

## OpenAPI Endpoints

- **Swagger UI**: http://localhost:8080/swagger-ui.html
- **OpenAPI JSON**: http://localhost:8080/v3/api-docs
- **OpenAPI YAML**: http://localhost:8080/v3/api-docs.yaml

## Running the Backend

```bash
# Build
mvn clean install

# Run
mvn spring-boot:run
```

The API will be available at `http://localhost:8080`

## API Endpoints

### Get All Users
```bash
GET /api/users
```

### Create User
```bash
POST /api/users
Content-Type: application/json

{
  "name": "John",
  "lastName": "Doe",
  "cardId": "ABC123"
}
```

### Update User
```bash
PUT /api/users/{id}
Content-Type: application/json

{
  "name": "John",
  "lastName": "Smith",
  "cardId": "ABC123"
}
```

### Delete User
```bash
DELETE /api/users/{id}
```

## Configuration

Default port: `8080`

To change the port, add to `application.properties`:
```properties
server.port=9090
```

## Requirements

- Java 21
- Maven 3.6+
