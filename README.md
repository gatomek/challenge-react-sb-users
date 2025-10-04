# Challenge: Spring Boot + React Users System

A modern full-stack user administration system demonstrating best practices with **Spring Boot** backend and **React + TypeScript** frontend.

## 🎯 Features

- ✅ Full CRUD operations for user management
- ✅ OpenAPI-first development with auto-generated client code
- ✅ Modern React with TypeScript and React Query
- ✅ Material-UI components with advanced table features
- ✅ Multiple implementation examples (Fetch, OpenAPI, React Query, Material React Table)

## 🏗️ Architecture

### Backend
- **Framework**: Spring Boot 3.5.5
- **Java Version**: 21
- **API Documentation**: SpringDoc OpenAPI (Swagger UI)
- **Architecture**: Clean layered architecture (REST → Service → Repository)

### Frontend
- **Framework**: React 19.1.0 + Vite
- **Language**: TypeScript with strict mode
- **State Management**: TanStack React Query v5
- **UI Library**: Material-UI (MUI) v7
- **Code Generation**: @hey-api/openapi-ts

## 📋 Prerequisites

- **Java 21** (or modify `backend/pom.xml` to use Java 17)
- **Node.js 18+** and npm
- **Maven 3.6+**

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build and run:
```bash
mvn clean install
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

3. Access Swagger UI:
```
http://localhost:8080/swagger-ui.html
```

4. Download OpenAPI spec:
```
http://localhost:8080/v3/api-docs
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Copy the OpenAPI specification from backend:
```bash
# Ensure backend is running first
curl http://localhost:8080/v3/api-docs > openapi.json
```

4. Generate API client code:
```bash
npm run openapi-ts
```

5. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## 🔧 Available Scripts

### Backend
- `mvn clean install` - Build the project
- `mvn spring-boot:run` - Run the application
- `mvn test` - Run tests

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run openapi-ts` - Generate API client from OpenAPI spec

## 📁 Project Structure

```
challenge-react-sb-users/
├── backend/
│   └── src/
│       └── main/
│           └── java/pl/gatomek/backend/
│               ├── users/
│               │   ├── db/          # Data access layer
│               │   ├── model/       # Domain models
│               │   ├── rest/        # REST controllers
│               │   └── service/     # Business logic
│               └── BackendApplication.java
│
└── frontend/
    └── src/
        ├── client/          # Auto-generated API client
        ├── components/      # React components
        │   ├── dialogs/     # Add/Edit/Delete dialogs
        │   ├── fetched/     # Plain fetch example
        │   ├── forms/       # Form components
        │   ├── openapi/     # OpenAPI client example
        │   ├── reactQueryUsers/  # React Query example
        │   └── tableUsers/  # Material React Table
        ├── config/          # App configuration
        └── App.tsx
```

## 🔌 API Endpoints

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `PUT /api/users/{id}` - Update a user
- `DELETE /api/users/{id}` - Delete a user

### Request/Response Examples

**Create User:**
```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "lastName": "Doe",
    "cardId": "ABC123"
  }'
```

**Response:**
```json
{
  "id": 1,
  "name": "John",
  "lastName": "Doe",
  "cardId": "ABC123",
  "readDateTime": "14:23:45"
}
```

## 🎨 UI Components

The frontend demonstrates **4 different approaches** to fetch and display users:

1. **FetchedUsers** - Basic `fetch()` API
2. **OpenApiUsers** - OpenAPI generated client
3. **ReactQueryUsers** - React Query with auto-generated hooks
4. **MRUserTable** - Full-featured Material React Table with CRUD operations

## 📝 Code Review

See [CODE_REVIEW.md](CODE_REVIEW.md) for a comprehensive code review with:
- Strengths and best practices
- Issues and recommendations
- Security considerations
- Performance improvements
- Priority action items

## 🛠️ Development Notes

### Regenerating API Client

After backend changes:
1. Restart backend
2. Download new OpenAPI spec:
   ```bash
   cd frontend
   curl http://localhost:8080/v3/api-docs > openapi.json
   ```
3. Regenerate client:
   ```bash
   npm run openapi-ts
   ```

### CORS Configuration

CORS is currently enabled for all origins. For production, configure specific origins in the backend.

### Environment Variables

Create `frontend/env/.env.local` for local overrides:
```
VITE_API_URL=http://localhost:8080
```

## 🐛 Known Issues

See [CODE_REVIEW.md](CODE_REVIEW.md) for details:
- Java 21 requirement (can be downgraded to Java 17)
- No authentication/authorization
- Limited error handling in some components
- No pagination (will need optimization for many users)

## 📚 Technologies Used

**Backend:**
- Spring Boot 3.5.5
- Spring Web
- Lombok
- SpringDoc OpenAPI 2.8.11

**Frontend:**
- React 19.1.0
- TypeScript 5.8.3
- Vite 7.1.5
- TanStack React Query 5.85.9
- Material-UI 7.3.2
- Material React Table 3.2.1
- React Hook Form 7.63.0

## 📄 License

This project is available under the MIT License.

## 🤝 Contributing

This is a challenge/learning project. Feel free to fork and experiment!
