import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Database, Cpu, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="flex flex-col-reverse lg:flex-row items-center gap-12 py-12 lg:py-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-8 text-center lg:text-left"
                >
                    <div className="space-y-4">
                        <h2 className="text-primary font-semibold text-xl">Machine Learning Engineer</h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                            Rajesh Hugar
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Over 5 years of experience building and deploying scalable AI solutions, specializing in NLP, Deep Learning, and LLM Architectures.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <Link
                            to="/projects"
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={18} />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 border border-border bg-background hover:bg-secondary rounded-full font-bold transition-all hover:scale-105"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <p className="text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                        My journey is driven by a passion for making complex models interpretable and automating intricate workflows to deliver tangible business value.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 blur-sm opacity-70"></div>
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqJrC0X9uHbCe-0Soxe2JGwGtRVqH54TfgJSEaTlYNN1iYsdsnQ-cLiHclBng7aiKruNtn-5_mNPKCQ062b8YeKsK4FiE98eWHR5NE2RpQV6gTPcWZ_6H9L2HSP_mo_3wIVzUZKTOzU2Ol_8JIgvbjCoD8X3ZLkUtOIvDh_IURZ-nRBvMjieWgFOjSWol-VCG6gQQ3F454vdN3GUTgpvlHJSXValOvQYrWNDkayBCrg3Tmu4N8O1lmn4fSRW2yPeRENfJFBexW2Ns"
                            alt="Rajesh Hugar"
                            className="relative w-full h-full object-cover rounded-2xl shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 border-4 border-background"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Core Specializations */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Specializations</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Key areas where I apply my expertise to drive impactful results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center space-y-4"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                            <Brain size={32} />
                        </div>
                        <h3 className="text-xl font-bold">NLP & Deep Learning</h3>
                        <p className="text-muted-foreground">BERT, GPT-4, Fine-tuning, Text Summarization</p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center space-y-4"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                            <Cpu size={32} />
                        </div>
                        <h3 className="text-xl font-bold">LLM Architectures</h3>
                        <p className="text-muted-foreground">RAG, LangChain, Vector Databases, Agentic Workflows</p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center space-y-4"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                            <Database size={32} />
                        </div>
                        <h3 className="text-xl font-bold">MLOps & Automation</h3>
                        <p className="text-muted-foreground">Explainable AI (XAI), CI/CD for ML, Model Monitoring</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
