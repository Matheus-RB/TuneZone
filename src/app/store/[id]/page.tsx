'use client'

import instrumentos from '../array';
import { useState, useEffect } from 'react';
import Slide from '@/components/Slide/Slide';
import Characteristics from '@/components/Characteristics/Characteristics';
import AboutItem from '@/components/AboutItem/AboutItem';
import CardBuy from '@/components/CardBay/CardBuy';
import P404 from '@/components/404/404';

interface ProductProps {
  params: {
    id: number;
  }
}

const Info = ({ params }: ProductProps) => {

  const [id, setId] = useState<number>(2);

  useEffect(() => {
    setId(params.id);
  }, [params.id]);

  const instrumento = instrumentos[id -1];

  if (!instrumento) {
    return <P404 />;
  }

  return (
    <div className='lg:flex p-4 gap-4'>
      <div className='lg:w-6/12 h-[500px] lg:h-[700px]'>
        <Slide data={instrumento.images} />
      </div>
      <div className='lg:w-4/12 pt-9 lg:pt-0'>
        <h1 className='text-3xl font-semibold border-b mb-6 pb-2'>{instrumento.name}</h1>
        <Characteristics
          className="border-b mb-6 pb-2"
          data={instrumento.characteristics}
        />
        <AboutItem data={instrumento.about_item} />
      </div>
        <CardBuy price={instrumento.price} className='lg:w-2/12 border rounded-md shadow-md mt-6 lg:mt-0' />
    </div>
  );
}

export default Info;
