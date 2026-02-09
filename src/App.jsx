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
        <AnimatePresence mode="wait">
            {!isOpened ? (
                /* InvitationGuard - Full screen on ALL devices */
                <motion.div
                    key="invitation-guard"
                    initial="hidden"
                    animate="hidden"
                    exit="exit"
                    variants={pageExit}
                    className="w-full overflow-hidden"
                >
                    <InvitationGuard onOpen={handleOpen} />
                </motion.div>
            ) : (
                /* After opening - Split screen on desktop, full on mobile */
                <motion.div
                    key="main-layout"
                    initial="hidden"
                    animate="visible"
                    variants={pageEnter}
                >
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
                        <div className="w-[430px] h-screen overflow-y-auto bg-primary">
                            <div className="w-full">
                                <MainLayout />
                            </div>
                        </div>
                    </div>

                    {/* Single MusicToggle for both views */}
                    <MusicToggle />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
