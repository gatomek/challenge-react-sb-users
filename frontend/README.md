# Frontend - User Administration UI

Modern React + TypeScript frontend demonstrating multiple approaches to API integration and state management.

## Features

- 🎨 Material-UI components
- 🔄 React Query for server state management
- 📝 React Hook Form for form handling
- 🏗️ Auto-generated API client from OpenAPI spec
- 📊 Material React Table with CRUD operations

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate API Client

Make sure the backend is running, then:
```bash
# Download OpenAPI spec from backend
curl http://localhost:8080/v3/api-docs > openapi.json

# Generate TypeScript client code
npm run openapi-ts
```

This will generate the API client in `src/client/`

### 3. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Available Scripts

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm run openapi-ts` - Regenerate API client from OpenAPI spec

## Project Structure

```
frontend/
├── src/
│   ├── client/              # Auto-generated from OpenAPI
│   │   ├── @tanstack/       # React Query hooks
│   │   ├── client/          # HTTP client
│   │   ├── schemas.gen.ts   # Type schemas
│   │   └── types.gen.ts     # TypeScript types
│   │
│   ├── components/
│   │   ├── dialogs/         # Modal dialogs
│   │   │   ├── AddUserDialog.tsx
│   │   │   ├── EditUserDialog.tsx
│   │   │   └── DeleteUserDialog.tsx
│   │   │
│   │   ├── fetched/         # Example: Plain fetch
│   │   │   └── FetchedUsers.tsx
│   │   │
│   │   ├── forms/           # Form components
│   │   │   └── UserForm.tsx
│   │   │
│   │   ├── openapi/         # Example: OpenAPI client
│   │   │   └── OpenApiUsers.tsx
│   │   │
│   │   ├── reactQueryUsers/ # Example: React Query
│   │   │   └── ReactQueryUsers.tsx
│   │   │
│   │   └── tableUsers/      # Example: Material React Table
│   │       └── MRUserTable.tsx
│   │
│   ├── config/              # App configuration
│   │   └── queryClient.ts   # React Query config
│   │
│   └── App.tsx              # Main app component
│
├── env/
│   ├── .env                 # Development environment
│   └── .env.production      # Production environment
│
├── openapi.json             # OpenAPI spec (from backend)
├── openapi-ts.config.ts     # OpenAPI generator config
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── eslint.config.js         # ESLint configuration
```

## Component Examples

The app demonstrates **4 different approaches** to fetching and displaying users:

### 1. FetchedUsers (Plain Fetch API)
Basic implementation using native `fetch()` API.
```tsx
fetch(usersUrl)
    .then(rsp => rsp.json())
    .then(data => setUsers(data))
```

### 2. OpenApiUsers (Generated Client)
Using the auto-generated OpenAPI client.
```tsx
getUsers()
    .then(({data}) => {
        if (data) setUsers(data);
    });
```

### 3. ReactQueryUsers (React Query)
Using auto-generated React Query hooks.
```tsx
const {data = [], status} = useQuery(getUsersOptions());
```

### 4. MRUserTable (Material React Table)
Full CRUD with advanced table features.
- Sorting, filtering, pagination
- Cell actions (edit, delete)
- Toolbar actions (add user)
- Modal dialogs for all operations

## Configuration

### Environment Variables

Located in `env/.env`:
```env
VITE_API_URL=http://localhost:8080
```

For production, create `env/.env.production`:
```env
VITE_API_URL=https://api.production.com
```

### React Query Configuration

Default settings in `src/config/queryClient.ts`:
```typescript
{
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
}
```

## Code Generation

The project uses `@hey-api/openapi-ts` to generate:
- TypeScript types from OpenAPI schemas
- API client functions
- React Query hooks
- Request/response transformers

Configuration in `openapi-ts.config.ts`.

## TypeScript

- **Strict mode** enabled
- **Target**: ES2020
- **Module**: ESNext
- **JSX**: react-jsx

## Linting

ESLint with:
- TypeScript ESLint
- React Hooks rules
- React Refresh rules

Generated files (`*.gen.ts`) are excluded from linting.

## Building for Production

```bash
npm run build
```

Output in `dist/` directory, ready to deploy to any static hosting.

## Requirements

- Node.js 18+
- npm 8+
- Backend API running on http://localhost:8080 (development)
