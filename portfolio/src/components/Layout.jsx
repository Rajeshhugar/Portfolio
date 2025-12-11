import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans text-foreground overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-24 md:pt-28 pb-16 px-4 md:px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="container mx-auto max-w-7xl"
                >
                    {children}
                </motion.div>
            </main>

            <footer className="border-t border-border py-8 bg-secondary/30">
                <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
                    <p>© {new Date().getFullYear()} Rajesh Hugar. All rights reserved.</p>
                    <div className="mt-4 flex justify-center gap-6">
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
