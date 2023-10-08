import Link from 'next/link';
import instrumentos from "./array"

const store = () => {
  return (
    <div>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 font-semibold'>
        {instrumentos.map((instrumento) => (
          <li className='border col-span-1 rounded-lg shadow-md hover:-translate-y-1' key={instrumento.id}>
            <Link className='flex p-4 flex-col justify-between h-full' href={`/store/${instrumento.id}`}>
              <div className='flex flex-col justify-center'>
                <img
                  className='max-h-[560px] max-w-full object-contain mb-2'
                  src={instrumento.images[0]}
                  alt={instrumento.name}
                />
                <span className='text-lg font-semibold'>{instrumento.name}</span>
                <span className='text-gray-600 text-sm'>$ {instrumento.price}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default store;
