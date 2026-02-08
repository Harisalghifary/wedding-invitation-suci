import { useState } from 'react';
import InvitationGuard from './components/Page1/InvitationGuard';
import MainLayout from './components/layout/MainLayout';
import MusicToggle from './components/shared/MusicToggle';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full overflow-hidden">
      {!isOpened ? (
        <InvitationGuard onOpen={handleOpen} />
      ) : (
        <>
          <MainLayout />
          <MusicToggle />
        </>
      )}
    </div>
  );
}

export default App;
