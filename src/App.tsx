import { Show, type Component } from 'solid-js';
import Hero from './components/Hero';
import Tabs from './components/Tab';

const App: Component = () => {
  return (
    <div class='max-h-full max-w-full font-mono'>
      <Hero/>
      <Tabs/>
    </div>
  );
};

export default App;
