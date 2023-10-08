import bgAbout from '../../image/about3.jpg'
import bgAboutM from '../../image/aboutMobile.jpg'

import Image from 'next/image';

const About = () => {
  return (
    <section className='p-5 flex-col-reverse md:flex-row flex bg-[#eaeaea]'>
      <div className='md:w-2/3 flex justify-center'>
        <Image
          className='md:ml-14 2xl:ml-0 hidden sm:flex'
          src={bgAbout}
          alt='background about'
        />
        <Image
          className='md:ml-14 sm:hidden'
          alt='Background about Mobile'
          src={bgAboutM}
        />
      </div>
      <div className='md:w-1/3 text-xl font-[Roboto] mt-2 xl:mt-10 2xl:mr-10'>
        <h1 className='text-center xl:text-left font-extrabold text-5xl xl:text-7xl mb-7'>About Us</h1>
        <div className='text-lg md:text-lg xl:text-3xl'>
          <p className='mb-3'>
            Welcome to our music website!
          </p>
          <p className='mb-3'>
            We are passionate about all things music and aim to create a platform where music lovers can come together
            to discover, explore, and connect through the power of melodies and rhythms. Whether you are a fan of rock, pop, jazz, or any other genre, our site offers a diverse range of content, including artist interviews, album reviews, concert updates, and curated playlists.
          </p>
          <p className='mb-3'>
            Join us on this musical journey as we celebrate the universal language that brings joy and inspiration to our lives.
          </p>
        </div>
      </div>
    </section>

  );
};

export default About;
