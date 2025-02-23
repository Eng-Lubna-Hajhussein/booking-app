# booking-app

## Environment Variables

To run this application, you need to set up the `.env` file with the required environment variables.

1. **Create the `.env` File**:
2. Set Up the Database URL: Open the .env file and add your database connection string in the following format but replace the password and database-name with yours :
DATABASE_URL="postgresql://postgres:password@localhost:5432/database-name?schema=public"

Database Setup
After setting up the .env file, you need to run the Prisma migration command to set up your database schema.

3. Run Prisma Migrations: npx prisma migrate dev

4. Install the Required Dependencies: npm install

5. Start the Development Server: npm run dev
