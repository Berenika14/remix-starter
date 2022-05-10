import animated from "~/assets/animated.png";
import { getMembers } from "../../app/fetch/github";
import { useLoaderData } from "@remix-run/react";

export let loader = async () => {
  return getMembers();
};
export default function About() {
  let user = useLoaderData();
  console.log(user);
  return (
    <div className="text-white text-justify  p-32 ">
      <h1>{user.bio}</h1>
      <h2 className="mb-10  ">
        ☞ Web Development calls to my passions: it integrates creativity and
        problem solving and I am allowed to break the code to improve it (in a
        different Git Branch, of course).
      </h2>
      <h2 className="mb-10  ">
        My values: 🌻 Expressions as the authentic self 💜 Safety and trust 🧩
        Beginners mindset and curiosity 🙌 Shared understanding and consensus
      </h2>
      <h2 className="mb-10  ">
        🛠CurrentTech Stack : Frontend: JavaScript, React, Redux, HTML, CSS,
        Hooks, Jest, Cypress, Yup, Axios, Responsiveness, Styled-Components,
        SPAs Backend: Node.js, Express, SQL, PostgreSQL, SQLiteStudio, JSON Web
        Tokens, REST APIs, Authentication, Testing Additional: Git, GitHub, VS
        Code,Terminal, Postman, Vercel, Heroku, Algorithms, Debugging,
        Deployment
      </h2>
      <div className="w-96 h-96 ml-8 flex flex-row-reverse">
        <img src={animated} alt="girl coding" />
      </div>
      <div className="flex flex-row">
        <h2>My Frontend Toolbox:</h2>
        <br />
        <p>
          <img
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            alt="react badge"
          />
          <img
            src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
            alt="redux badge"
          />
          <img
            src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
            alt="styled-components badge"
          />
          <img
            src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
            alt="Material"
          />
          <img
            src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
            alt="bootstrap"
          />
        </p>
        <br />
        <h2>Backend Toolbox:</h2>
        <br />
        <p>
          <img
            src="https://img.shields.io/badge/JavaScript-007ACC?style=for-the-badge&logo=javascript&logoColor=white"
            alt="javascript"
          />
          <img
            src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
            alt="logo"
          />
          <img
            src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"
            alt="sqlite"
          />
          <img
            src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
            alt="postgres"
          />
          <img
            src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
            alt="express"
          />
        </p>
        <br />
        <h2>Cloud Hosting</h2>
        <br />
        <p>
          <img
            src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
            alt="heroku"
          />
          <img
            src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
            alt="amazon"
          />
          <img
            src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
            alt="netlify"
          />
        </p>
      </div>
    </div>
  );
}
