import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import InvitationGuard from './components/Page1/InvitationGuard';
import MainLayout from './components/layout/MainLayout';
import MusicToggle from './components/shared/MusicToggle';
import { pageExit, pageEnter } from './components/shared/motion/variants';

function App() {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        setIsOpened(true);
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait">
                {!isOpened ? (
                    <motion.div
                        key="invitation-guard"
                        initial="hidden"
                        animate="hidden"
                        exit="exit"
                        variants={pageExit}
                    >
                        <InvitationGuard onOpen={handleOpen} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="main-layout"
                        initial="hidden"
                        animate="visible"
                        variants={pageEnter}
                    >
                        <MainLayout />
                        <MusicToggle />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
