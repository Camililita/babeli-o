import Head from 'next/head'

export default function Feed() {
  return (
    <>
      <Head>
        <title>Feed – Babel</title>
      </Head>
      <main className="min-h-screen bg-[#F9F9F7] text-[#1C2B24] dark:bg-[#1C2B24] dark:text-[#F9F9F7] px-4 py-6 font-lora">
        <h1 className="text-3xl font-bold mb-6 text-center font-typewriter">Bienvenido a Babel</h1>

        <div className="bg-[#EFEFEA] dark:bg-[#2B2B29] p-4 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            No tengo ideas, pero igual escribo. Me dejo llevar por un ritmo que no sé de dónde viene. Me tiembla un poco la voz cuando comparto esto.
          </p>
        </div>

        <div className="text-center text-[#888] mb-6">- 🌕 -</div>

        <div className="bg-[#EFEFEA] dark:bg-[#2B2B29] p-4 rounded-lg mb-20">
          <p className="text-lg leading-relaxed">
            Lo escribimos de a dos. Me gusta pensar que sin ella no podría haberlo dicho así.
          </p>
        </div>

        {/* Botonera fija abajo */}
        <nav className="fixed bottom-0 left-0 right-0 bg-[#F9F9F7] dark:bg-[#1C2B24] border-t border-[#CCC] dark:border-[#333] px-6 py-2 flex justify-between items-center">
          <img src="/icons/casa.svg" alt="Inicio" className="w-6 h-6" />
          <img src="/icons/search.svg" alt="Buscar" className="w-6 h-6" />
          <img src="/icons/manito.svg" alt="Notificaciones" className="w-6 h-6" />
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1C2B24] dark:bg-[#F9F8F4] text-white dark:text-black text-2xl">✏️</div>
          <img src="/icons/mensajito.svg" alt="Mensajes" className="w-6 h-6" />
          <img src="/icons/premio.svg" alt="Concursos" className="w-6 h-6" />
          <img src="/icons/colab.svg" alt="Colaboraciones" className="w-6 h-6" />
        </nav>
      </main>
    </>
  )
}

