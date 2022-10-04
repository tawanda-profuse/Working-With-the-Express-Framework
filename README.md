Express is a web application framework for building the backend of web sites using the Javascript programming language. It was also developed using Javascript and runs on the Node.js platform as an installable package. The first release, **version 0.12**, was on 22 May 2010 and it continues to be upgraded due to a large developer support in the Javascript open source community.

The express.js main repository is found at [https://github.com/expressjs/express](https://github.com/expressjs/express), and it is maintained under the [MIT license](https://en.wikipedia.org/wiki/MIT_License) so you are free to make a copy of it. The website is [expressjs.com](https://expressjs.com/). Express is used by companies like Fox Sports, PayPal, Uber, and IBM to run their backend systems. Express is used for:

-    Creating routes.
-    Implementing Representational State Transfer (REST).
-    Improving application performance.
-    Inserting HTTP helpers (redirection, caching etc.).

In this article, I will be building a web application with an express server which will access different endpoints. To get started, you will need to have the following tools installed:

1.    A text editor, I recommend [VS Code](https://code.visualstudio.com/).
2.    Google Chrome.
3.    Latest version of [Node.js](https://nodejs.org/).

I like to think of a computer server as a waiter/waitress in a restaurant. When you select something on the menu, the waiter will return with your choice. The first thing I'll do is create a folder on my computer and name it 'Working With the Express Framework.' I have also added the repository to GitHub so you can access it via this [link]() by making a clone of the repository.

Open the folder in VS Code and access your terminal. Type into the terminal; **npm init -y**. This initializes the node package manager which gives us access to all the modules within Node.js, including express. Next, I'll type **npm install express --save**. This line tells our package manager to include express in our project so that we may utilize it in our application. Make sure to follow the prompt that comes up in your terminal to enter information about the application.

You will notice that a new file has been automatically created inside our previously created folder and it is called **package.json**. This folder contains important configuration information for our application to run successfully. If you are familiar with JSON you will understand how data is stored in a **.json** file but if you are new to the Javascript ecosystem then I suggest you learn about the JSON syntax by watching this [**youtube video**](https://www.youtube.com/watch?v=GpOO5iKzOmY) from freecodecamp or read this article: [JSON Tutorial: Learn JSON in 10 Minutes](https://beginnersbook.com/2015/04/json-tutorial/).

**Your package.json file looks similar to this:**
```
    {
        "name": "working-with-the-express-framework",
        "version": "1.0.0",
        "description": "application description",
        "main": "server.js",

        "scripts": {
            "start": "npm run"
        }
    }
```

The **`"name":`** represents the field, and **`"working-with-the-express-framework"`** represents the value of the field. Some of the information in this file was captured when you created the application using the terminal. If this was represented in tabular form, it would look something like this:

| name | version | description | main |
|:---:| :---: | :---: | :---: |
| blog | 1.0.0 | working-with-the-express-framework | server.js |

Now, in order to use express we will need a folder to write code in. Create a file and name it *server.js*, this will be the folder we use to configure our server.

## Configuring The Server

Type the following in *server.js*:

```
    const express = require('express');

    const app = express();

    app.get('/', (req, res) => {
        res.send("index.html");
    });

    app.listen(2000, () => {
        console.log('Server has started listening');
    })
```

The line that says `const express = require('express')` imports the express library into our file. We then define the variable `app`, which initializes the app. The `app.get('/')` method is used to read the path request and send the response which is an **index.html** file. We then tell our server to listen and in this case it is available on port 2000.

Let's go ahead and create our **index.html** which is the home page of our web site. Create a folder in your folder, please note that the name of your file should have the **.html** extension and should be the same as the file name in server.js. Write some output in your HTML file which will be displayed in the browser. If you can't come up with anything, refer to [this]() project I made for inspiration. Or you could write the following code in your html file:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link id="main-css" rel="stylesheet" href="styles.css">
  <title>Types of Dinosaurs</title>
</head>
<body>
  <div>
    <h1>Types of Dinosaurs</h1>
  </div>
</body>
</html>
```

For a better understanding of the HTML language, you can have a look at my blog post, [***Exploring Hypertext Markup Language***](https://github.com/tawanda-profuse/Exploring-Hypertext-Markup-Language--HTML-) which goes into details. The text we have written in our HTML file will render as a web page on the port 2000.

## Styling The Web Page

Add the following code to your **server.js** file; `app.use(express.static('public'));`. This ensures that all items inside the "**public**" folder are included with our HTML file. Now you can create a folder called **public** in the root of your folder, then create a file and name it **styles.css**. Add some styles to the file to improve the HTML file like this:

```

```

## Spinning Up the Server

Type **npm run start** into your console. After a few seconds you should notice the terminal output that says "*Server has started listening*." This indicates that your application is live and you can visit it on your browser. If you open your browser and search for ***localhost:2000***, your web page will be loaded to the screen.

## Installing Nodemon

You will notice that every time you make a change to your source files and save, the server will stop. Then you have to start it again. This can be a tiresome task, so *Node* has a package to solve this and to install it, type into your terminal; **npm install nodemon**. If it was installed successfully, you will see **"nodemon"** under the **"dependencies"** field in your package.json file. This time, if you make changes to your source files, you won't have to manually restart your server. 

### ~ Thank you for reading