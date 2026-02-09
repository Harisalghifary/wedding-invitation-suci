import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import InvitationGuard from './components/Page1/InvitationGuard';
import MainLayout from './components/layout/MainLayout';
import MusicToggle from './components/shared/MusicToggle';
import { pageExit } from './components/shared/motion/variants';

function App() {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        setIsOpened(true);
        window.scrollTo(0, 0);
    };

    return (
        <div className="relative w-full min-h-screen">
            {/* MainLayout - Always rendered underneath */}
            <div className="w-full">
                {/* Mobile View (< md) */}
                <div className="md:hidden w-full overflow-hidden">
                    <MainLayout />
                </div>

                {/* Desktop View (≥ md) - Split screen */}
                <div className="hidden md:flex h-screen w-full">
                    {/* Left Panel - Fixed Background Image (takes remaining space) */}
                    <div className="flex-1 relative overflow-hidden bg-primary">
                        <img
                            src="/assets/desktop-mode.png"
                            alt="Suci & Seky"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Panel - Fixed width mobile view */}
                    <div className="w-[400px] h-screen overflow-y-auto bg-primary">
                        <div className="w-full">
                            <MainLayout />
                        </div>
                    </div>
                </div>
            </div>

            {/* InvitationGuard - Overlay curtain on top */}
            <AnimatePresence>
                {!isOpened && (
                    <motion.div
                        key="invitation-guard"
                        initial={{ opacity: 1, y: 0 }}
                        exit="exit"
                        variants={pageExit}
                        className="fixed inset-0 z-50"
                    >
                        <InvitationGuard onOpen={handleOpen} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MusicToggle - Only show after opening */}
            {isOpened && <MusicToggle />}
        </div>
    );
}

export default App;
