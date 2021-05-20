# Stay-Away-Backend

The backend REST API application is used to serve Stay-Away-Frontend. It's built with Node.js and Express framework and provides an interface with many different endpoints that the frontend can utilize to provide all the needed services. 
The backend is hosted online on the  `Heroku` cloud. It can be reached through the following link 
````
https://stay-away-backend.herokuapp.com
````
MongoDB is the database used on the backend. It's hosted online as well on the `MongoDB Atlas` cloud service. It contains records about the users and the posts. 
Accessing and managing relationships between data and schemas occurs with the ODM library Mongoose.
Since creating a new account requires choosing a password, the `Bcrypt` library is utilized to encrypt and decrypt the password. The password is saved in an encrypted form on the database.

# Endpoints
 * POST request to `"/api/login"` For logging in to the system. The email and password shall be provided in the body
    ```
    email: "test@test.com"
    password: "12345"
    ```
 * POST request to `"/api/signup"` For creating a new account. The email, password, and username shall be provided in the body. The email shall be unique
    ```
    email: "test@test.com"
    password: "12345"
    userName: "The Only tester"
    ```
 * GET request to `"/api/fetchposts"` For fetching all the stored posts in the database. 
 * POST request to `"/api/addpost"` For adding a new post to the database. The post's information shall be included in the body
    ```
    id: "123ef32h54r3qftrey345rg32reg312qrg32"   //The user id
    name: "Resturant name"
    area: "Resturant"     //Or hotel or place
    description: "The resturant was no good"
    city: "Malmö"
    country: "Sweden"
    visistDate: "2021-05-15"
    like: 0       //Optional
    dislike:0     //Optional
    comments: []  //Optional
    ```
 * PUT request to `"/api/updatepost"` For updating an already existed post. This endpoint for registering users' reactions and comments on a specific post
   ```
    id: "j1b512b312ub53ui2ob5b324n12b4ö123ösdf1"   //The resturant id
    like: 1       
    dislike:0     
    comments: [
      name: "Test"   // The username of the user added the comment
      text: "Had the same experience"   // The acutal comment
    ]  
    ```
 
## Project setup and start
If you want to run the backend on your local, you need first to install all the dependencies. For that, write the command ![npm install](text=+) in the terminal.
When done with the project setup, the script ![npm start](text=+) is used to start the server.

## Authors
```
Omar Kalthoum  https://kalthoum.se
Emil Hansen   hansenemil12345@gmail.com
```
