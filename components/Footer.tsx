'use client'

import Image from 'next/image'
import { Link } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'Cars', to: 'cars' },
  { label: 'About', to: 'about' },
  { label: 'Why Us', to: 'why' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Contact', to: 'contact' },
]

const socials = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const desktopMode = useMediaQuery({ query: '(min-width: 1300px)' })

  return (
    <footer className="bg-primary text-white">
      {/* top divider accent line */}
      <div className="h-1 w-full bg-accent" />

      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-14">

          {/* column 1 – brand */}
          <div className="flex flex-col gap-y-5">
            <Image
              src="/icons/logo.svg"
              width={160}
              height={52}
              alt="RentCar logo"
              className="brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-6 max-w-[260px]">
              Your trusted car rental partner. Fast, affordable and
              reliable rides for every journey.
            </p>
            {/* socials */}
            <div className="flex gap-x-3 mt-1">
              {socials.map((a, i) => (
                <a
                  key={a.label}
                  href={a.href}
                  aria-label={a.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                >
                  {a.icon}
                </a>
              ))}
            </div>
          </div>

          {/* column 2 – navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[2px] text-white mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth={desktopMode}
                    spy={true}
                    className="text-white/60 hover:text-accent transition-colors duration-200 cursor-pointer text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* column 3 – contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[2px] text-white mb-6">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-y-4">
              <li className="flex items-start gap-x-3 text-sm text-white/60">
                <MdLocationOn className="text-accent text-xl mt-0.5 shrink-0" />
                <span>123 Rental Street,<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-x-3 text-sm text-white/60">
                <MdPhone className="text-accent text-xl shrink-0" />
                <a href="tel:+11234567890" className="hover:text-accent transition-colors duration-200">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-x-3 text-sm text-white/60">
                <MdEmail className="text-accent text-xl shrink-0" />
                <a href="mailto:info@rentcar.com" className="hover:text-accent transition-colors duration-200">
                  info@rentcar.com
                </a>
              </li>
            </ul>
          </div>

          {/* column 4 – working hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[2px] text-white mb-6">
              Working Hours
            </h4>
            <ul className="flex flex-col gap-y-3 text-sm text-white/60">
              {[
                { day: 'Monday – Friday', hours: '08:00 – 20:00' },
                { day: 'Saturday', hours: '09:00 – 18:00' },
                { day: 'Sunday', hours: '10:00 – 15:00' },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-x-4">
                  <span>{day}</span>
                  <span className="text-white font-medium">{hours}</span>
                </li>
              ))}
            </ul>

            {/* newsletter */}
            <div className="mt-8">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
                Subscribe to news
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/10 rounded-l-[8px] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors duration-200"
                />
                <button className="bg-accent hover:bg-accent-hover transition-colors duration-300 px-4 rounded-r-[8px] text-white text-sm font-semibold">
                  Go
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-y-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} RentCar. All rights reserved.
          </p>
          <div className="flex gap-x-5 text-xs text-white/40">
            <a href="#" className="hover:text-accent transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}