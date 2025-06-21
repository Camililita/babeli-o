// pages/Colab.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Colab() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1C2B24] font-lora relative px-4 pt-8 pb-24">
      <Head>
        <title>Babel – Colaborar</title>
      </Head>

      {/* Header superior con flecha, borrador centrado y botón de revisión */}
      <div className="flex items-center justify-between mb-2">
        <Link href="/feed">
          <button className="ml-1 text-xl">←</button>
        </Link>
        <h2 className="text-sm font-bold text-center w-full absolute left-0 right-0">Borrador</h2>
        <div className="w-[120px] flex justify-end">
          <button className="bg-[#1C2B24] text-white text-xs px-3 py-1 rounded-full z-10 relative">Revisar colaboración</button>
        </div>
      </div>

      {/* Info de colaboración */}
      <div className="flex items-center gap-2 mb-1">
        <Image src="/icons/colaborativo2.svg" alt="Poema Colaborativo" width={90} height={16} />
        <p className="text-xs italic text-[#1C2B24]/60">Autor: @lalora</p>
      </div>

      <hr className="border-t border-[#1C2B24]/10 my-2" />

      {/* Título del poema */}
      <h1 className="text-base font-bold mb-4">EL VECINO HABLA CON LOS PAJARITOS</h1>

      {/* Poema editable */}
      <div className="text-sm whitespace-pre-line leading-relaxed">
        <p>qué lenta
        es la danza
        de las nubes</p>

        <p className="mt-4">que deleitan
        a los pájaros</p>

        <p className="mt-4 italic text-[#1C2B24] cursor-text" contentEditable suppressContentEditableWarning={true}>
          que miran desde los cables de la ciudad.
        </p>

        <p className="mt-4">Las miran y comentan que los vientos allá arriba corren rápido</p>

        <p className="mt-4 italic text-[#1C2B24] cursor-text" contentEditable suppressContentEditableWarning={true}>
          y que sus antepasados sabían volar sin nada a lo que aferrarse.
        </p>
      </div>

      {/* Teclado simulado (imagen real en vez de texto) */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
        <Image src="/icons/keyboard.png" alt="Teclado simulado" width={320} height={160} />
      </div>

      {/* Botón flotante Aa */}
      <div className="fixed bottom-4 right-5 z-50">
        <Image src="/icons/Aa.svg" alt="Estilo" width={48} height={48} />
      </div>
    </div>
  );
}
