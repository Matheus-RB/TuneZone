import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,  faTwitter,  faInstagram } from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
  return (    
    <footer className="bg-[#ffb803]">
      <section className="grid md:flex md:place-content-around grid-cols-2 p-4 md:pt-0 w-11/12 items-baseline">
        <div className="flex flex-col">
          <h2 className="font-semibold">SITEMAP</h2>
          <Link href="/" className="hover:text-white">HOME</Link>
          <Link href="/about" className="hover:text-white">ABOUT</Link>
          <Link href="/store" className="hover:text-white">STORE</Link>
          {/* <Link href="gallery" className="hover:text-white">GALLERY</Link>
          <Link href="contact" className="hover:text-white">CONTACT</Link> */}
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold">PRODUC</h2>
          <ul>
            <li><a href="#" className="hover:text-white">Downloads</a></li>
            {/* <li><a href="#" className="hover:text-white">Instruments</a></li> */}
            <li><a href="#" className="hover:text-white">Merchandising</a></li>
            <li><a href="#" className="hover:text-white">Streaming</a></li>
            <li><a href="#" className="hover:text-white">Tickets</a></li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold">HELP</h2>
          <ul>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Network Status</a></li>
            <li><a href="#" className="hover:text-white">Referral Program</a></li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold">SUBSCRIBE</h2>
          <label className="flex items-center">
            <input
              className="bg-white w-8/12 border-none focus:outline-none h-10"
              placeholder="Enter email"
              type="email"
              name="search"
              required
            />
            <button className="bg-black text-white py-3 px-1 hover:bg-slate-900 hover:text-gray-100 text-xs">SEND</button>
          </label>
          <div className="flex gap-3 mt-2">
            <FontAwesomeIcon icon={faTwitter} className="w-7 cursor-pointer hover:-translate-y-1" />
            <FontAwesomeIcon icon={faFacebook} className="w-7 cursor-pointer hover:-translate-y-1" />
            <FontAwesomeIcon icon={faInstagram} className="w-7 cursor-pointer hover:-translate-y-1" />
          </div>
        </div>
      </section>
      <div className="h-10 bg-black text-white justify-center flex items-center">
        <span>TuneZone © {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
