import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const offers = [
  {
    title: "Escapada a la playa",
    description:
      "5 noches en un resort todo incluido con actividades acuáticas y relajación total",
    features: [
      "Alojamiento de lujo",
      "Todas las comidas incluidas",
      "Deportes acuáticos",
    ],
  },
  {
    title: "Aventura en la montaña",
    description:
      "7 días de senderismo y naturaleza en los paisajes más impresionantes",
    features: [
      "Guías expertos",
      "Equipo de senderismo",
      "Alojamiento en cabañas",
    ],
  },
  {
    title: "Tour cultural",
    description:
      "10 días explorando ciudades históricas y sus tesoros arquitectónicos",
    features: [
      "Visitas guiadas",
      "Entradas a museos",
      "Transporte entre ciudades",
    ],
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
          Ofertas Especiales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer) => (
            <Card key={offer.title} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{offer.title}</CardTitle>
                <CardDescription>{offer.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-1">
                  {offer.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
