import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const CodeViz = () => {
    return (
        <section id="codeviz" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                        <Code2 size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Code Visualization</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Interactive data visualization coming soon.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="border-2 border-dashed border-border rounded-xl h-96 flex flex-col items-center justify-center bg-card/50"
                >
                    <p className="text-muted-foreground font-medium">Visualization Container</p>
                    <p className="text-sm text-muted-foreground/60 mt-2">Replace this component with your visualization code.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default CodeViz;
