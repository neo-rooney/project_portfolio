// next link
import Link from "next/link";

// icons
import { RiLinkedinLine, RiGithubLine, RiDribbbleLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href={"https://github.com/neo-rooney"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={
          "https://www.linkedin.com/in/%EC%B2%A0%ED%9B%88-%EB%B0%B0-602645241/"
        }
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://dribbble.com/bch3454"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiDribbbleLine />
      </Link>
    </div>
  );
};

export default Socials;
