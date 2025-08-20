export default function About() {
  const data = [
    {
      title: "Who Am I",
      content: [
        "I'm Rudransh Singh Chouhan, a Full Stack Developer with hands-on experience building scalable frontend applications using React, Tailwind CSS, Context API, and Redux Toolkit.",
        "Skilled in developing RESTful APIs using FastAPI (Python) and Express.js, with solid experience in JWT authentication, MongoDB, and PostgreSQL.",
      ],
    },
    {
      title: "Skills & Tools",
      content: [
        "Languages: JavaScript, C++, SQL, Java, Python",
        "Frontend: React.js, Tailwind CSS, Context API, Redux Toolkit",
        "Backend: FastAPI, Express.js, Node.js",
        "Tools: Git, GitHub, VS Code, Postman, Vercel, Socket.IO",
        "Problem Solving: Data Structures & Algorithms – 150+ questions solved in C++ (LeetCode & GFG)",
      ],
    },
  ];

  return (
    <div id="about" className="container px-[1rem] sm:px-[4rem] sm:mx-auto">
      <div className="flex flex-row items-center">
        <div className="section-line bg-[#FC4370] w-16 h-1 mr-6"></div>
        <p className="section-category text-grey text-base font-medium">About</p>
      </div>

      <h2 className="about-h2 lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white">
        Get a closer look at who I am.
      </h2>

      <div className="flex flex-col overflow-hidden rounded-md shadow-sm md:flex-row-reverse">
        {/* Right Side Image */}
        <div className="flex items-center justify-center">
          <img src="/mobile_guy.svg" alt="" className="p-8 w-[20rem]" />
        </div>

        {/* Left Side Content */}
        <div className="flex flex-col justify-center flex-1 px-6 py-12">
          {data.map((section, i) => (
            <div key={i} className="mb-8">
              <div className="flex flex-row items-center">
                <div className="section-line bg-[#FC4370] w-10 h-1 mr-6"></div>
                <p className="section-category text-grey text-2xl font-semibold">
                  {section.title}
                </p>
              </div>

              <ul className="list-disc pl-8 mt-4 space-y-2">
                {section.content.map((item, idx) => (
                  <li key={idx} className="dark:text-gray-400 text-lg font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}