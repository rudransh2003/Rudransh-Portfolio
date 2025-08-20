/* eslint-disable @next/next/no-img-element */
export default function Contact() {
  return (
    <div
      id="contact"
      className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100"
    >
      {/* Left Section */}
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <p className="text-lg text-gray-400">
            Feel free to reach out to me through email or WhatsApp.
          </p>
        </div>
        <img
          src="/conversation_illustration.svg"
          alt="Contact Illustration"
          className="h-52 md:h-64"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center space-y-6">
        {/* Gmail */}
        <div className="p-6 rounded-lg shadow-md bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-[#FC4370]">Email</h3>
          <p className="text-lg">
            <a
              href="mailto:singhchouhanrudransh@gmail.com"
              className="hover:underline"
            >
              singhchouhanrudransh@gmail.com
            </a>
          </p>
        </div>

        {/* WhatsApp */}
        <div className="p-6 rounded-lg shadow-md bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-[#25D366]">WhatsApp</h3>
          <p className="text-lg">
            <a
              href="https://wa.me/918839931999" // replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +91 8839931999
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}