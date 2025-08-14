# Vite/React Storybook Component Library with Pre-Commit Checks & Github Actions

Please follow the instructions below to build and run this Dockerfile and Vite/React Storybook (Now with pre-commit checks and Github Actions).

## Step 1: Clone this Repository.

Run: `git clone https://github.com/Ian-Protocol/pascal_ian_coding_assignment13.git`

## Step 2: Build the Docker image.

Navigate into the repo folder: `cd pascal_ian_coding_assignment13`  
Then run: `docker build -t pascal_ian_coding_assignment13 .`

## Step 3: Run the container.

Run: `docker run -d -p 8018:8018 --name pascal_ian_coding_assignment13 pascal_ian_coding_assignment13`

## Step 4: View the site.

Open your browser and navigate to: `http://localhost:8018`

# Pre-Commit Behaviour

This repo uses **Husky** to reject bad commits.
Upon commit, the following checks are run:

- `npm run lint` - This runs ESLint, which helps to find and fix issues in the code.
- `npm run format:check` - This runs Prettier, which formats code thus making it _prettier_. If you want to run Prettier before committing, run `npx prettier --write .`.
- `npm run test` - This runs the Vitest test suite, running all the custom-made tests.

If any of these checks fail, the commit is rejected.

In addition, Github Actions enforce the same checks remotely on every push.

## Important!
If you want to test the pre-commit checks locally, run `npm install` after opening the cloned repo in your IDE!
