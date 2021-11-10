# Foundation Center

This site is made for your foundation buying guide.

## `Services:`

<ul>
<li>You can choose from various foundations available in our website;</li>
<li>Check every details of your chosen foundation & check out;</li>
<li>Preview our customers feedbacks;</li>
<li>Browse a whole collection of foundation brands;</li>
<li>Create an account in our website to get future services and discounts if available.</li>
</ul>

## Learn More

Click Here: [Live Site]( "Firebase")
<br />
Click Here: [Live Site (Netlify)]()

## My Live Links:

### Live Site (Firebase): 

### Live Site (Netlify): 

### Heroku (Server): 

### GitHub (Client): https://github.com/programming-hero-web-course-4/niche-website-client-side-L2L-OakFrog

### GitHub (Server): https://github.com/programming-hero-web-course-4/niche-website-server-side-L2L-OakFrog

---

## My Setup:

### Frontend:
{

#### 1. Install React Router, ✔
`version-5 link:` (https://v5.reactrouter.com/),<br /> 
```
$ npm install react-router-dom@5
```
`latest version link:` (https://reactrouter.com/), <br /> 
```
$ npm install history@5 react-router-dom@6
```

#### 2. Install Firebase, ✔
`Website link:` (https://console.firebase.google.com/),<br />
`onetime global install` 
```
$ npm install -g firebase-tools
```
`then`
```
$ npm install firebase
```
`login & initialize`
```
(firebase login), (firebase init), & (firebase deploy)
```
`Note! if terminal gives error copy:` 
```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass 
```

#### 3. Install React Material UI, ✔
`latest version link:` (https://mui.com/getting-started/installation/),<br /> 
```
$ npm install @mui/material
```
`or`
```
$ npm install @mui/material @emotion/react @emotion/styled
```
`prebuilt icons:` 
```
$ npm install @mui/icons-material
```

#### 4. Install Axios JS, ✔
`Website link:` (https://axios-http.com/docs/intro),<br />
```
$ npm install axios
```

}

### Backend:
{

#### 1. Install `Express`, ✔
`Website link:` (https://expressjs.com/),<br />
```
const express = require('express');
const app = express();
```

#### 2. Install `MongoDB`, ✔
`Website link:` (https://www.mongodb.com/),<br />
```
const { MongoClient } = require('mongodb');
```

#### 3. Install `Cors`, ✔
`Website link:` (https://www.npmjs.com/package/cors),<br />
`place middleware`
```
const cors = require('cors');
app.use(cors());
app.use(express.json());
```

#### 4. Install `DotEnv`, ✔
`Website link:` (https://www.npmjs.com/package/dotenv),<br />
```
require('dotenv').config();
```

#### 5. Deploy in `Heroku`, ✔
```
$ heroku create
```
`then after every modification`
```
$ git push heroku main
```

### Extra:
1. Require `ObjectId` from MongoDB ✔
```
const ObjectId = require('mongodb').ObjectId;
```

2. Create `.gitignore` file ✔ <br />
```
node_modules
.env
```

3. Create `.env` file ✔ <br />
```
DB_USER=
DB_PASS=
```
`then`
```
process.env.DB_USER
process.env.DB_PASS
```


}