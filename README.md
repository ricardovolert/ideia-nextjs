# ideia-nextjs: Integration Project (VS Code + Github + Vercel)


## About this Project

This project is a simple page to test the functionality of NodeJS and the integration of services, seeking to update knowledge regarding the development of new solutions.

## Why?

Even though I am a PHP programmer and developer, I understand that the world is modernizing and that new technologies are welcome.

PHP is unlikely to die over time and even being used en masse and creating the most beautiful and largest systems to date, it is important to keep up with the development of Software Architecture and therefore it is worth learning JavaScript / NodeJS to work in the Cloud in the future. .

Everything dies, but it is cool to learn during the journey and have options to replace technologies.

## Some Observations

This project is for studies only. There are no predetermined functionalities, however, the objective is to develop the project initially elaborated as a small example of NextJS pages, thus, it is natural that this project is different from the instructions mentioned below, however, they remain unchanged as they serve as scope for creating this project and can be reused by people looking to learn about the subject.

## Installers

None

## Functionalities

None

## Getting Started

None

## Prerequisites

None

## Installing

Cloning the Repository

    $ git clone https://github.com/ricardovolert/ideia-nextjs

    $ cd ideia-nextjs

Installing dependencies

    $ yarn

or

    $ npm install

## Built With

- [React](https://github.com/facebook/react)
- React-Dom
- [NodeJS](https://github.com/nodejs)
- [NextJS](https://github.com/vercel/next.js)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)

## Steps
(Using a repository on Github)

Create a new public repository and add a **.gitignore** (**.gitignore template: Node**)

On your computer, using the terminal, perform an integration with this repository

    $ git clone git@github.com:ricardovolert/ideia-nextjs.git

Access the folder

    $ cd ideia-nextjs

Open the project with **VS Code and expand the integrated terminal**

    $ code.

From now on, use the VS Code integrated terminal. There are some requirements to continue, one of which is that NodeJS is in a recent update. The same goes for the other items we are going to create.

Let's create the package.json configuration file using the command:

    $ npm init -y

Let's install next (it is a lightweight framework)

    $ npm install next

The next one needs react,

    $ npm install react

but as react will render for the internet, for dom, we need react-dom

    $ npm install react-dom

And all three of these installations could have been done with:

    $ npm install next react react-dom

To run the framework locally and create the first page of the project, but first of all in **package.json**, create a shortcut

     "scripts": {
        "dev": "next dev"
      },

Now to run the server locally just:

    $ npm run dev

But it will probably give an error, because you need a folder at the root with the name "pages". You do not need to configure the routes of your project, because for each file inside the pages folder it automatically turns a route and a page (as it was in PHP), for example:
| /pages/index.js | site.com |
|--|--|
| /pages/contato.js| site.com/contato |
| /pages/contato.js| site.com/contato |
| /pages/blog/index.js| site.com/blog |
| /pages/sobre/ricardo.js| site.com/sobre/ricardo |
> 
> 
So, in the project folder, create a **pages** folder and inside it create an **index.js** (*pages/index.js*) file

    import { useState } from 'react';
    
    function Home(){
        return (
            <div>
                <h2>Home Page - Ricardo Volert</h2>
                <Contador />
            </div>
        )
    }
    
    function Contador(){
        const [contador, setContador] = useState(1);
    
        function adicionarContador(){
            setContador(contador + 1);
        }
        return (
            <div>
                <div>{contador}</div>
                <button onClick={adicionarContador}>Adicionar</button>
            </div>
        )
    }
    
    
    export default Home


Just save and now run the server with:

    $ npm run dev


And now we will have the site running normally on port 3000 of localhost

    http://localhost: 3000

And we will have our static page and auto reload, so we can continue the project and each time we save the project, it will maintain the state of the project elements and update the page.


Now, to put it into production, we stopped the server and pushed this material to github

    $ git status
    $ git add -A
    $ git commit -m 'primeira página'
    $ git push origin main

We created an account at Vercel using the Github account and imported this project we are working on, which in this case generated the site:

 - https://ideia-nextjs-one.vercel.app/

This Vercel test service (https://vercel.com/) is a way they found for you to test the site in production, mainly to study the technologies mentioned here.

You can follow Deploy, Builds and other options. Deploy to production is very fast and in addition:
- *Allows customized addresses (even for hobbyists)*
- *The content is replicated in 70 points (including São Paulo)*
- *Automatic and free HTTPS*
- *File compression (HTML, JS, CSS and Images)*
- *Automatic cache invalidation*
- *Code splitting (load only as needed)*
- *Numerous good professional service practices*

From now on, any material that is in the github repository will be automatically deployed by Vercel.


In addition, if you push a code change to another branch, Vercel will keep the site running the main branch and automatically create another URL with the other branch, for that we will create another branch called "teste":

    git checkout -b teste

now let's change something we want and let's push this:

    git add -A
    git commit -m 'nova chamada'
    git push origin teste

and at this moment Vercel will already deploy to a separate URL and we can observe the "pull request" on Github that Vercel is commenting on the creation of this deploy and when it is finished, will add the URL for pre-review. Thus, we will have two versions running at the same time.

## Some Updates

> Of course, some pages have been inserted and will continue to be
> updated as the project develops, so it is important first of all to
> detail what they are for:

### Step 1

The page at /pages/nav.js is designed to serve as a main menu for the entire site. This feature can be replicated and expanded in a number of ways on a website. To use it in the other pages that are in the *pages/* directory, something like for example is used in the **.js** documents:

   **[in page header in js]**
   

    import Nav from '../components/nav'

**[within the function that loads the content of the page]**

     <Nav />

### Step 2

The page **/pages/404.js** is for any error404.


### Step 3

At some point, I encountered the CSS problem, as it is something that caused me some difficulty to make it work. To solve this problem, I found a solution that is based on installing TailWind and using it instead of Bootstrap and with that, I can still have a working CSS file! \o/

>  [https://tailwindcss.com/docs/guides/nextjs](https://tailwindcss.com/docs/guides/nextjs)
> The steps to work with the link above are basically:

We will use the VS Code integrated terminal and at first we will use the following installation command

    $ npm install tailwindcss@latest postcss@latest autoprefixer@latest

And then, inside the project folder, let's start **TailwindCSS**

    $ npx tailwindcss init -p

This command will generate the *tailwind.config.js* and *postcss.config.js* files

After that, we update or create the **pages/_app.js** file with the following content

    // pages/_app.js
    import '../styles/globals.css'
    
    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
    }
    
    export default MyApp

In the root directory, where the pages directory is located, we create the *styles* directory and inside it we insert the file *globals.css*

    /* ./styles/globals.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


### Step 4

According to [Bruno Bertolini](https://github.com/brunobertolini) recommendations, I performed the following command in the VSCode terminal:

    $ npm install @zeit/next-css autoprefixer

and created the **next.config.js** page at the root of the project with the following code:

    const withCSS = require('@zeit/next-css')
    module.exports = withCSS

> Note: I still need to know if the items made above still in this step are really necessary. However, from that moment on, using className in the TailWind pattern and CSS mixes in **pages/learning.js** and also in **styles/globals.css** in addition to changes in **tailwind.config.js** started to make some sense and really be applied to my study template

## Support tools
- Vercel
- VS Code
- Github

## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Email-me: ricardovolert@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/ricardovolert/)

Thank you!


Thanks to the incredible [Filipe Deschamps](https://github.com/filipedeschamps/) for teaching me a little about this [subject](https://www.youtube.com/watch?v=EW7m2WIvFgQ&ab_channel=FilipeDeschamps). Thanks to [Bruno Bertolini (CodarMe)](https://www.youtube.com/watch?v=cV3q3OnxmA8&ab_channel=CodarMe) for the TailWind tips that it also made available in its [repository](https://github.com/CodarMe/lesson-tailwind-nextjs).

## License

None