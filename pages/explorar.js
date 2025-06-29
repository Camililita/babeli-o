// pages/explora.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Explora() {
  const posts = [
    {
      user: '@lalora',
      location: 'González Catán, Argentina',
      title: 'EL VECINO HABLA CON LOS PAJARITOS',
      excerpt: 'qué lenta\nes la danza\nde las nubes',
      avatar: '/profile/lalora.jpg'
    },
    {
      user: '@delfinasanda',
      location: 'González Catán, Argentina',
      title: 'EL VECINO HABLA CON LOS PAJARITOS',
      excerpt: 'qué lenta\nes la danza\nde las nubes',
      avatar: '/profile/delfinasanda.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F7] font-lora pb-[90px] max-w-[500px] mx-auto">
      <Head>
        <title>Explora Babel</title>
      </Head>

      <div className="flex items-center justify-between px-4 pt-5 pb-3">
        <Image src="/profile/juancarlos.jpg" alt="Perfil" width={32} height={32} className="rounded-full" />
        <h1 className="text-[40px] font-typewriter mb-1">Explora Babel</h1>
        <Image src="/icons/Filter.svg" alt="Filter" width={24} height={24} />
      </div>

      <div className="relative px-4 mb-4">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full rounded-full px-10 py-2 text-sm border border-[#1C2B24]/10 placeholder:text-[#1C2B24]/40"
        />
        <div className="absolute top-2.5 left-4">
          <Image src="/icons/search.svg" alt="Buscar" width={20} height={20} />
        </div>
      </div>

      <div className="space-y-6 px-4">
        {posts.map((post, index) => (
          <div key={index}>
            <div className="flex items-start gap-2">
              <Image src={post.avatar} alt={post.user} width={28} height={28} className="rounded-full" />
              <div>
                <p className="text-sm font-medium">{post.user}</p>
                <p className="text-[11px] text-[#1C2B24]/60 -mt-1">{post.location}</p>
                <p className="text-sm font-bold mt-1 mb-1 font-lora tracking-tight leading-tight text-[#1C2B24]">{post.title}</p>
                <p className="text-sm whitespace-pre-line leading-snug text-[#1C2B24]/90 font-lora">{post.excerpt}</p>
              </div>
            </div>
            <div className="flex justify-end items-center mt-2">
              <button className="text-[11px] bg-[#DADADA] text-[#1C2B24] rounded-full px-3 py-1">Leer</button>
            </div>
            <div className="flex justify-center mt-3">
              <Image src="/icons/Lineas Punteadas.svg" alt="Separador" width={200} height={16} className="opacity-100 brightness-[30] contrast-[400%]" />
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#1C2B24]/10 py-2 px-6 flex justify-between items-center max-w-[500px] mx-auto z-50">
        <Image src="/icons/casa.svg" alt="Inicio" width={24} height={24} />
        <Image src="/icons/search.svg" alt="Buscar" width={24} height={24} />
        <Image src="/icons/manito.svg" alt="Colaboraciones" width={24} height={24} />
        <Image src="/icons/mensajito.svg" alt="Mensajes" width={24} height={24} />
        <Image src="/icons/premio.svg" alt="Concursos" width={24} height={24} />
        <Image src="/icons/colab.svg" alt="Manos" width={24} height={24} />
      </div>
    </div>
  );
}
