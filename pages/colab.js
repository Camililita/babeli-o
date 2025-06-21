// pages/Colab.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Colab() {
  const poem = `qué lenta
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
sin nada a lo que aferrarse.</em>`;

  return (
    <>
      <Head>
        <title>Colaborar – Babel</title>
      </Head>

      <div className="h-screen bg-[#F9F9F7] text-[#1C2B24] font-lora relative">
        {/* Encabezado */}
        <div className="sticky top-0 z-40 bg-[#F9F9F7] px-4 pt-6 pb-2 flex items-center justify-between">
          <Link href="/feed" className="w-[32px]">
            <Image src="/icons/flecha-back.svg" alt="Volver" width={24} height={24} />
          </Link>
          <p className="text-sm font-semibold text-center flex-grow -ml-[32px]">Borrador</p>
          <button className="text-xs bg-[#1C2B24] text-white px-3 py-1 rounded-full">Revisar colaboración</button>
        </div>

        {/* Info autor y colaboración */}
        <div className="px-4 pt-1">
          <div className="flex items-center gap-2 text-xs text-[#1C2B24]/60 italic mb-1">
            <Image src="/icons/colaborativo2.svg" alt="Poema colaborativo" width={80} height={16} />
            <p className="text-[#1C2B24]/50">Autor: <span className="text-[#1C2B24]/80">@lalora</span></p>
          </div>
          <p className="text-[15px] font-bold mb-4 leading-snug">EL VECINO HABLA CON LOS PAJARITOS</p>

          {/* Poema editable con resaltado */}
          <div
            className="whitespace-pre-line text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: poem }}
          ></div>
        </div>

        {/* Teclado simulado */}
        <div className="absolute bottom-0 left-0 right-0">
          <Image src="/keyboard/ios_keyboard.png" alt="Teclado simulado" width={500} height={200} />
        </div>

        {/* Botón flotante Aa */}
        <div className="fixed bottom-[210px] right-5 z-50">
          <Image src="/icons/Aa.svg" alt="Aa" width={48} height={48} />
        </div>
      </div>
    </>
  );
}
