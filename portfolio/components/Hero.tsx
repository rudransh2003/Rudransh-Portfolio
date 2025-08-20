export default function Hero() {
  return (
    <section id="home">
      <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center lg:text-left">
          <div>
            <div className="mb-[.7rem]">
              <h1 className="text-5xl font-bold sm:text-6xl">
                Hey, I'm <span className="text-[#FC4370]">Rudransh</span>
              </h1>
            </div>
            <div className="mb-[3rem]">
              <h1 className="text-5xl font-bold sm:text-5xl">
                A full-stack developer.
              </h1>
            </div>
          </div>

          {/* Main Buttons */}
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#work"
              className="px-8 py-3 text-lg font-semibold rounded border-2 border-[#FC4370] text-[#FC4370] hover:bg-[#FC4370] hover:text-white transition"
            >
              See my work
            </a>
            <a
              href="https://drive.google.com/file/d/1hX5OhzFIYgsO4GoD1fzuMpz3L4rsACXO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-semibold rounded border-2 border-[#FC4370] text-[#FC4370] hover:bg-[#FC4370] hover:text-white transition"
            >
              View Resume
            </a>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-row items-center justify-center mt-6 space-x-4 lg:justify-start">
            <a
              href="https://github.com/rudransh2003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded border-2 border-[#FC4370] text-[#FC4370] hover:bg-[#FC4370] hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rudransh-singh-chouhan-b46b8b26b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded border-2 border-[#FC4370] text-[#FC4370] hover:bg-[#FC4370] hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/rudranshsingh_/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded border-2 border-[#FC4370] text-[#FC4370] hover:bg-[#FC4370] hover:text-white transition"
            >
              LeetCode
            </a>
          </div>
        </div>

        {/* Right Section Image */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/hero_illustration.svg"
            alt="Hero Illustration"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}