import { Link } from "@remix-run/react";
import nika from "~/assets/color-nika.jpeg";
import Projects from "./projects";

const SHOW_PROJECTS = true;

const aspectRatio = 695 / 683;

export default function Homepage() {
  return (
    <>
      <div className="mt-16 text-white gap-x-32 text-justify relative grid grid-cols-10 mb:grid-cols-1 ">
        <div className="col-span-4 col-start-2  mb:w-3/4">
          <h1 className="opacity-90 col-span-3 font-medium text-3xl mb:text-sm">
            <span className="mb:text-xl">Hi, I’m Berenika.</span>
            <span
              style={{ fontSize: "2.625rem" }}
              className="inline-block ml-12 animate-say-hi "
            >
              👋
            </span>
          </h1>
          <h2 className="text-lg mt-8 opacity-50 mb:text-sm">
            {" "}
            I am a Web Developer from New York 🇺🇸. I enjoy building everything
            from small business sites to rich interactive webs.
          </h2>

          <div
            style={{ minHeight: 1 }}
            className="bg-white bg-opacity-20 my-16"
          />
          <div
            style={{ marginTop: -8 }}
            className="col-span-4 col-start-2 text-lg pb-8 mb:col-span-1 "
          >
            <h2 className="mt-0 mb-6  text-2xl text-white opacity-80 mb:text-xl mb:mt-96">
              About Me
            </h2>
            <p className="opacity-50 mb:text-sm">
              {" "}
              I am originally from Kosovo, moved to New York in 2017. Moving to
              the US at age 20 on my own, was the very first big step out of my
              comfort zone. A transition that helped me gain a global mindset,
              developed my cultural awareness and engraved the adaptability
              skill in me.
            </p>
            <p className="mt-6 opacity-50 mb:text-sm">
              In 2018 I started college in accounting and worked full time in
              the Hospitality industry simultaneously. Service industry work
              helped me evolve soft skills such as discipline, the ability to
              absorb criticism, and most important to read people like a book.
              Studying and working all together was challenging but it helped to
              get very good at managing my time and achieving my daily goals.
            </p>

            <p className="mt-6 opacity-50 mb:text-sm">
              A year before graduating from University I started a Udemy course
              about javascript fundamentals encouraged by a friend who is in the
              tech industry. As someone who loves problem-solving at that moment
              I knew I was going to learn to code, and here comes the second big
              step in my life. I decided to drop out of college and started an
              intensive coding course at Bloomtech. BloomTech is a 6 months
              FullStack Web Development online course that prepared me for a
              career in the tech industry. I graduated from BloomTech on May
              2022 with experience of over 1000 hours of coding using Frontend
              and Backend tools such as React, JavaScript, HTML/CSS, Node.js,
              RESTful API, and more. I also had the opportunity to work on
              different projects with different teams which engraved my work
              with different people.
            </p>

            <p className="mt-6 opacity-50 mb:text-sm">
              Looking back at how my life and my web development career
              unfolded, I see that most of it was a result of my beginner's
              mindset and curiosity. Curiosity about new places, new skills, and
              new opportunities.
              <br />
              Web development calls to my passions and I am ready and
              enthusiastic to collaborate and help companies succeed through my
              creativity, problem-solving and hard work.
            </p>

            <Link
              className="mt-16 inline-block h-fit ease-in-out duration-150 bg-orange-400 hover:scale-105 p-3 px-6 text-lg font-medium rounded-sm"
              to={SHOW_PROJECTS ? "#projects" : "/projects"}
            >
              See my work
            </Link>
          </div>
        </div>

        <div className="col-span-4 min-h-96 relative mb:absolute  mb:ml-10  ">
          <img
            style={{ width: aspectRatio * 500 }}
            className="static rounded-lg object-cover mb:mt-60 mb:h-[310px] h-[600px] mb:object-contain   "
            src={nika}
            alt="nika"
          />
        </div>
      </div>

      {SHOW_PROJECTS && (
        <div id="projects">
          <Projects className="mt-4 pt-4" />
        </div>
      )}
    </>
  );
}
