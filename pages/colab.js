// pages/colab.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Colab() {
  const [poem, setPoem] = useState(`qué lenta
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
sin nada a lo que af</em>`);

  return (
    <>
      <Head>
        <title>Poema Colaborativo – Babel</title>
      </Head>
      <div className="bg-[#F9F9F7] text-[#1C2B24] font-lora h-screen flex flex-col">
        {/* Encabezado */}
        <div className="px-4 pt-4 pb-2 flex items-center gap-2 text-sm">
          <button>
            <Image src="/icons/flecha.svg" alt="Volver" width={16} height={16} />
          </button>
          <span className="font-semibold">Borrador</span>
          <button className="ml-auto text-[10px] bg-black text-white px-2 py-1 rounded-full">Revisar colaboración</button>
        </div>

        {/* Etiqueta colaborativo */}
        <div className="flex items-center gap-2 px-4">
          <Image src="/icons/colaborativo2.svg" alt="Poema colaborativo" width={100} height={20} className="opacity-70" />
          <span className="text-xs text-[#1C2B24]/40 italic">Autor: @lalora</span>
        </div>

        {/* Título */}
        <h2 className="px-4 pt-3 font-bold text-[14px]">EL VECINO HABLA CON LOS PAJARITOS</h2>

        {/* Poema */}
        <div className="flex-1 px-4 pt-3 pb-24">
          <textarea
            className="w-full h-full bg-transparent text-sm leading-relaxed whitespace-pre-line outline-none"
            value={poem}
            onChange={(e) => setPoem(e.target.value)}
          />
        </div>

        {/* Botón Aa */}
        <div className="fixed bottom-24 right-4 z-50">
          <div className="bg-[#1C2B24] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold">
            Aa
          </div>
        </div>

        {/* Teclado falso */}
        <div className="h-[250px] bg-[#E2E2E2] px-2 pt-2">
          <div className="text-[10px] text-center">(Teclado simulado)</div>
        </div>
      </div>
    </>
  );
}
