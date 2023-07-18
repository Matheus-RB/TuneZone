import back from "../image/home.jpg";
import backMobile from '../image/homeMobile.jpg'

import Image from "next/image";

const Home = () => {
  return (
    <main>
      <div className="md:hidden">
        <Image
          src={backMobile}
          alt="backgroud-Image desktop"
        />
      </div>
      <div className="hidden md:flex">
        <Image
         src={back}
         alt="backgroud-Image mobile" />
      </div>
    </main>
  );
};

export default Home;