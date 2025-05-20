// pages/feed.js
import Head from 'next/head';
import Image from 'next/image';
import Post from '../components/Post';

export default function Feed() {
  const posts = [
    {
      user: '@lalora',
      location: 'González Catán, Argentina',
      avatar: '/profile/lalora.png',
      title: 'EL VECINO HABLA CON LOS PAJARITOS',
      poem: `qué lenta\nes la danza\nde las nubes\n\nque deleitan\na los pájaros\n\nque miran\ndesde los cables\nde la ciudad.\n\nLas miran y comentan\nque los vientos allá arriba\ncorren rápido\n\ny que sus antepasados\nsabían volar\nsin nada a lo que aferrarse.`
    },
    {
      user: '@delfinasanda',
      location: 'Caballo Chiquito, Argentina',
      avatar: '/profile/delfinasanda.png',
      title: 'EL VECINO HABLA CON LOS PAJARITOS',
      poem: `qué lenta\nes la danza\nde las nubes`
    },
    {
      user: '@elcaminante',
      location: 'Valle Azul, Argentina',
      avatar: '/profile/delfinasanda.png',
      title: 'TORMENTA EN CALMA',
      poem: `la calma\nes apenas\nuna pausa\nen la boca del viento\n\nque recuerda\nque todo\nvuelve a girar`
    },
    {
      user: '@margarita.m',
      location: 'Santa Lucía, Uruguay',
      avatar: '/profile/delfinasanda.png',
      title: 'EL NOMBRE DEL RÍO',
      poem: `el río\nno tiene nombre\nhasta que alguien\nse detiene\na escucharlo`
    },
    {
      user: '@zorrito',
      location: 'Tilcara, Argentina',
      avatar: '/profile/delfinasanda.png',
      title: 'LADRIDO DE SOMBRA',
      poem: `ladró\nla sombra\ny el eco\nfue a esconderse`
    }
  ];

  return (
    <>
      <Head>
        <title>Feed – Babel</title>
      </Head>

      <div className="h-screen bg-[#F9F9F7] text-[#1C2B24] font-lora relative">
        {/* Sticky Header */}
        <div className="sticky top-0 z-40 bg-[#F9F9F7] px-4 pt-6 pb-2">
          <div className="flex items-center justify-between mb-4">
            <Image src="/profile/delfinasanda.png" alt="Avatar" width={32} height={32} className="rounded-full object-cover aspect-square" />
            <h1 className="text-[24px] font-typewriter">Babel</h1>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-8 border-b border-[#1C2B24]/30 text-sm mt-[-4px]">
            <button className="px-2 py-1 font-semibold relative text-[#1C2B24] after:content-[''] after:block after:h-[2px] after:w-full after:bg-[#1C2B24] after:mt-1">Para ti</button>
            <button className="px-2 py-1 font-semibold text-[#1C2B24]/50">Guardados</button>
          </div>
        </div>

        {/* Scrollable Feed */}
        <main className="overflow-y-scroll h-full px-4 pb-[72px] pt-2">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </main>

        {/* Floating Write Button */}
        <div className="fixed bottom-24 right-5 z-50 w-[64px] h-[64px] bg-black rounded-full shadow-xl flex items-center justify-center">
  <Image src="/icons/lapiz.svg" alt="Escribir" width={28} height={28} />
</div>

        {/* Navbar */}
        <nav className="fixed bottom-0 left-0 right-0 bg-[#F9F9F7] border-t border-[#1C2B24]/20 flex justify-around items-center px-4 py-2 text-xs">
          <Image src="/icons/casa.svg" alt="Inicio" width={24} height={24} />
          <Image src="/icons/search.svg" alt="Buscar" width={24} height={24} />
          <Image src="/icons/manito.svg" alt="Notificaciones" width={24} height={24} />
          <Image src="/icons/mensajito.svg" alt="Mensajes" width={24} height={24} />
          <Image src="/icons/premio.svg" alt="Concursos" width={24} height={24} />
          <Image src="/icons/colab.svg" alt="Colaboraciones" width={24} height={24} />
        </nav>
      </div>
    </>
  );
}
