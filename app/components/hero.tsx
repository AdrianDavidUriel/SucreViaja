export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2022/11/25/140421-775192162_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 bg-black bg-opacity-50 h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Descubre el mundo con Sucre Viaja
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Encuentra los mejores destinos para tus próximas vacaciones
          </p>
        </div>
      </div>
    </section>
  );
}
