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

Click Here: [Live Site](https://assignment-12-niche-web.web.app/ "Firebase")
<br />
Click Here: [Live Site (Netlify)]()

## My Live Links:

### Live Site (Firebase): https://assignment-12-niche-web.web.app/

### Live Site (Netlify): 

### Heroku (Server): 

### GitHub (Client): https://github.com/programming-hero-web-course-4/niche-website-client-side-L2L-OakFrog

### GitHub (Server): https://github.com/programming-hero-web-course-4/niche-website-server-side-L2L-OakFrog

## Objectives

1. `Single product` Website / `Niche website`; ✔

2. Home page with a `(header / simple navbar), banner, products, reviews, and footer`; ✔

3. Home page products will have a `maximum of 6 items/products` with relevant details; ✔

4. Products will have `buy now button` which will take the user to the `purchase page`; ✔

5. Add `one extra section` in the `home page` in addition to the 5 sections mentioned above; ✔

6. Another page on the top navigation bar named `explore` where users will see all the products. At least 10 products with `(name, description, image, price and button)`;

7. The `purchase` page is a private/protected route. Page should `display detailed information` of the `item`. Also `a form` should display the `user's name` and `email address` & users will `provide address, phone number and necessary information` to complete the purchase;

8. The `private route` redirects to the `login page`. After login, the user will be `redirected to the page` where he/she wanted to go to. Also `reloading the page` of a private route, the user is not `redirected to the login page`; ✔

9. Implement `email/ password (login/Register) based login` system. `After` login/register `user name, and the logout button` should appear on the header. Displaying `username on the header` is optional & so as `google, facebook, or github provider`; ✔

10. After login show in header `Dashboard` and inside a normal user will see options like `(pay, My Orders, Review, Logout)`. The `pay` page will say: Payment system coming soon; ✔

11. `My orders` page, the logged in user will see only his/her orders with `cancel/delete any order`. `Ask a confirmation message` before deleting or canceling an item;

12. On the `Review` page, users should be able to add a review and that review will appear on the home age;

13. Please `add one admin` with the email address: `admin@admin.com` with password: `123456`; ✔

14. An admin will not see the options like a normal user. Instead will see `(Manage All Orders, Add A Product, Make Admin, Manage Products)`;

15. An Admin `can make` another user `(an admin, add a product on the add a product page)`. After adding the product, this product will appear on the `explore` page;

16. `Use a database` to store information. It could be `mongodb atlas` or any other `noSQL database`.

## Bonus:

1. Adding review page should have a field to `add ratings`;

2. Meaningful `README.md` file both on client side and server side with `(website name, a little description, link to your live site. And at least five bullet points mentioning different features and functionality)`;

3. `Responsive website` for mobile & tablet;

4. Make the website `meaningful and consistent` in look and feel;

5. `Clean and organized` Code;

6. Use `.env file` on the `server`, `.env.local file` on the `client` to hide db user and password, etc. Also use `.gitignore file`;

7. On the `Manage All Orders` page the admin will see the orders placed by every user. At the time of `placing an order`, every order will have a default `status: pending`. An admin will be able to `update the status` of the pending to `shipped status`. Also, it would be nice if you can `do one additional task` here: The admin will be able to `delete anyone's order` here. Make sure to `add a confirmation` before deleting. Please note: `delete is optional` but recommended on this page;

8. On the `Manage Products` page, an admin `can delete` any of the `products`. Please make sure there is `a confirmation`. After delete that product will not appear on the `explore` page.

### Optional:

1. payment gateway `(paypal or stripe or anything else)`;
2. On the `add a product` page, try to implement direct image `upload from your computer`. This image can be hosted on third part image hosting like imgbb or directly to mongodb
3. Add a `shopping cart and Order review` page
4. if you implement `pagination`, you can have duplicate products
5. Implement `jwt` token.
6. Manage orders page, add `more options` like: `pending, rejected, shipped`. And consider using a select `(drop down options)`. Also, once the status of an item is updated that status is reflected on the `my orders` page once the user of the order is logged in.
7. Try to use a `better looking confirmation dialogue` other than the browser's default confirm.
8. Add some `animation` while applicable.
9. Please Use `icons` whenever applicable and use `fonts` (google fonts)
10. Make the `footer` little more `realistic`
11. `Optimize your images`
12. Add `something extra` of your own. This will help you in the future.
13. Most of the `booking` will have a `date`, you can use browsers default input type date or any external packages
14. We encourage you to `use axios`.
15. Also, if you want you can `use mongoose`.
16. If possible, replace the default react favicon and `give an icon` for your website.

### Additional information:

1. You can `use local image` or host image anywhere if you want or both.
3. You are `free to use any css library` you want. But, we `recommend using tailwind css`. 
4. If needed you can `mix CSS framework` with a `component library`
5. You may use `react hook form`, `basic html` form or `any library` for authentication
6. `Local storage` is optional
8. Try to `host your site on Firebase` (Netlify host will need extra configuration)
9. Try to `host server on heroku`

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

#### 5. Install React Rating, ✔
`Website link:` (https://www.npmjs.com/package/react-rating),<br />
```
$ npm i react-rating
```

#### 6. Install React Rating, ✔
`Website link:` (https://www.npmjs.com/package/react-rating),<br />
```
$ npm i react-rating
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

#### 5. Firebase `Admin`, ✔
```
$ npm i firebase-admin --save
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