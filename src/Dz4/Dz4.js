import React, { useEffect } from 'react';
import './Dz4.css';
import Header from './modules/common/header/Header';
import Footer from './modules/common/footer/Footer';
import { useLocalStorage } from './shared/hooks/useLocalStorage';
import { useOnlineStatus } from './shared/hooks/useOnlineStatus';
import { useDocumentTitle } from './shared/hooks/useDocumentTitle';

export default function Dz4() {
  const [storedTheme, setTheme] = useLocalStorage('theme', 'white');

  useEffect(() => {
    console.log('useEffect');
    setTheme('dark');
  }, [setTheme]);

  console.log(useLocalStorage('theme'));
  console.log(storedTheme);

  // =================================================================

  const online = useOnlineStatus();
  console.log(`user is online: ${online}`);

  // =================================================================

  useDocumentTitle('Занятия | Hillel LMS');

  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
      </div>
      <Footer />
    </div>
  )
}
