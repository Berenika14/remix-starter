import anywhere from "./../../assets/anywhere.png";

import coder from "./../../assets/CoderHeroes.png";
function Badge({ src, alt }) {
  return (
    <img src={src} alt={alt} style={{ aspectRatio: "auto", width: 150 }} />
  );
}
export default function Projects({
  className,
  style,
}: {
  className?: string | undefined;
  style?: any;
}) {
  return (
    <div className={className} style={style}>
      <div className="mt-24 text-white gap-x-32 text-justify grid grid-cols-2 justify-items-center mx-14 ">
        <div>
          <h2 className="text-white opacity-70 font-bold text-3xl mb-5 grid justify-items-center">
            Coder Heroes
          </h2>
          <a href="https://a.coderheroes.dev/">
            <img
              className="rounded-lg  object-cover h-fit ease-in-out duration-200 hover:scale-105"
              src={coder}
              alt="coder"
            />
          </a>
          <h3 className="font-bold opacity-80 text-2xl mt-10 mb-4 ml-4">
            Backend Developer
          </h3>
          <ul
            role="list"
            className="marker:text-orange-500 pr-10 text-lg list-disc pl-5 space-y-3 text-orange-50 opacity-50"
          >
            <li className="pl-3">
              Developed the registering endpoint using Okta identity cloud
              allowing users to post to the Okta Dashboard and Database.
            </li>
            <li className="pl-3">
              Created a library directory and API token to authenticate the post
              request for the registering endpoint in Node
            </li>
            <li className="pl-3">
              Fixed bugs in the existing codebase by using the debugger tool in
              the vs code and testing the endpoints on postman which results in
              better functionality of the application
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white opacity-70 font-bold text-3xl mb-5 grid justify-items-center">
            Anywhere Fitness
          </h2>
          <a href="https://front-end-git-main-ft-anywhere-fitness-09.vercel.app/">
            <img
              className="rounded-lg object-cover h-fit ease-in-out duration-200 hover:scale-105"
              src={anywhere}
              alt="anywhere"
            />
          </a>
          <h3 className="font-bold opacity-80 text-2xl mt-10 mb-4 ml-4">
            Frontend Developer
          </h3>
          <ul
            role="list"
            className="marker:text-orange-500 pr-10 text-lg list-disc pl-5 space-y-3 text-orange-50 opacity-50"
          >
            <li className="pl-3">
              Created a Fitness Class Management platform that allows users to
              select and sign up as an instructor or client
            </li>
            <li className="pl-3">
              Built designated components using React, Context API for state
              management, and JWTs to ensure authorized users' login
              verification and CRUD operations for the class components
            </li>
            <li className="pl-3">
              Added functionality by creating a Class Form component using React
              and Axios that enables client users to register for specific
              classes available and launched using Vercel
            </li>
          </ul>
        </div>
      </div>
      <h3 className="text-white opacity-80 text-xl mt-10 mb-8 px-10 ">
        Tech Stack used to create above applications
      </h3>
      <div className="flex flex-row flex-wrap justify-evenly ">
        <div className=" flex flex-row flex-wrap space-between space-x-16  w-screen px-10">
          <Badge
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            alt="react badge"
          />
          <Badge
            src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
            alt="redux badge"
          />
          <Badge
            src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
            alt="styled-components badge"
          />
          <Badge
            src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
            alt="Material"
          />
          <Badge
            src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
            alt="bootstrap"
          />
          <Badge
            src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
            alt="bootstrap"
          />
        </div>

        <div
          style={{ marginTop: 20 }}
          className="flex flex-row flex-wrap space-x-16  w-screen px-10  "
        >
          <Badge
            src="https://img.shields.io/badge/JavaScript-007ACC?style=for-the-badge&logo=javascript&logoColor=white?"
            alt="javascript"
          />
          <Badge
            src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
            alt="logo"
          />
          <Badge
            src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"
            alt="sqlite"
          />
          <Badge
            src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
            alt="postgres"
          />
          <Badge
            src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
            alt="express"
          />
          <Badge
            src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"
            alt="postman"
          />
          <div />
        </div>

        <div
          style={{ marginTop: 20, marginBottom: 40 }}
          className=" flex flex-row flex-wrap space-x-16 w-screen
       px-10"
        >
          <Badge
            src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
            alt="heroku"
          />
          <Badge
            src="	https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
            alt="vercel"
          />
          <Badge
            src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
            alt="netlify"
          />
        </div>
      </div>
    </div>
  );
}
