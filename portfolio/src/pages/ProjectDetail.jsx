import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                <Link to="/projects" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-muted-foreground mb-8">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground font-medium">{project.title}</span>
            </nav>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                {/* Header */}
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">{project.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">{project.subtitle}</p>
                </div>

                {/* Hero Image */}
                <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-muted aspect-video">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        <section className="bg-card rounded-xl p-8 border border-border shadow-sm">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Project Overview
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {project.overview}
                            </p>
                        </section>

                        <section className="bg-card rounded-xl p-8 border border-border shadow-sm">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Problem Statement
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {project.problem}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {project.keyAchievements.map((achievement, idx) => (
                                    <div key={idx} className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors">
                                        <p className="text-3xl font-bold text-primary mb-2">{achievement.value}</p>
                                        <p className="text-sm font-medium text-muted-foreground">{achievement.label}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-card rounded-xl border border-border shadow-sm p-6 space-y-6 sticky top-24">
                            <div>
                                <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-md font-medium border border-border/50">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <h3 className="text-lg font-bold mb-4">Links</h3>
                                <div className="space-y-3">
                                    <a href={project.links.demo} className="flex items-center justify-center w-full bg-primary text-primary-foreground font-medium py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity gap-2">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a href={project.links.github} className="flex items-center justify-center w-full bg-secondary text-secondary-foreground font-medium py-2.5 px-4 rounded-lg hover:bg-secondary/80 transition-colors gap-2 border border-border">
                                        <Github size={18} /> View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetail;
