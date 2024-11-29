import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const destinations = [
  {
    name: "París",
    image: "https://cdn.pixabay.com/video/2024/06/05/215421_large.mp4",
    description: "La ciudad del amor y la luz",
  },
  {
    name: "Tokio",
    image: "https://cdn.pixabay.com/video/2024/11/24/243075_large.mp4",
    description: "Una mezcla de lo moderno y tradicional",
  },
  {
    name: "Nueva York",
    image: "https://cdn.pixabay.com/video/2020/06/18/42489-431756111_large.mp4",
    description: "La ciudad que nunca duerme",
  },
  {
    name: "Roma",
    image: "https://cdn.pixabay.com/video/2020/09/29/51131-463106379_large.mp4",
    description: "La ciudad eterna llena de historia",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
          Destinos Populares
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((destination) => (
            <Card key={destination.name} className="flex flex-col h-full">
              <CardHeader className="p-0">
                <video autoPlay loop muted>
                  {" "}
                  <source
                    src={destination.image}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </video>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <CardTitle className="text-xl mb-2">
                  {destination.name}
                </CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
