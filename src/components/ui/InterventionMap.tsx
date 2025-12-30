"use client";

import dynamic from "next/dynamic";

// Loading placeholder
function MapLoading() {
  return (
    <div className="w-full h-[500px] bg-neutral-100 rounded-2xl animate-pulse flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
        <p className="text-neutral-500">Chargement de la carte...</p>
      </div>
    </div>
  );
}

// Dynamic import to prevent SSR
const InterventionMap = dynamic(
  () => import("./InterventionMapClient"),
  {
    ssr: false,
    loading: () => <MapLoading />,
  }
);

export { InterventionMap };
