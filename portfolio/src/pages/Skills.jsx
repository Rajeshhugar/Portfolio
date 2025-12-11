import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, Database, Cloud, Code, BarChart } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="text-primary w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{title}</h2>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1.5 rounded-full border border-border/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            title: "Machine Learning",
            icon: Brain,
            skills: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Deep Learning"]
        },
        {
            title: "Natural Language Processing",
            icon: MessageSquare,
            skills: ["NLTK", "spaCy", "Transformers", "Word2Vec", "Sentiment Analysis"]
        },
        {
            title: "Data Extraction & ETL",
            icon: Database,
            skills: ["Pandas", "NumPy", "SQL", "Apache Spark", "Airflow", "Web Scraping"]
        },
        {
            title: "Cloud & DevOps",
            icon: Cloud,
            skills: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes"]
        },
        {
            title: "Programming Languages",
            icon: Code,
            skills: ["Python", "R", "SQL", "C++", "Bash"]
        },
        {
            title: "BI & Visualization Tools",
            icon: BarChart,
            skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"]
        }
    ];

    return (
        <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight"
                >
                    Skills & Tools
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-muted-foreground"
                >
                    A comprehensive overview of my technical expertise and toolkit for building data-driven solutions.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <SkillCard
                        key={category.title}
                        {...category}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
