export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Sobre Nosotros
            </h3>
            <p className="text-sm">
              SucreViaja es tu agencia de viajes de confianza para descubrir el
              mundo.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Contacto
            </h3>
            <p className="text-sm">Email: SucreViaja@gmail.com</p>
            <p className="text-sm">Teléfono: +57 310 563 6292</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 SucreViaja. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
