import React, { Suspense } from "react";
import Hero from "../components/Hero";

// Lazy loading the other components
const UnsereLeistungen = React.lazy(() =>
  import("../components/UnsereLeistungen")
);
const Wie = React.lazy(() => import("../components/Wie"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const UnsereArbeit = React.lazy(() => import("../components/UnsereArbeit"));

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <UnsereLeistungen />
        <Wie />
        <Testimonials />
        <UnsereArbeit />
      </Suspense>
    </div>
  );
}
