export default function ContactUsPage() {
  return (
    <main>
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
            <h1 className="font-montserrat mb-24 text-6xl font-semibold text-white">Contact Us</h1>
        </div>
      </section>
    </main>
  );
}