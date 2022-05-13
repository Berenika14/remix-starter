import { SocialMediaIconsReact } from "social-media-icons-react";

function IconCard({
  icon,
  size = "28",
  url,
  label,
  value,
}: {
  label: string;
  url?: string;
  icon: string;
  size?: string;
  value: string;
}) {
  return (
    <div
      style={{
        color: "rgba(255, 255, 255, 0.75)",
        borderRadius: 4,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      }}
      className={`py-8 border ${
        url != null ? "cursor-pointer" : ""
      } border-white border-opacity-25 rounded-sm px-16`}
    >
      <div className="flex flex-row align-end">
        <div className=" text-md text-orange-400 text-opacity-50 ">{label}</div>
        <SocialMediaIconsReact
          icon={icon}
          backgroundColor="transparent"
          borderWidth="0"
          border="none"
          url={url}
          iconColor="rgba(255, 255, 255, 0.5)"
          size={size}
        />
      </div>
      <div>{value}</div>
    </div>
  );
}

export default function Contacts() {
  return (
    <div className="mb:mb-6">
      <div
        style={{ textAlign: "center" }}
        className=" text-orange-500  text-2xl mb-20 mt-48 opacity-80 mb:mt-16 mb:mb-16"
      >
        Contact Me
      </div>

      <div
        style={{ flex: "column", justifyContent: "center" }}
        className=" text-orange-400 flex  space-x-32  mb:grid mb:grid-cols-1 mb:space-x-0 mb:w-1/2 mb:ml-32 mb:space-y-4 "
      >
        <IconCard value="(347) 280-0754" icon="phone" label="Phone" />
        <IconCard icon="mail" value="nikaa@hey.com" label="Email" />
      </div>

      <div
        style={{ flex: "column", justifyContent: "center" }}
        className="mt-24 text-orange-400 flex space-x-32 mb:grid mb:grid-cols-1 mb:space-y-4"
      >
        <div className=" hover:scale-105 hover:bg-gray-900 mb:space-x-0 mb:w-1/2 mb:ml-32">
          <IconCard
            value="@Berenika "
            label="Linked In"
            icon="linkedin"
            url="https://www.linkedin.com/in/berenika-ahmetaj/"
          />
        </div>
        <div className=" hover:scale-105  hover:bg-gray-900 mb:space-x-0 mb:w-1/2 mb:ml-20  ">
          <IconCard
            value="@Berenika14"
            label="Github"
            icon="github"
            url="https://github.com/Berenika14"
          />
        </div>
        <div className=" hover:scale-105 hover:bg-gray-900 mb:space-x-0 mb:w-1/2 mb:ml-20">
          <IconCard
            value="@berenika"
            label="Twitter"
            icon="twitter"
            url="https://twitter.com/berenikaahmetaj"
          />
        </div>
      </div>
    </div>
  );
}
