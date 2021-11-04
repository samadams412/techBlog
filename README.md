# TechBlog

#### Table of Contents

1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [Examples](#examples)
5. [Collaborating](#collaborating)
6. [Questions](#questions)

## Project Description

- A CMS-style blog site that allows users to publish articles, blog posts, thoughts, and opinions.

## Installation Instructions

- Simply access this deployed application [Here](https://tranquil-castle-61262.herokuapp.com/)

- Node.js and MySQL must be installed on your computer.

Install Dependencies

```terminal
npm install- 
express 
sequelize 
mysql2 
bcrypt 
express-session 
express-handlebars 
connect-session-sequelize
dotenv 
```

Open up MySQL shell with mysql -u root -p and then

```terminal
source db/schema.sql
```

Then exit MySQL shell and input the following into your CLI

```terminal
npm run seeds
npm start
```

Once all that is done, navigate to - http://localhost:3001 to begin!

## Usage Information

- To use the application, click the signup button, enter Username, Email, Twitter, Github, and Password. Then simply create, edit, delete, or comment on posts.

## Examples

- Create account view ![image](/images/test-img1.PNG)
- Display Posts view ![image](/images/test-img2.PNG)
- User Login view ![image](/images/test-img3.PNG)
- Edit Post view ![image](/images/test-img4.PNG)
- User dashboard posts view ![image](/images/test-img5.PNG)


## Collaborating

 * For general comments, ideas, or bugs. Please report to [here](https://github.com/samadams412/techBlog/issues).

## Questions

 * Contact me on Github [samadams412](https://github.com/samadams412)
  * or by Email at samueladams412@gmail.com
