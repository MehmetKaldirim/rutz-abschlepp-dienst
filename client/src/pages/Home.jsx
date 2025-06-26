import React, { Suspense } from "react";
import Hero from "../components/Hero";

// Lazy loading the other components
const UnsereLeistungen = React.lazy(() =>
  import("../components/UnsereLeistungen")
);

const Testimonials = React.lazy(() => import("../components/Testimonials"));

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <UnsereLeistungen />
        <Testimonials />
      </Suspense>
    </div>
  );
}
