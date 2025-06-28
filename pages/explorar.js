// pages/explorar.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Explorar() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1C2B24] font-lora relative pb-24">
      <Head>
        <title>Babel – Explorar</title>
      </Head>

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-6">
        <Image
          src="/icons/profile-placeholder.png"
          alt="Foto de perfil"
          width={36}
          height={36}
          className="rounded-full"
        />
        <h1 className="font-typewriter text-xl tracking-wide">Explora Babel</h1>
        <Image
          src="/icons/filter.svg"
          alt="Filtrar"
          width={20}
          height={20}
        />
      </div>

      {/* Barra de búsqueda */}
      <div className="relative mx-4 mt-4">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full px-4 py-2 pr-10 text-sm rounded-full border border-[#1C2B24]/10 bg-transparent focus:outline-none"
        />
        <Image
          src="/icons/filter.svg"
          alt="Filtrar"
          width={18}
          height={18}
          className="absolute right-3 top-2.5"
        />
      </div>

      {/* Lista de poemas */}
      <div className="mt-6 px-4 space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="relative pb-4 border-b border-dashed border-[#1C2B24]/20">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/profile-placeholder.png"
                alt="Perfil"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">@lalora</p>
                <p className="text-[11px] text-[#1C2B24]/60 leading-tight -mt-1">González Catán, Argentina</p>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-[13px] font-bold leading-snug">EL VECINO HABLA CON LOS PAJARITOS</h2>
              <p className="text-[13px] leading-snug mt-1 whitespace-pre-line">
                qué lenta
                es la danza
                de las nubes
                ...
              </p>
              <button className="text-[10px] absolute bottom-0 right-0 bg-[#1C2B24]/10 px-3 py-0.5 rounded-full">Leer</button>
            </div>
          </div>
        ))}
      </div>

      {/* Nav bar inferior */}
      <div className="fixed bottom-0 left-0 w-full bg-[#F9F9F7] border-t border-[#1C2B24]/10 px-6 py-2 flex justify-between items-center">
        <Image src="/icons/home.svg" alt="Inicio" width={24} height={24} />
        <Image src="/icons/search.svg" alt="Buscar" width={24} height={24} />
        <Image src="/icons/colab.svg" alt="Colaborar" width={24} height={24} />
        <Image src="/icons/messages.svg" alt="Mensajes" width={24} height={24} />
        <Image src="/icons/trophy.svg" alt="Concursos" width={24} height={24} />
        <Image src="/icons/heart-hands.svg" alt="Colaboraciones" width={24} height={24} />
      </div>

      <style jsx>{`
        .font-typewriter {
          font-family: 'rough_typewriter', serif;
        }
      `}</style>
    </div>
  );
}
