export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Верхняя часть */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Лого + описание */}
          <div className="md:col-span-2">
            <div className="text-3xl font-extrabold mb-4">
              <span style={{ color: "#e55b5b" }}>Rent</span>
              <span className="text-white">Car</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Premium car rental service. We provide the best vehicles for your comfort and safety on the road.
            </p>
            {/* Соцсети */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Telegram", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-semibold px-4 py-2 rounded-full border border-white/20 text-white/50 hover:border-[#e55b5b] hover:text-[#e55b5b] transition-all duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3">
              {["Cars", "About us", "Contract", "Contacts"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/40 hover:text-[#e55b5b] transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">
              Contacts
            </h4>
            <ul className="space-y-3">
              <li className="text-white/40 text-sm">📞 +7 (999) 000-00-00</li>
              <li className="text-white/40 text-sm">✉️ info@rentcar.com</li>
              <li className="text-white/40 text-sm">📍 Moscow, Russia</li>
              <li className="text-white/40 text-sm">🕐 Mon–Sun: 8:00 – 22:00</li>
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2025 RentCar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
