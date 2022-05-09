import animated from "~/assets/animated.png";
export default function About() {
  return (
    <div className="text-white text-justify  p-32 ">
      <h2 className="mb-10  ">
        👋 Hi, I’m Berenika, a Full Stack Web Developer. ☞ Web Development calls
        to my passions: it integrates creativity and problem solving and I am
        allowed to break the code to improve it(in a different Git Branch, of
        course). I am eager to learn programming skills that will help the team
        succeed through creativity, problem-solving and hard work.
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
    </div>
  );
}
