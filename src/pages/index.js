import 'animate.css';
import React, { useEffect } from 'react';
import AnimatedSection from "../components/Animation/AnimatedSection";
import Hero from '../components/home/herosection';
import Layout from "../components/layout/layout";
import styles from '../styles/Home.module.css';

function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            behavior: 'smooth',
            top: targetElement.offsetTop,
        });
    }
}
const getRandomProjects = () => {
    // Replace this with your logic to fetch or generate a list of random projects
    const projects = [
        { id: 1, title: 'Project 1', description: 'Description for Project 1' },
        { id: 2, title: 'Project 2', description: 'Description for Project 2' },
        { id: 3, title: 'Project 3', description: 'Description for Project 3' },
        // Add more projects as needed
    ];

    // Shuffle the array to get a random order
    const shuffledProjects = projects.sort(() => Math.random() - 0.5);

    return shuffledProjects;
};


export default function Home() {
    const randomProjects = getRandomProjects();

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                smoothScrollTo(targetId);
            });
        });
    }, []);
    return (
        <>
            <Layout>
                <Hero />
                <div className={styles.section}>
                    <p className={styles.content}>Hello! I'm a 5th-semester Computer Science student passionate about technology and innovation. If you have a project idea, a question, or just want to connect, feel free to reach out! I'm always open to new opportunities and collaborations.</p>

                    <div id="contactsection" className={styles.container}>
                        <div className={styles.text}>
                            <h2>Get in Touch</h2>
                            <AnimatedSection animationClass="animate__fadeInLeft">
                                <p className={styles.aboutcontent}>Whether you have a project idea, a question, or just want to say hello, feel free to reach out! I'm always open to new opportunities and collaborations.</p>

                            </AnimatedSection>
                        </div>

                        <div className={`${styles.image}`}>
                            <AnimatedSection animationClass="animate__fadeInRight">
                                {/* Placeholder for an image related to contact */}
                            </AnimatedSection>
                        </div>
                    </div>

                    <div id='aboutsection' className={styles.container}>
                        <div className={styles.imageprojects}>
                            {/* Placeholder for an image related to projects */}
                        </div>
                        <div className={styles.text}>
                            <h2>My Projects</h2>
                            <AnimatedSection animationClass="animate__fadeInRight">
                                <p className={styles.aboutcontent}>Explore the projects I've worked on during my academic journey. From coding challenges to larger software projects, each endeavor has been a learning experience. Take a look at my project portfolio!</p>
                                {/* Display the random list of projects */}
                                {randomProjects.map((project) => (
                                    <div key={project.id} className={styles.projectItem}>
                                        <h3>{project.title}</h3>
                                        <p className={styles.description}>{project.description}</p>
                                    </div>
                                ))}

                            </AnimatedSection>
                        </div>
                    </div>
                </div>

                <div id='' className={styles.contact}>
                    <AnimatedSection animationClass="animate__zoomIn">
                        <div className={styles.contactcontent}>
                            <h1 className={styles.contacttitle}>
                                <strong>Let's Connect and Innovate Together!</strong></h1>
                            <p className={styles.subtitle}>Ready to embark on a journey of innovation and creativity? Reach me today, and let's turn our technological dreams into reality. Explore the projects and experiences that define my passion for software engineering.</p>

                        </div>
                    </AnimatedSection>
                </div>

            </Layout>


        </>
    );
}
