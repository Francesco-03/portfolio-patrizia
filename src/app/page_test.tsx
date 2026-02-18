// import Image from "next/image";
// import qs from "qs";
// import { Opera } from "@/types/opera";

// //esempio di fetch dati da strapi

// export default async function Home() {
//   //esempio API per Opere
//   const opere = await getOpere();
//   return (
//     <main>
//       <h1>Galleria Opere</h1>
//       {opere.map((opera) => (
//         <section key={opera.documentId} style={{ marginBottom: 40 }}>
//           <h2>{opera.Titolo}</h2>
//           <p>{opera.Descrizione}</p>
//           <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//             {opera.Foto.map((foto) => (
//               <Image
//                 key={foto.id}
//                 src={process.env.NEXT_PUBLIC_STRAPI_API_URL + foto.url}
//                 alt={foto.name}
//                 width="500"
//                 height="500"
//               />
//             ))}
//           </div>
//         </section>
//       ))}
//     </main>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <main className="min-h-[100svh] max-h-[100svh] lg:min-h-[90svh] w-full relative flex flex-col align-middle justify-center items-center">
      {isDesktop ? (
        <motion.div
          initial={{ position: "absolute", top: "50%" }}
          animate={{ top: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "tween" }}
          className="w-11/12 h-px bg-verde aboslute left-1/2 -translate-x-1/2"
        />
      ) : (
        <div className="absolute w-full bottom-full left-1/2 -translate-x-1/2 px-5">
          <div className="w-full h-px bg-verde " />
        </div>
      )}
      {isDesktop ? (
        <motion.div
          initial={{ clipPath: "inset(50% 0% 50% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          className="flex items-center justify-center align-middle w-full px-5 md:px-15 text-center"
        >
          <div className="text-left">
            <h1 className="text-6xl md:text-8xl font-bold mb-5 md:mb-10">
              Patrizia Pellegrini
            </h1>

            <p className="mb-8 max-w-xl text-sm md:text-xl">
              Pittura e Scultura | Spaziare e predersi nell&apos;arte per
              ritrovarsi...
            </p>
          </div>
          <div className="relative md:aspect-[2/1.1] max-w-2xl w-full aspect-[2/1.4]">
            <Image
              src="/copertina.jpg"
              alt="Dettaglio opere artistiche"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>
      ) : (
        <div className="flex flex-col md:flex-row items-center align-middle w-full px-5 md:px-15 text-center">
          <div className="text-left">
            <h1 className="text-6xl md:text-8xl font-bold mb-5 md:mb-10">
              Patrizia Pellegrini
            </h1>

            <p className="mb-8 max-w-xl text-sm md:text-xl">
              Pittura e Scultura | Spaziare e predersi nell&apos;arte per
              ritrovarsi...
            </p>
          </div>
          <div className="relative md:aspect-[2/1.1] max-w-2xl w-full aspect-[2/1.4] mb-18 ">
            <Image
              src="/copertina.jpg"
              alt="Dettaglio opere artistiche"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <button className="aspect-[3/1] max-w-md bg-verde rounded-lg text-sfondo p-5 font-bold">
            <Link href="/gallery">Visita la mia galleria</Link>
          </button>
        </div>
      )}
      {isDesktop ? (
        <motion.div
          initial={{ position: "absolute", bottom: "50%" }}
          animate={{ bottom: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "tween" }}
          className="w-11/12 h-px bg-verde aboslute left-1/2 -translate-x-1/2"
        />
      ) : (
        <div className="absolute w-full top-full left-1/2 -translate-x-1/2 px-5">
          <div className="w-full h-px bg-verde" />
        </div>
      )}
    </main>
  );
}