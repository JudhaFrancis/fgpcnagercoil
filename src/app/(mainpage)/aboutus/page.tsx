export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] w-full bg-cover bg-center text-white flex items-end justify-center mt-[-100px]"
        style={{
          backgroundImage: "url('/header/fgpc_nagercoil.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 p-10">
          <h1 className="font-montserrat mb-48 md:mb-24 text-6xl font-semibold text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* Section 1 - Text Columns */}
      <section className="py-20 bg-white text-[#222831] font-poppins">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 md:mb-4 w-full md:w-3/4 font-montserrat">
            <span className="text-[#84373d]">Lorem ipsum</span> Integer nec odio Sed Praesent libero
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 leading-relaxed text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
              elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
              augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
              elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
              augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>
        </div>

        <div className="container mt-16 mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column - Video */}
          <div className="overflow-hidden shadow-lg rounded-2xl">
            <video
              className="w-full h-72 md:h-72 object-cover rounded-2xl"
              controls
              preload="metadata"
            >
              <source src="/about/about_fgpc_nagercoil.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Column - Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 font-montserrat">
              <span className="text-[#84373d]">Lorem ipsum</span> Integer nec odio Praesent libero
            </h2>
            <p className="mb-4 text-justify">
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
              Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
              eget nulla.
            </p>
            <blockquote className="w-full block border-l-4 border-[#84373d] pl-6 py-2 italic text-gray-700 font-semibold text-justify">
              "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
              Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
              eget nulla."
            </blockquote>

          </div>
        </div>
      </section>

      {/* Section - About with Images */}
      <section className="py-20 bg-[#f0f0f0] text-[#222831] font-poppins">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">

          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold font-montserrat">
              Lorem ipsum dolor Lorem ipsum dolor <span className="text-[#84373d]">sit amet</span>
            </h2>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
              elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
              augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>
        </div>

        {/* Image Row */}
        <div className="container mx-auto px-6 max-w-6xl mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <img
            src="/aboutus/aboutus_1.jpg"
            alt="About 1"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
          <img
            src="/aboutus/aboutus_2.jpg"
            alt="About 2"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
          <img
            src="/aboutus/aboutus_3.jpg"
            alt="About 3"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
          <img
            src="/aboutus/aboutus_4.jpg"
            alt="About 4"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Professional Timeline Section (Compact Desktop) */}
      <section className="py-14 md:py-20 bg-gray-50 font-poppins relative">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#222831] font-montserrat">
            Our <span className="text-[#84373d]">Journey</span>
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 md:mb-14 text-gray-600 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Vertical Gradient Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#84373d] to-gray-300"></div>

            {/* Timeline Item 1 */}
            <div className="mb-12 flex flex-col md:flex-row items-center md:justify-between relative">
              {/* Left Text Card */}
              <div className="md:w-5/12 text-right pr-4 md:pr-8">
                <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300">
                  <h3 className="text-2xl font-semibold text-[#84373d] mb-1">2025</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                    libero. Sed cursus ante dapibus diam. Duis sagittis ipsum. Praesent mauris.
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#84373d] border-4 border-white rounded-full shadow-md z-10"></div>

              {/* Right Image */}
              <div className="md:w-5/12 mt-4 md:mt-0">
                <img
                  src="/aboutus/aboutus_3.jpg"
                  alt="Timeline 2025"
                  className="w-full h-56 md:h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="mb-12 flex flex-col md:flex-row items-center md:justify-between relative">
              {/* Left Image */}
              <div className="md:w-5/12 md:order-1 order-2 mt-4 md:mt-0">
                <img
                  src="/aboutus/aboutus_2.jpg"
                  alt="Timeline 2015"
                  className="w-full h-56 md:h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#84373d] border-4 border-white rounded-full shadow-md z-10"></div>

              {/* Right Text Card */}
              <div className="md:w-5/12 md:order-2 order-1 text-left pl-4 md:pl-8">
                <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300">
                  <h3 className="text-2xl font-semibold text-[#84373d] mb-1">2015</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                    libero. Sed cursus ante dapibus diam. Duis sagittis ipsum. Praesent mauris.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="mb-12 flex flex-col md:flex-row items-center md:justify-between relative">
              {/* Left Text Card */}
              <div className="md:w-5/12 text-right pr-4 md:pr-8">
                <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300">
                  <h3 className="text-2xl font-semibold text-[#84373d] mb-1">2005</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                    libero. Sed cursus ante dapibus diam. Duis sagittis ipsum. Praesent mauris.
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#84373d] border-4 border-white rounded-full shadow-md z-10"></div>

              {/* Right Image */}
              <div className="md:w-5/12 mt-4 md:mt-0">
                <img
                  src="/aboutus/aboutus_1.jpg"
                  alt="Timeline 2005"
                  className="w-full h-56 md:h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
