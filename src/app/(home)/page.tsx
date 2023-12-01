"use client"

import { Eye, PlayCircle } from 'lucide-react'
import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function Home() {
  const {data} = useSession();
  return (
    <div className='flex flex-col px-4'>
      <div className='w-[50%] py-4'>
        <p className=' text-x2 font-bold text-start opacity-80'>Bem vindo,  </p>
        <p className='text-2xl text-start opacity-95'>{data?.user?.name}</p>
      </div>
      <div className='flex flex-col justify-between h-full py-10 gap-10'>
        <div>
          <p className='uppercase opacity-80'>Treino atual</p>
            <div className='relative h-[150px] w-full overflow-hidden rounded-2xl'>
              <Image
                src='/treino_atual_homem.jpg'
                alt='proximo_treino_homem'
                width={0}
                height={100}
                sizes="100vw"
                className='max-h-[100%] max-w-[100%] h-[100%] w-[100%] opacity-40'
                style={{
                  objectFit: "fill",
                }}
              />
              <p className='absolute left-2 bottom-2 px-2 py-[2px] text-lg whitespace-nowrap overflow-hidden truncate'
                style={{ textShadow: '1px 1px 1px black, -1px -1px 1px black, 1px -1px 1px black, -1px 1px 1px black' }}>
                Peito, Tríceps, Ombros
              </p>
              <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                <button className='flex flex-col justify-center items-center gap-1'>
                  <PlayCircle size={50} color='yellow'  className=''/>
                  <p className='text-xs font-bold text-yellow-50'>INICIAR</p>
                </button>
              </div>
            </div>
        </div>
          
        <div className='flex flex-col justify-around h-full py-4'>
          <p className='uppercase opacity-80'>Próximo treino</p>
          <div className='relative h-[150px] w-full overflow-hidden rounded-2xl'>
              <Image
                src='/proximo_treino_homem.jpg'
                alt='proximo_treino_homem'
                width={0}
                height={100}
                sizes="100vw"
                className='max-h-[100%] max-w-[100%] h-[100%] w-[100%] opacity-40'
                style={{
                  objectFit: "fill",
                }}
              />
              <p className='absolute left-2 bottom-2 px-2 py-[2px] text-lg whitespace-nowrap overflow-hidden truncate'
                style={{ textShadow: '1px 1px 1px black, -1px -1px 1px black, 1px -1px 1px black, -1px 1px 1px black' }}>
                Costa, Bíceps, Antebraço
              </p>
              <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                <button className='flex flex-col justify-center items-center'>
                  <Eye size={50}  color='yellow'  className=''/>
                </button>
              </div>
            </div>
        </div>


      </div>
    </div>
  )
}