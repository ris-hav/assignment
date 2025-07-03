import React, { Suspense, lazy } from "react";

const AppBar = lazy(() => import("./components/AppBar.jsx"));
const ImageFade = lazy(() => import("./components/ImageFade.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const ImageSlider = lazy(() => import("./components/ImageSlider.jsx"));
const App = () => {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <AppBar />
      </Suspense>
      <Suspense fallback={<div>Loading App ...</div>}>
        <ImageFade />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <ImageSlider />
      </Suspense>
    </div>
  );
};

export default App;
