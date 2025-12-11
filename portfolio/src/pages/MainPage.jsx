import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home'; // We'll assume Home.jsx exports the Hero section
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import CodeViz from '../components/CodeViz';

const MainPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="space-y-0"> {/* Remove default space-y if sections handle their own padding */}

            {/* Hero Section (Home) */}
            <section id="home" className="min-h-screen pt-20 px-6 max-w-7xl mx-auto flex flex-col justify-center">
                <Home />
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 bg-card/30">
                <div className="max-w-7xl mx-auto">
                    <Skills />
                </div>
            </section>

            {/* Code Viz Section */}
            <CodeViz />

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <Projects />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <Contact />
                </div>
            </section>
        </div>
    );
};

export default MainPage;
