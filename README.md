# **_SkyFitnessPro_**

# Course work. Team development processes.

## Our team:

-   [Tatiana Turkevich](https://github.com/TTurkevich)
-   [Zarina Nugmanova](https://github.com/KittySaur)
-   [Lyubov Yarengina](https://github.com/Yarengina)
-   [Vyacheslav Ardalin](https://github.com/santaCruz96)
-   [Anatoly Bagrov](https://github.com/BagrovAnatoli)

## Project description:

Website for the online training school "SkyFitnessPro".
 
**_English version will be added soon_**

Layout is available [here.](https://www.figma.com/file/QoOmLM2WGbES23xQeDCCYi/%D0%A1%D0%B0%D0%B9%D1%82-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BE%D0%BA?node-id=0%3A1)

The application is implemented as a SPA.

### CI/CD

The application is published using the Netlify service. Check out [project.](https://skyfitnesspro.netlify.app/)

## Structre of an app

### 1. Main page:

-   application logo and a short description of the online school
-   a list of cards with the names of all courses in the database
-   the "Login" button, when clicked, the user is taken to the authorization page

![image](https://github.com/zarina-n/SkyFitnessPro/assets/101009726/5ca4e5c6-642e-4bb6-9cc1-e6c4a4bf85cb)




### 2. Course Page:

-   Course description
-   the "Sign up for a training" button, when clicked, the user adds the selected course to his profile or is taken to sign in or sign up screens if not authorized

![image](https://github.com/zarina-n/SkyFitnessPro/assets/101009726/89468dec-e118-4948-b503-4393ae3c83e9)




### 3. Authorization page:

-  on this page, the user has the opportunity to register or log into his account

![image](https://github.com/zarina-n/SkyFitnessPro/assets/101009726/3f0b8922-7e4f-44a3-88b7-347aa1a3980e)


![image](https://github.com/zarina-n/SkyFitnessPro/assets/101009726/34e860fa-e2b9-42c0-b89c-7f7b05b007bc)





### 4. My Profile Page:

-   application logo and user information
-   buttons to change username and password
-   log out button
-   list of user's courses with the "Go to" button, when clicked, a modal window opens with all the trainings of this course
-   the username is displayed in the upper right corner

![image](https://github.com/zarina-n/SkyFitnessPro/assets/101009726/65521f3b-eb23-44dd-8add-0f06db6f9897)




### 5. Workout page:

-   application logo and user information
-   training video with a name and a brief description. When clicked, a modal window opens with all the trainings of this course
-   list of exercises from the database
-   user progress bar
-   button to put in the progress of the training
-   the username is displayed in the upper right corner, when clicked, it takes you to the "My profile" page

![image](https://github.com/zarina-n/SkyFitnessPro/assets/101009726/d8271f09-ba4c-47f0-9c72-29e24eb3ce6e)

![image](https://github.com/zarina-n/SkyFitnessPro/assets/101009726/92c5af9e-6fce-4e4f-be38-1afa41f2ddae)




### Backend

Realtime Database from Firebase is used as a backend and for data storage.
Requests to the database are implemented through the REST API.

The application key (**REACT_APP_FIREBASE_API_KEY**) is located in **.env**

The database has 3 root nodes: courses, users, and workouts.


### Tech stack

- [x] React
- [x] Redux + Redux Toolkit
- [x] Firebase
- [x] React Router DOM, реализация routing



### Run the project

1. Clone repository:

```
$ git clone https://github.com/TTurkevich/SkyFitnessPro.git
```

2. Install dependencies:

```
$ npm i
```

3. Run the project:

```
$ npm start
```

----
