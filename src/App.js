import './App.css';
import CountryCard from './components/CountryCard';

function App() {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark p-2 navbar-expand-sm">
      <a href="/" className='navbar-brand'>React With Bootstrap Styles</a>
    </nav>
    <CountryCard />
    </>
  );
}

export default App;
