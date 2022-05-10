import animated from "~/assets/code-coffee.jpeg";
import { getMembers } from "../../app/fetch/github";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export let loader = async () => {
  try {
    console.log(`my loader is running!`);
    return json(await getMembers());
  } catch (e) {
    console.log(`failed to fetch data from github!`, e);
    throw new Response(e.message, { status: 500 });
  }
};
export default function About() {
  const user = useLoaderData();
  return (
    <div className="text-white text-justify p-32 relative bg-animated">
      <div className=" flex  flex-wrap w-1/2">
        <h2 className="mb-10 leading-loose ">
          <h1 className=" font-bold text-orange-400 text-2xl ">About Me</h1>
          <br />
          {user.bio}
          Web Development calls to my passions: it integrates creativity and
          problem solving and I am allowed to break the code to improve it (in a
          different Git Branch, of course). I am eager to learn programming
          skills that will help the team succeed through creativity,
          problem-solving and hard work.
        </h2>
        <h2 className="mb-10 leading-loose ">
          My values:
          <p>🌻 Expressions as the authentic self </p>
          <p>💜 Safety and trust</p>
          <p>🧩 Beginners mindset and curiosity</p>
          <p>🙌 Shared understanding and consensus</p>
        </h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 className=" font-bold text-orange-400 text-2xl">Skills</h1>
      <br />

      <div className="flex space-x-24">
        <div>
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
          <img
            src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
            alt="bootstrap"
          />
        </div>
        <div>
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
          <img
            src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"
            alt="postman"
          />
        </div>
        <div>
          <img
            src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
            alt="heroku"
          />
          <img
            src="	https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
            alt="vercel"
          />
          <img
            src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
            alt="netlify"
          />
        </div>
        <img
          className="w-100 h-96 absolute  right-36 top-36"
          src={animated}
          alt="girl coding"
        />
      </div>
      <div></div>
    </div>
  );
}
