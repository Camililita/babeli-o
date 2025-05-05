import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Babel</title>
      </Head>
      <main className="min-h-screen bg-[#F9F9F7] flex flex-col items-center justify-center text-[#1C2B24] px-4 py-10">
        <h1 className="text-[84px] font-typewriter mb-1">Babel</h1>
        <p className="font-belgian text-[14px] -mt-1 mb-6">by Algobvio</p>

        <input
          type="text"
          placeholder="Usuario"
          className="w-72 px-4 py-2 border border-[#1C2B24] rounded mb-3 font-lora bg-transparent placeholder-[#1C2B24]"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-72 px-4 py-2 border border-[#1C2B24] rounded mb-3 font-lora bg-transparent placeholder-[#1C2B24]"
        />

        <button className="w-72 px-4 py-2 bg-[#1C2B24] text-[#F9F8F4] font-lora font-bold rounded mb-2 hover:bg-[#333] transition-all">
          Iniciar Sesión
        </button>

        <p className="text-sm font-lora underline cursor-pointer text-[#1C2B24] mb-10">
          Crear cuenta
        </p>

        <p className="text-center text-sm max-w-sm font-lora text-[#1C2B24] opacity-90">
          Subí tus poemas, escribí en colaboración y participá en concursos trimestrales sin mostrar tu nombre real. Leé desde el misterio, escribí desde el gesto.
        </p>
      </main>
    </>
  );
}

