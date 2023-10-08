'use client';

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';

import Image from 'next/image';

interface Props {
  data: string[];
}

const Slide = ({ data }: Props) => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 4000;

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autorotate) {
      intervalId = setInterval(() => {
        setActive((prevActive) => (prevActive + 1 === data.length ? 0 : prevActive + 1));
      }, autorotateTiming);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [active, autorotate, data]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

  const handleIndicatorClick = (index: number) => {
    setActive(index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-center relative">
      <div className="relative">
        <div className="w-full h-[500px] lg:h-[700px] overflow-hidden rounded-lg relative">
          {data.map((image, index: number) => (
            <Transition
              key={index + image}
              show={active === index}
              className="absolute inset-0 h-full -z-10"
              enter="transition ease-in-out duration-700"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in-out duration-700"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Image
                className="max-h-full object-cover"
                src={image}
                alt={`image${index}`}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </Transition>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 mb-4">
          <div className="flex justify-center">
            {data.map((_: any, index: number) => (
              <div
                key={index}
                className={`w-4 h-4 mx-1 bg-indigo-300 rounded-full ${active === index ? 'opacity-100' : 'opacity-50'
                  }`}
                onClick={() => handleIndicatorClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
