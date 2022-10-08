import DevHeader from './components/DevHeader';
import Top from './components/Top';
import Mid from './components/Mid';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className='h-full'>
      <DevHeader />
      <section className='bg-base-light'>
        <Top />
        <Mid />
        <Bottom />
      </section>
    </div>
  );
}

export default App;
