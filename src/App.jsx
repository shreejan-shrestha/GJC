import { BrowserRouter } from "react-router-dom";

import { About, Contact, Feedbacks, Hero, Navbar, Overview, StarsCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
      </div>
      <div>
      <About />
      <Overview />
      <Feedbacks />
      <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
