import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./font.css";

function Midonebody() {
  const [hideIcons, setHideIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideIcons(window.scrollY > 50); // 👈 Customize scroll threshold here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative h-[79vh] overflow-hidden">
        {/* ✅ Background DS logo */}
        <div className="absolute left-0 top-0 h-full w-1/2 z-0 opacity-50 brightness-90">
          <img
            src="/devlogo.png"
            alt="ds logo"
            className="h-full object-contain pl-4"
          />
        </div>

        {/* ✅ Foreground content */}
        <div className="flex items-center justify-between h-full px-6 sm:px-10 md:px-20 relative z-10 ">
          {/* ✅ Text content */}
          <div className="max-w-lg text-white space-y-3 pt-4 mt-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[600] font-['spartan'] whitespace-nowrap">
              Durgesh Sharma
            </h1>
            <h2 className="font-[merriweather] italic text-sm sm:text-base md:text-lg mt-2">
              I'm a
            </h2>
            <span className="font-[merriweather] italic block text-3xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#66d3fa] via-[#80bfff] to-[#b8cfff] bg-clip-text text-transparent">
              <Typewriter
                words={[
                  "Front-end Developer",
                  "Coder",
                  "Graphic Designer",
                  "Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={500}
              />
            </span>

            <p className="text-sm sm:text-base mt-2">
              I am a passionate front-end developer with strong expertise in
              React.js and Tailwind CSS. I have a solid foundation in HTML, CSS,
              and JavaScript, Bootstrap, and I specialize in building dynamic
              and responsive user interfaces. Additionally, I am proficient in
              C, C++, and Python, which complements my development skills.
            </p>

            <div className="flex gap-4 mt-4">
              <button
                className="transition-all duration-300 hover:scale-110 text-sm sm:text-base 
                bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] 
                py-2 px-4 sm:px-5 rounded font-extrabold text-white 
                hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]"
              >
                About Me
              </button>
              <button
                className="transition-all duration-300 hover:scale-110 text-sm sm:text-base 
                bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] 
                py-2 px-4 sm:px-5 rounded font-extrabold text-white 
                hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]"
              >
                My Resume
              </button>
            </div>
          </div>

          {/* ✅ Image */}
          <div className="hidden md:block -translate-x-1/3 group">
            <div className="rounded-full p-2 bg-white/5 transition-all duration-700 ease-in-out group-hover:shadow-[0_0_35px_8px_rgba(255,255,255,0.3)]">
              <img
                src="/saatvik.webp"
                alt="Durgesh Sharma"
                className="h-[400px] w-[400px] object-cover rounded-full transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        
      </div>
      {/* ✅ Social Icons with Scroll-Based Slide Animation */}
        <div
          className={`fixed top-1/2 right-[4px] transform -translate-y-1/2 z-20 transition-all duration-500 ${
            hideIcons
              ? "translate-x-[100px] opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <ul className="ml-auto mr-2 text-[#b0b2c3] space-y-6 sm:space-y-10 w-5 sm:w-7">
            {icons.map((icon, i) => (
              <li
                key={i}
                className="transition-transform duration-300 hover:scale-125 hover:text-white"
              >
                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={icon.viewBox}
                    fill="currentColor"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
    </>
  );
}

const icons = [
  {
    href: "/",
    viewBox: "0 0 448 512",
    path: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3M447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z",
  },
  {
    href: "/",
    viewBox: "0 0 512 512",
    path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48z",
  },
  {
    href: "/",
    viewBox: "0 0 448 512",
    path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8z",
  },
  {
    href: "/",
    viewBox: "0 0 512 512",
    path: "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V212.2l-133 116.6c-38.4 31.5-93.7 31.5-132 0L48 212.2z",
  },
  {
    href: "https://github.com/your-username",
    viewBox: "0 0 24 24",
    path: "M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.293 9.393 7.87 10.914.575.11.786-.25.786-.555 0-.273-.01-.998-.015-1.96-3.203.695-3.88-1.543-3.88-1.543-.523-1.328-1.278-1.683-1.278-1.683-1.045-.715.08-.7.08-.7 1.155.082 1.763 1.186 1.763 1.186 1.027 1.762 2.694 1.253 3.35.957.104-.744.4-1.253.726-1.542-2.554-.29-5.238-1.277-5.238-5.685 0-1.255.45-2.283 1.186-3.088-.12-.29-.515-1.457.112-3.036 0 0 .967-.31 3.17 1.178a11.03 11.03 0 0 1 2.888-.388 11.02 11.02 0 0 1 2.888.388c2.203-1.488 3.17-1.178 3.17-1.178.627 1.579.233 2.746.114 3.036.74.805 1.186 1.833 1.186 3.088 0 4.42-2.69 5.39-5.255 5.676.41.35.77 1.035.77 2.086 0 1.506-.014 2.72-.014 3.09 0 .308.21.67.792.556C20.71 21.39 24 17.084 24 12c0-6.352-5.148-11.5-11.5-11.5z",
  },
];

export default Midonebody;
