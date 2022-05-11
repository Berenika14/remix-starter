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
  value: sting;
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
        <div className="text-md text-white text-opacity-50">{label}</div>
        <SocialMediaIconsReact
          icon={icon}
          backgroundColor="transparent"
          borderWidth="0"
          border="none"
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
    <div>
      <div
        style={{ textAlign: "center" }}
        className=" text-white  text-2xl mb-20 mt-48 opacity-50"
      >
        Contact Me
      </div>
      <div
        style={{ flex: "column", justifyContent: "center" }}
        className=" text-white flex  space-x-64 "
      >
        <IconCard value="(555) 200-1212" icon="phone" label="Phone" />
        <IconCard icon="mail" value="nikaa@hey.com" label="Email" />
      </div>

      <div
        style={{ flex: "column", justifyContent: "center" }}
        className="mt-24 text-white flex  content-end  space-x-32 "
      >
        <div className=" hover:scale-105">
          <IconCard
            value="@nika"
            label="Linked In"
            icon="linkedin"
            url="https://www.linkedin.com/in/berenika-ahmetaj/"
            size="48"
          />
        </div>
        <div className=" text-white hover:scale-105   ">
          <IconCard
            value="@Berenika14"
            label="Github"
            icon="github"
            url="https://github.com/Berenika14"
            size="48"
          />
        </div>
        <div className=" hover:scale-105">
          <IconCard
            value="@berenika"
            label="Twitter"
            icon="twitter"
            url="https://twitter.com/berenikaahmetaj"
            size="48"
          />
        </div>
      </div>
    </div>
  );
}
