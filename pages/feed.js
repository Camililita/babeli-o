// pages/feed.js
import Head from 'next/head';
import Image from 'next/image';
import Post from '../components/Post';

export default function Feed() {
  const posts = [
    {
      user: '@lalora',
      location: 'González Catán, Argentina',
      title: 'EL VECINO HABLA CON LOS PAJARITOS',
      poem: `qué lenta\nes la danza\nde las nubes\n\nque deleitan\na los pájaros\n\nque miran\ndesde los cables\nde la ciudad.\n\nLas miran y comentan\nque los vientos allá arriba\ncorren rápido\n\ny que sus antepasados\nsabían volar\nsin nada a lo que aferrarse.`
    },
    {
      user: '@delfinasanda',
      location: 'Caballo Chiquito, Argentina',
      title: 'EL VECINO HABLA CON LOS PAJARITOS',
      poem: `qué lenta\nes la danza\nde las nubes`
    }
  ];

  return (
    <>
      <Head>
        <title>Feed – Babel</title>
      </Head>

      <main className="h-screen overflow-y-scroll bg-[#F9F9F7] text-[#1C2B24] px-4 pt-6 pb-[72px] font-lora">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/icons/avatar.svg" alt="Avatar" width={32} height={32} className="rounded-full" />
          <h1 className="text-[24px] font-typewriter">Babel</h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 border-b border-[#1C2B24]/30">
          <button className="px-4 py-2 font-bold border-b-2 border-[#1C2B24]">Para ti</button>
          <button className="px-4 py-2 text-[#1C2B24]/50">Guardados</button>
        </div>

        {/* Posts */}
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </main>

      {/* Floating Write Button */}
      <div className="fixed bottom-[56px] left-1/2 -translate-x-1/2 z-50 bg-[#1C2B24] p-4 rounded-full shadow-lg">
        <Image src="/icons/lapiz.svg" alt="Escribir" width={28} height={28} />
      </div>

      {/* Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#F9F9F7] border-t border-[#1C2B24]/20 flex justify-between items-center px-6 py-2 text-xs">
        <Image src="/icons/casa.svg" alt="Inicio" width={24} height={24} />
        <Image src="/icons/search.svg" alt="Buscar" width={24} height={24} />
        <Image src="/icons/manito.svg" alt="Notificaciones" width={24} height={24} />
        <div className="w-[24px]" />
        <Image src="/icons/mensajito.svg" alt="Mensajes" width={24} height={24} />
        <Image src="/icons/premio.svg" alt="Concursos" width={24} height={24} />
        <Image src="/icons/colab.svg" alt="Colaboraciones" width={24} height={24} />
      </nav>
    </>
  );
}
