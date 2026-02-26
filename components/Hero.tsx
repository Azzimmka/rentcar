import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Фото на весь экран */}
      <Image
        src="/bmw3.jpg"
        alt="BMW Car"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 70%" }}
      />

      {/* Тёмный градиент снизу */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Текст снизу */}
      <div className="absolute bottom-0 left-0 w-full px-6 pb-16 md:px-16 md:pb-20">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
          Оrder <span style={{ color: "#e55b5b" }}>your dream </span>
          <br />
          car
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/70 max-w-xl">
          Лучшие автомобили по лучшим ценам — прямо сейчас
        </p>
        <button
          className="mt-8 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-200 hover:brightness-110 active:scale-95 shadow-lg"
          style={{ backgroundColor: "#e55b5b" }}
        >
          Выбрать автомобиль
        </button>
      </div>

    </section>
  );
}
