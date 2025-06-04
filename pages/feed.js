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
      poem: `qué lenta
es la danza
de las nubes

que deleitan
a los pájaros

<em>que miran
desde los cables
de la ciudad.</em>

Las miran y comentan
que los vientos allá arriba
corren rápido

<em>y que sus antepasados
sabían volar
sin nada a lo que aferrarse.</em>`,
      collaborative: true,
      collaborators: ['@delfinasanda']
    },
    {
      user: '@delfinasanda',
      location: 'Caballo Chiquito, Argentina',
      avatar: '/profile/delfinasanda.png',
      title: 'EL VECINO HABLA CON LOS PAJARITOS',
      poem: `qué lenta
es la danza
de las nubes`,
      collaborative: false,
      collaborators: []
    },
    {
      user: '@elcaminante',
      location: 'Valle Azul, Argentina',
      avatar: '/profile/delfinasanda.png',
      title: 'TORMENTA EN CALMA',
      poem: `la calma
es apenas
una pausa
en la boca del viento
que recuerda
que todo
vuelve a moverse`,
      collaborative: false,
      collaborators: []
    },
    {
      user: '@margarita.m',
      location: 'Santa Lucía, Uruguay',
      avatar: '/profile/delfinasanda.png',
      title: 'EL NOMBRE DEL RÍO',
      poem: `el río
no tiene nombre
pero todos saben
qué dice
cuando baja
crecido`,
      collaborative: false,
      collaborators: []
    },
    {
      user: '@azulgris',
      location: 'La Paz, Bolivia',
      avatar: '/profile/lalora.png',
      title: 'SUSURROS DE LA PIEDRA',
      poem: `la piedra
guarda el secreto
de los pasos
que la rozaron

@manosdelviento

<em>escribe
con polvo y silencio</em>
un poema nuevo`,
      collaborative: true,
      collaborators: ['@manosdelviento']
    }
  ];

  return (
    <>
      <Head>
        <title>Feed – Babel</title>
      </Head>

      <div className="h-screen bg-[#F9F9F7] text-[#1C2B24] font-lora relative">
        {/* Encabezado */}
        <div className="sticky top-0 z-40 bg-[#F9F9F7] px-4 pt-6 pb-2">
          <div className="flex items-center justify-between mb-2">
            <Image src="/profile/mirtha.jpg" alt="Avatar" width={32} height={32} className="rounded-full" />
            <div className="flex gap-6 text-sm">
              <button className="font-semibold border-b-2 border-[#1C2B24] pb-1">Para ti</button>
              <button className="text-[#1C2B24]/50 pb-1">Guardados</button>
            </div>
            <h1 className="text-[24px] font-typewriter">Babel</h1>
          </div>
        </div>

        {/* Feed */}
        <main className="overflow-y-scroll h-full px-4 pb-[72px] pt-4 bg-[#F9F9F7]">
          {posts.map((post, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-[32px] h-[32px] rounded-full overflow-hidden border">
                  <Image src={post.avatar} alt={post.user} width={32} height={32} className="object-cover rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-bold">
                    {post.user}{' '}
                    {post.collaborative && post.collaborators.map(c => (
                      <span key={c} className="font-normal italic text-sm">{c}</span>
                    ))}
                  </p>
                  <p className="text-xs text-[#1C2B24]/50">{post.location}</p>
                  {post.collaborative && (
                    <div className="text-[10px] text-[#1C2B24]/40 italic flex items-center gap-1 mt-1">
                      <Image src="/icons/colaborativo.svg" alt="Poema Colaborativo" width={70} height={14} className="opacity-60" />
                    </div>
                  )}
                </div>
              </div>
              <p className="font-bold mt-2 mb-2">{post.title}</p>
              <p className="whitespace-pre-line text-sm leading-relaxed ml-[32px]" dangerouslySetInnerHTML={{ __html: post.poem }}></p>
              <div className="flex justify-end items-center gap-4 mt-2 pr-4">
                <Image src="/icons/guardado.svg" alt="Guardar" width={18} height={18} />
                <Image src="/icons/avioncito.svg" alt="Enviar" width={18} height={18} />
                {!post.collaborative && <Image src="/icons/colab.svg" alt="Colaborar" width={18} height={18} className="opacity-60" />}
              </div>
              <hr className="border-t border-dashed border-[#1C2B24]/30 my-4" />
            </div>
          ))}
        </main>

        {/* Floating Write Button */}
        <div className="fixed bottom-24 right-5 z-50">
          <Image src="/icons/lapiz.svg" alt="Escribir" width={48} height={48} className="object-contain" />
        </div>

        {/* Navbar */}
        <nav className="fixed bottom-0 left-0 right-0 bg-[#F9F9F7] border-t border-[#1C2B24]/20 flex justify-around items-center px-4 py-2 text-xs">
          <Image src="/icons/casa.svg" alt="Inicio" width={24} height={24} />
          <Image src="/icons/search.svg" alt="Buscar" width={24} height={24} />
          <Image src="/icons/manito.svg" alt="Notificaciones" width={24} height={24} />
          <Image src="/icons/mensajito.svg" alt="Mensajes" width={24} height={24} />
          <Image src="/icons/premio.svg" alt="Concursos" width={24} height={24} />
          <Image src="/icons/colab.svg" alt="Colaboraciones" width={24} height={24} className="opacity-60" />
        </nav>
      </div>
    </>
  );
}
