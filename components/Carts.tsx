import Image from "next/image";

const cars = [
  {
    id: 1,
    name: "BMW M5",
    category: "Business",
    price: 120,
    seats: 5,
    transmission: "Auto",
    fuel: "Petrol",
    image: "/bmw3.jpg",
  },
  {
    id: 2,
    name: "BMW 5 Series",
    category: "Comfort",
    price: 85,
    seats: 5,
    transmission: "Auto",
    fuel: "Diesel",
    image: "/bmw2.jpeg",
  },
  {
    id: 3,
    name: "BMW 3 Series",
    category: "Economy",
    price: 60,
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    image: "/bmw.jpeg",
  },
];

export default function Carts() {
  return (
    <section className="bg-black py-20 px-6 md:px-16">

      {/* Заголовок секции */}
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#e55b5b" }}>
          Our Fleet
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Choose your <span style={{ color: "#e55b5b" }}>car</span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mb-14">
          Premium vehicles for every occasion — from business trips to weekend escapes.
        </p>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#e55b5b]/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Фото */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Категория badge */}
                <span
                  className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wide"
                  style={{ backgroundColor: "#e55b5b" }}
                >
                  {car.category}
                </span>
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-4">{car.name}</h3>

                {/* Характеристики */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-white/40 text-xs mb-1">Seats</p>
                    <p className="text-white font-semibold text-sm">{car.seats}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-white/40 text-xs mb-1">Gear</p>
                    <p className="text-white font-semibold text-sm">{car.transmission}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-white/40 text-xs mb-1">Fuel</p>
                    <p className="text-white font-semibold text-sm">{car.fuel}</p>
                  </div>
                </div>

                {/* Цена + Кнопка */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/40 text-sm">from </span>
                    <span className="text-2xl font-extrabold" style={{ color: "#e55b5b" }}>
                      ${car.price}
                    </span>
                    <span className="text-white/40 text-sm"> / day</span>
                  </div>
                  <button
                    className="px-5 py-2 rounded-full text-sm font-bold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
                    style={{ backgroundColor: "#e55b5b" }}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "показать все" */}
        <div className="flex justify-center mt-12">
          <button className="px-10 py-4 rounded-full border-2 text-white font-bold text-lg transition-all duration-200 hover:text-black hover:bg-white"
            style={{ borderColor: "#e55b5b", color: "#e55b5b" }}
          >
            View all cars
          </button>
        </div>
      </div>
    </section>
  );
}