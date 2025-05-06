import Head from "next/head";
import Image from "next/image";

export default function Feed() {
  return (
    <>
      <Head>
        <title>Feed - Babel</title>
      </Head>

      <main className="min-h-screen bg-[#F9F9F7] text-[#1C2B24] px-4 pt-6 pb-28 font-lora">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Image
            src="/icons/avatar.svg"
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className="text-[24px] font-typewriter">Babel</h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-4 border-b border-[#1C2B24]/30">
          <button className="px-4 py-2 font-bold border-b-2 border-[#1C2B24]">Para ti</button>
          <button className="px-4 py-2 text-[#1C2B24]/50">Guardados</button>
        </div>

        {/* Poema 1 */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Image src="/icons/avatar.svg" alt="lalora" width={24} height={24} className="rounded-full" />
            <div>
              <p className="text-sm font-bold">@lalora</p>
              <p className="text-xs text-[#1C2B24]/50">González Catán, Argentina</p>
            </div>
          </div>
          <p className="font-bold mt-2 mb-2">EL VECINO HABLA CON LOS PAJARITOS</p>
          <p className="whitespace-pre-line mb-2">
            qué lenta{"\n"}
            es la danza{"\n"}
            de las nubes{"\n"}{"\n"}
            que deleitan{"\n"}
            a los pájaros{"\n"}{"\n"}
            que miran{"\n"}
            desde los cables{"\n"}
            de la ciudad.{"\n"}{"\n"}
            Las miran y comentan{"\n"}
            que los vientos allá arriba{"\n"}
            corren rápido{"\n"}{"\n"}
            y que sus antepasados{"\n"}
            sabían volar{"\n"}
            sin nada a lo que aferrarse.
          </p>
          <div className="flex gap-4 mt-2">
            <Image src="/icons/colab.svg" alt="Colab" width={20} height={20} />
            <Image src="/icons/send.svg" alt="Send" width={20} height={20} />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1C2B24]/20 my-4"></div>

        {/* Poema 2 (colaborativo) */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Image src="/icons/avatar.svg" alt="delfinasanda" width={24} height={24} className="rounded-full" />
            <div>
              <p className="text-sm font-bold">@delfinasanda</p>
              <p className="text-xs text-[#1C2B24]/50">Caballo Chiquito, Argentina</p>
            </div>
          </div>
          <p className="font-bold mt-2 mb-2">EL VECINO HABLA CON LOS PAJARITOS</p>
          <p className="whitespace-pre-line mb-2">
            qué lenta{"\n"}
            es la danza{"\n"}
            de las nubes
          </p>
          <div className="mt-2">
            <Image src="/icons/lapiz.svg" alt="Escribir" width={24} height={24} />
          </div>
        </div>
      </main>

      {/* Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#F9F9F7] border-t border-[#1C2B24]/20 flex justify-between items-center px-6 py-2 text-[#1C2B24]">
        <Image src="/icons/casa.svg" alt="Inicio" width={24} height={24} />
        <Image src="/icons/search.svg" alt="Buscar" width={24} height={24} />
        <Image src="/icons/manito.svg" alt="Notificaciones" width={24} height={24} />
        <div className="-mt-8 bg-[#1C2B24] p-3 rounded-full">
          <Image src="/icons/lapiz.svg" alt="Escribir" width={24} height={24} />
        </div>
        <Image src="/icons/mensajito.svg" alt="Mensajes" width={24} height={24} />
        <Image src="/icons/premio.svg" alt="Concursos" width={24} height={24} />
        <Image src="/icons/colab.svg" alt="Colaboraciones" width={24} height={24} />
      </nav>
    </>
  );
}

