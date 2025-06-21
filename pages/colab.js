// pages/Colab.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Colab() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1C2B24] font-lora relative px-4 pt-8 pb-40">
      <Head>
        <title>Babel – Colaborar</title>
      </Head>

      {/* Header superior con flecha, borrador centrado y botón de revisión */}
      <div className="flex items-center justify-between mb-1 relative">
        <Link href="/feed">
          <button className="ml-1 text-xl z-10">←</button>
        </Link>
        <h2 className="text-sm font-bold text-center w-full absolute left-0 right-0">Borrador</h2>
        <div className="w-[160px] flex justify-end mr-2 z-10 mt-1">
          <button className="bg-[#1C2B24] text-white text-xs px-3 py-1 rounded-full">Revisar colaboración</button>
        </div>
      </div>

      <hr className="border-t border-[#1C2B24]/10 my-2" />

      {/* Info de colaboración */}
      <div className="flex items-center gap-2 mb-1 pl-2">
        <Image src="/icons/colaborativo2.svg" alt="Poema Colaborativo" width={90} height={16} />
        <p className="text-xs italic text-[#1C2B24]/60">Autor: @lalora</p>
      </div>

      <hr className="border-t border-[#1C2B24]/10 my-2" />

      {/* Título del poema */}
      <h1 className="text-base font-bold mb-4 text-left pl-2">EL VECINO HABLA CON LOS PAJARITOS</h1>

      {/* Poema editable */}
      <div className="text-sm whitespace-pre-line leading-relaxed text-left pb-4 pl-2 max-w-[260px]">
        <p className="text-[#1C2B24]/60">
          qué lenta<br />
          es la danza<br />
          de las nubes
        </p>

        <p className="mt-4 text-[#1C2B24]/60">
          que deleitan<br />
          a los pájaros
        </p>

        <p
          className="mt-4 italic text-[#1C2B24] cursor-text animate-blink"
          contentEditable
          suppressContentEditableWarning={true}
          ref={inputRef}
        >
          que miran<br />
          desde los cables<br />
          de la ciudad.
        </p>

        <p className="mt-4 text-[#1C2B24]/60">
          Las miran<br />
          y comentan<br />
          que los vientos<br />
          allá arriba<br />
          corren rápido
        </p>

        <p
          className="mt-4 italic text-[#1C2B24] cursor-text animate-blink"
          contentEditable
          suppressContentEditableWarning={true}
        >
          y que sus<br />
          antepasados<br />
          sabían volar<br />
          sin nada<br />
          a lo que<br />
          aferrarse.
        </p>
      </div>

      {/* Teclado simulado nativo */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] z-20 bg-[#DADADA] p-2 pt-1 rounded-t-xl shadow-lg">
        <div className="flex justify-around text-[11px] text-[#1C2B24] mb-1 px-2">
          <span>I</span>
          <span>I'm</span>
          <span>we</span>
        </div>
        <div className="grid grid-cols-10 gap-1 text-center text-xs font-medium px-2">
          {'qwertyuiop'.split('').map((char, i) => (
            <div key={i} className="bg-white py-2 rounded-md shadow text-[13px]">{char}</div>
          ))}
        </div>
        <div className="grid grid-cols-9 gap-1 mt-1 px-4 text-center text-xs font-medium">
          {'asdfghjkl'.split('').map((char, i) => (
            <div key={i} className="bg-white py-2 rounded-md shadow text-[13px]">{char}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 mt-1 px-8 text-center text-xs font-medium">
          {'zxcvbnm'.split('').map((char, i) => (
            <div key={i} className="bg-white py-2 rounded-md shadow text-[13px]">{char}</div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-1 mt-2 px-2 text-xs">
          <div className="bg-white flex-1 py-2 rounded-md shadow text-center text-[13px]">123</div>
          <div className="bg-white flex-[3] py-2 rounded-md shadow text-center text-[13px]">space</div>
          <div className="bg-white flex-1 py-2 rounded-md shadow text-center text-[13px]">return</div>
        </div>
      </div>

      {/* Botón flotante Aa */}
      <div className="fixed bottom-[200px] right-5 z-50">
        <Image src="/icons/Aa.svg" alt="Estilo" width={48} height={48} />
      </div>

      <style jsx>{`
        .animate-blink {
          caret-color: black;
        }
      `}</style>
    </div>
  );
}
