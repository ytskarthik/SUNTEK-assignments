### Backend development

1. Create git repo
    git init

2. Add .gitignore file

3. Create .env file for environment variables & Read data from .env   
   with "dotenv" module
    npm install dotenv

4. Generate package.json

5. Create express app

6. Connect to Database

7. Add middlewares( body parser, err handling middlewares)

8. Design Schemas and create models

9. Design REST APIs for all resources

### Registration & Login

10. Registration & Login in common for USER & AUTHOR. Create a seperate service to reuse

11. The Client wont send role. It just redirects to a specific API based on role selection. The hardcoded role assigned by API routes.

### Deployment note

Set a hosted MongoDB connection string in one of these environment variables before running in production:

- `DB_URL`
- `MONGODB_URI`
- `MONGO_URI`

Set your deployed frontend URL in `FRONTEND_URL` so CORS allows the browser app:

- `https://suntek-assignments-week-9-10-capsto-chi.vercel.app`

Do not point the production service at `localhost:27017`.
