# ideia-nextjs: Integration Project (VS Code + Github + Versel)


## About this Project

This project is a simple page to test the functionality of NodeJS and the integration of services, seeking to update knowledge regarding the development of new solutions.

## Why?

Even though I am a PHP programmer and developer, I understand that the world is modernizing and that new technologies are welcome.

PHP is unlikely to die over time and even being used en masse and creating the most beautiful and largest systems to date, it is important to keep up with the development of Software Architecture and therefore it is worth learning JavaScript / NodeJS to work in the Cloud in the future. .

Everything dies, but it is cool to learn during the journey and have options to replace technologies.

## Some Observations

This project is for studies only.

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

- React
- React-Dom
- NodeJS
- NextJS

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

and at this moment versel will already deploy to a separate URL and we can observe the "pull request" on Github that Versel is commenting on the creation of this deploy and when it is finished, will add the URL for pre-review. Thus, we will have two versions running at the same time.

## Support tools
- Vercel
- VS Code
- Github

## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Email-me: ricardovolert@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/ricardovolert/)

Thank you!


## License

None