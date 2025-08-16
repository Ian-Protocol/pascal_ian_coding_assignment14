# Vite/React Final Project Portfolio

Please follow the instructions below to build and run this Dockerfile and Vite/React Portfolio!

## Step 1: Clone this Repository.

Run: `git clone https://github.com/Ian-Protocol/pascal_ian_coding_assignment14.git`

## Step 2: Build the Docker image.

Navigate into the repo folder: `cd pascal_ian_coding_assignment14`  
Then run: `docker build -t pascal_ian_coding_assignment14 .`

## Step 3: Run the container.

Run: `docker run -d -p 5575:80 --name pascal_ian_coding_assignment14 pascal_ian_coding_assignment14`

## Step 4: View the site.

Open your browser and navigate to: `http://localhost:5575`

You should now see the production build of the portfolio site running inside the Docker container.