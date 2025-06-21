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
          <Image src="/icons/flecha.svg" alt="Volver" width={24} height={24} />
        </Link>
        <h2 className="text-sm font-bold">Borrador</h2>
        <button className="bg-[#1C2B24] text-white text-xs px-3 py-1 rounded-full">Revisar colaboración</button>
      </div>

      {/* Info de colaboración */}
      <div className="flex items-center gap-2 mb-1">
        <Image src="/icons/colaborativo2.svg" alt="Poema Colaborativo" width={90} height={16} />
        <p className="text-xs italic text-[#1C2B24]/60">Autor: @lalora</p>
      </div>

      <hr className="border-t border-[#1C2B24]/10 my-2" />

      {/* Título del poema */}
      <h1 className="text-base font-bold mb-4">EL VECINO HABLA CON LOS PAJARITOS</h1>

      {/* Poema con partes en itálica como editables */}
      <div className="text-sm whitespace-pre-line leading-relaxed">
        qué lenta
        es la danza
        de las nubes

        {'\n\n'}que deleitan
        a los pájaros

        {'\n\n'}<em contentEditable suppressContentEditableWarning={true} className="italic text-[#1C2B24]">
          que miran
          desde los cables
          de la ciudad.
        </em>

        {'\n\n'}Las miran y comentan
        que los vientos allá arriba
        corren rápido

        {'\n\n'}<em contentEditable suppressContentEditableWarning={true} className="italic text-[#1C2B24]">
          y que sus antepasados
          sabían volar
          sin nada a lo que aferrarse.
        </em>
      </div>

      {/* Teclado simulado */}
      <p className="text-center text-xs text-[#1C2B24]/50 mt-8">(Teclado simulado)</p>

      {/* Botón flotante Aa */}
      <div className="fixed bottom-24 right-5 z-50">
        <Image src="/icons/Aa.svg" alt="Estilo" width={48} height={48} />
      </div>
    </div>
  );
}
