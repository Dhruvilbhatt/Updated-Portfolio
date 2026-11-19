import "./site/site.css";
import { Footer, Nav } from "./site/Layout";
import { Hero } from "./site/Hero";
import { Stack } from "./site/Stack";
import { Experience } from "./site/Experience";
import { Research } from "./site/Research";
import { Cli } from "./site/Cli";

function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Stack />
        <Experience />
        <Research />
        <Cli />
      </main>
      <Footer />
    </div>
  );
}

export default App;
