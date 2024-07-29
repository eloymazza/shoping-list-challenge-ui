# Challenge Requirements

## Summary

Implement a full-stack shopping list using the provided mocks. The shopping list can add, edit,
and remove shopping items.

## Requirements

Use as much of the recommended stack as you are comfortable. There is no time limit to this
assignment, however, please commit regularly if using version control. The code should be able
to compile and serve the finished application. The finished application should be visually
identical to the mocks.
You have creative freedom for any design decisions not included in the mocks or explained in
this document. Any decisions you make will be assessed during your challenge review.

## Mocks

https://www.figma.com/file/FP6nTXF1nqA9J5QFk0ieHi/DEMO-UI-TEST?node-id=0%3A1

## Installation

After download the code navigate to the project folder and run:

`npm run dev`- For local development

Or

`npm run build`

And then:

`npm run preview` - For preview the built and optimized version of the app.

For serving the app in a production environment, run the following command:

`npm run serve`

## Dockerization

For run this app as a docker container, ensure you have docker installed and run the following commands:

`docker build -t 'shopping-list-ui:v1.0' .`

and then

`docker run -p 8080:8080 shopping-list-ui:v1.0`

Or simply run:

`npm run docker:build`

and then

`npm run docker:run`

### Challange notes

# Fullstack Shopping List Challenge Summary (Eloy Mazza)

## Chosen Stack:

### Frontend:

- React
- TypeScript
- Redux Toolkit + Thunks
- Axios
- Material UI + Styled Components (the Material UI built-in one called “emotion”)
- React Router v6

### Backend:

- NodeJS
- Express
- Bundler: Vite
- Containerization: Docker

## Extra Features Added (Not Mentioned in Requirements):

- The app is responsive.
- The app uses Material UI theming, making it easy to change colors and styles (useful for implementing dark/light themes, for example).
- The form has validations (you can’t create an item if some field is empty).
- The backend and frontend code are split. This is useful because you can work on them and deploy them independently.
- Users can edit the “purchased” state by clicking the edit button or directly clicking the list item checkbox.
- In the description, the user cannot add more than 100 characters, and the form validates that.
- I added error messages if some form fields are not required.
- I added a Docker file for each codebase to make the installation process easier (you don’t need to install Node locally, for example).

## Repository URLs:

### Frontend:

[https://github.com/eloymazza/shoping-list-challenge-ui](https://github.com/eloymazza/shoping-list-challenge-ui)

### Backend:

[https://github.com/eloymazza/shopping-list-challenge-items-microservice](https://github.com/eloymazza/shopping-list-challenge-items-microservice)

## Important:

To run the project even more easily, I prepared a `docker-compose.yml` file.

Please:

1. Put the shared Docker Compose file in the root folder (where you have downloaded the FE and BE).
2. Do not change any folder names, or if you do, edit the `docker-compose.yml` accordingly.
3. Install Docker if you don’t have it.
4. Run the `docker-compose up --build` command in the root folder.
5. Navigate to `localhost:8080` (frontend) and `localhost:3000` (backend).
6. Enjoy the app!

## Extra Notes:

I left some “TODO” comments with things I would improve if I had more time:

- **Add MongoDB Database:** As the main goal of this exercise is to test my frontend skills, I quickly created the backend API with Express with the minimum requirements to support the CRUD, so the shopping list lives only in the server’s memory. But in a real work environment, I would add MongoDB for data storage.
- **Add Unit Tests:** To make the solution scalable, and even more so if several people are participating in it, adding unit tests is very useful. If I had more time, I would have added a couple.

**Eloy Mazza**  
**Senior Frontend Developer**
