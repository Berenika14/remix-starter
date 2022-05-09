import { Link } from "@remix-run/react";
import nika from "~/assets/nika.jpeg";
export default function Homepage() {
  return (
    <div className="text-white text-justify  p-40">
      <h2 className="text-lg mb-2">👋 Hi, I’m Berenika.</h2>
      <h1 className="text-4xl mb-2"> I code to bring ideas to life.</h1>
      <h3>
        I am a Web Developer New York 🇺🇸. I enjoy building everything from small
        business sites to rich interactive webs.
      </h3>
      <br />
      <Link
        className="hover:underline text-orange-400   hover:scale-150"
        to="/about"
      >
        More About Me ﹤{" "}
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className="text-4xl">What I do</h2>
      <Link className="hover:underline text-orange-400" to="/projects">
        Learn more ﹤{" "}
      </Link>
      <div className="rounded-full">
        <img className="rounded-full " src={nika} />
      </div>
    </div>
  );
}
