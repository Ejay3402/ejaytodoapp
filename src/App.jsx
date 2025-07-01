import './styles/index.scss';

import TodoApp from "./components/TodoApp";
import JustLogo from './components/JustLogo';
import { useEffect, useState } from 'react';
import Footer from './components/footer';

const App = () => {

  setTimeout(() => {
    return <JustLogo />;
  }, 200);

  //toggle page
  const DelayPage = () => {
    const [page, setPage] = useState(<JustLogo />)

    useEffect( () => {
      const timeoutId = setTimeout( () => setPage(<TodoApp />), 2500);

      return () => clearTimeout(timeoutId);
    }, []);
    

    return (
      <>
        {page}
      <Footer />
      </>
    )

  }


  return (
    <>
      <DelayPage />
    </>
  )
}

export default App;