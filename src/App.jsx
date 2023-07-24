import About from './components/About';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonials />
      <Reservation />
    </div>
  );
}

export default App;
