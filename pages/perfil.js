// pages/perfil.js
import Head from 'next/head';
import Image from 'next/image';

export default function Perfil() {
  const poems = [
    `qué lenta\nes la danza\nde las nubes\n\nque deleitan\na los pájaros\n\nque miran\ndesde los cables\nde la ciudad.\n\nLas miran y comentan\nque los vientos allá arriba\ncorren rápido`,
    `la calma\nes apenas\nuna pausa\nen la boca del viento\nque recuerda\nque todo\nvuelve a moverse`,
    `el río\nno tiene nombre\npero todos saben\nqué dice\ncuando baja\ncrecido`,
  ];

  return (
    <>
      <Head>
        <title>Perfil – Babel</title>
      </Head>

      <div className="h-screen bg-[#F9F9F7] text-[#1C2B24] font-lora relative">
        {/* Encabezado */}
        <div className="sticky top-0 z-40 bg-[#F9F9F7] px-4 pt-6 pb-2">
          <div className="flex items-center justify-between mb-4">
            <button className="text-xl">←</button>
            <h1 className="text-[24px] font-typewriter">Babel</h1>
          </div>

          {/* Perfil */}
          <div className="flex flex-col items-center text-center mb-4">
            <div className="w-[96px] h-[96px] rounded-full overflow-hidden">
              <Image
                src="/profile/mirtha.jpg"
                alt="Mirtha"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
            </div>
            <p className="font-bold text-lg mt-2">@mirtha</p>
            <p className="text-sm text-[#1C2B24]/70">Buenos, Aires Argentina</p>
            <p className="italic text-sm text-[#1C2B24]/50">Como te ven te tratan</p>
            <div className="mt-2">
              <Image src="/icons/gear.svg" alt="Config" width={24} height={24} />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-around border-b border-[#1C2B24]/30 text-sm">
            <button className="py-2 font-semibold relative text-[#1C2B24] after:content-[''] after:block after:h-[2px] after:w-full after:bg-[#1C2B24] after:mt-1">Mis Poemas</button>
            <button className="py-2 text-[#1C2B24]/50">Colaboraciones</button>
            <button className="py-2 text-[#1C2B24]/50">Guardados</button>
          </div>
        </div>

        {/* Poemas */}
        <main className="overflow-y-scroll h-full px-4 pb-[72px] pt-4">
          {poems.map((poem, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
                  <Image src="/profile/mirtha.jpg" alt="mirtha" width={24} height={24} className="object-cover rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-bold">@mirtha</p>
                  <p className="text-xs text-[#1C2B24]/50">González Catán, Argentina</p>
                </div>
              </div>
              <p className="font-bold mt-2 mb-2">EL VECINO HABLA CON LOS PAJARITOS</p>
              <p className="whitespace-pre-line text-sm leading-relaxed ml-[32px]">{poem}</p>
              <hr className="border-t border-dashed border-[#1C2B24]/30 my-4 mx-4" />
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
          <Image src="/icons/colab.svg" alt="Colaboraciones" width={24} height={24} />
        </nav>
      </div>
    </>
  );
}
