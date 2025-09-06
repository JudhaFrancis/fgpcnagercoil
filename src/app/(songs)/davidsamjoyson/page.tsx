export default function DavidsamJoysonPage() {
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
          <h1 className="text-center font-montserrat mb-48 md:mb-24 text-6xl font-semibold text-white">Davidsam Joyson</h1>
        </div>
      </section>
    </main>
  );
}