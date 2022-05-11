import { Link } from "@remix-run/react";
import nika from "~/assets/color-nika.jpeg";

const aspectRatio = 695 / 683;
// divide-y divide-slate-400/25
export default function Homepage() {
  return (
    <div className="mt-16 text-white gap-x-32 text-justify relative grid grid-cols-10  divide-y divide-slate-400/25 ">
      <div className="col-span-4 col-start-2 ">
        <h1 className=" mb-2 opacity-90 col-span-3 font-medium text-3xl">
          <span>Hi, I’m Berenika.</span>

          <span
            style={{ fontSize: "2.625rem" }}
            className="inline-block ml-12 animate-say-hi"
          >
            👋
          </span>
        </h1>
        <h2 className="text-lg mb-2 opacity-50">
          {" "}
          I code to bring ideas to life.
        </h2>
        <p className="mt-16">
          I am a Web Developer from New York 🇺🇸. I enjoy building everything
          from small business sites to rich interactive webs.
        </p>
        <Link
          className="mt-8 inline-block h-fit ease-in-out duration-150 bg-orange-400 hover:scale-105 p-3 px-6 text-lg font-medium rounded-sm"
          to="/projects"
        >
          About my work
        </Link>
      </div>

      <div className="col-span-4 min-h-96">
        <img
          style={{ height: 600, width: aspectRatio * 500 }}
          className="rounded-lg object-cover"
          src={nika}
          alt="nika"
        />
      </div>
      {/* <h2 className="mt-96 text-4xl">What I do</h2>
      <Link className="hover:underline text-orange-400" to="/projects">
        Learn more ﹤{" "}
      </Link> */}

      <div className="col-span-4 col-start-2 mt-24 ">
        <h2 className="mb-6 text-2xl">About Me</h2>
        <p>
          {" "}
          Web Development calls to my passions: it integrates creativity and
          problem solving and I am allowed to break the code to improve it (in a
          different Git Branch, of course). I am eager to learn programming
          skills that will help the team succeed through creativity,
          problem-solving and hard work.
        </p>
        <h2 className="mt-6 ">
          My values:
          <p>🌻 Expressions as the authentic self </p>
          <p>💜 Safety and trust</p>
          <p>🧩 Beginners mindset and curiosity</p>
          <p>🙌 Shared understanding and consensus</p>
        </h2>
        <Link
          className="mt-8 inline-block h-fit ease-in-out duration-150 bg-orange-400 hover:scale-125 p-4 px-6 text-lg font-medium rounded-sm mb-14"
          to="/contacts"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
