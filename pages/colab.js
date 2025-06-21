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
sin nada a lo que aferrarse.</em>`);

  return (
    <>
      <Head>
        <title>Colaborar – Babel</title>
      </Head>

      <div className="h-screen bg-[#F9F9F7] text-[#1C2B24] font-lora relative pb-40">
        {/* Encabezado */}
        <div className="sticky top-0 z-40 bg-[#F9F9F7] px-4 pt-6 pb-2 border-b border-[#1C2B24]/10">
          <div className="flex items-center justify-between">
            <div className="w-6">
              <Image src="/icons/flecha.svg" alt="Volver" width={24} height={24} />
            </div>
            <div className="text-sm font-semibold">Borrador</div>
            <div className="text-xs font-medium bg-[#1C2B24] text-white px-3 py-1 rounded-full">
              Revisar colaboración
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Image src="/icons/colaborativo2.svg" alt="Poema colaborativo" width={100} height={16} />
            <span className="text-xs italic text-[#1C2B24]/50">Autor: @lalora</span>
          </div>
        </div>

        {/* Poema editable */}
        <div className="px-4 mt-4">
          <p className="font-bold mb-3">EL VECINO HABLA CON LOS PAJARITOS</p>
          <textarea
            className="w-full h-[400px] text-sm leading-relaxed whitespace-pre-line bg-transparent outline-none resize-none"
            value={poem}
            onChange={(e) => setPoem(e.target.value)}
          />
        </div>

        {/* Teclado simulado */}
        <div className="fixed bottom-0 w-full">
          <Image src="/keyboard/ios_keyboard.png" alt="Teclado simulado" width={393} height={216} className="w-full" />
        </div>

        {/* Botón flotante Aa */}
        <div className="fixed bottom-56 right-4 z-50">
          <Image src="/icons/Aa.svg" alt="Aa" width={48} height={48} className="object-contain" />
        </div>
      </div>
    </>
  );
}
