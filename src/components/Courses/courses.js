import React from 'react';
import './courses.css';

const Card = (props) => {
    return(
        <div className="card">
            <h3 className="course-title">{props.title}</h3>
            <p>{props.courseNumber}</p>
            <p className="course-description">{props.description}</p>
        </div>
    )
}

const Courses = () => { 
    return(
        <section className="courses-section">
            <div className="courses-title-container">
                <h2 className="courses-title">Courses</h2>
            </div>

            <div className="courses-content-area">
                <div className = "courses-grid">
                    <Card title = "Advanced programming" courseNumber = "CS 400" description = "An intermediate course in programming techniques covering data structures, algorithms, version control, frontend and backend."/>
                    <Card title = "Linear Algebra" courseNumber = "Math 340" description = "An introduction to linear algebra. Topics include matrix algebra, linear systems of equations, vector spaces, sub-spaces, linear dependence, span, basis, rank of matrices, determinants, linear transformations, coordinate representations, kernel, range, eigenvalues and eigenvectors, diagonalization, inner products and orthogonal vectors, symmetric matrices."/>
                    <Card title = "Intro to Computer Engineering" courseNumber = "ECE 354" description = "An introduction to fundamental structures of computer systems and the C programming language with a focus on the low-level interrelationships and impacts on performance. Topics include the virtual address space and virtual memory, the heap and dynamic memory management, the memory hierarchy and caching, assembly language and the stack, communication and interrupts/signals, compiling and assemblers/linkers."/>
                    <Card title = "Discrete Mathematics" courseNumber = "Math 240" description = "An introduction to discrete mathematics. Topics include logic, set theory, functions, relations, combinatorics, graph theory, and algorithms."/>
                    <Card title = "Intro to Machine Learning" courseNumber = "CS 540" description = "Principles of knowledge-based search techniques, automatic deduction, knowledge representation using predicate logic, machine learning, probabilistic reasoning. Applications in tasks such as problem solving, data mining, game playing, natural language understanding, computer vision, speech recognition, and robotics."/>
                    <Card title = "Data Science Modeling II" courseNumber = "Stat 340" description = "Teaches how to explore, model, and analyze data using R. Topics include basic probability models; the central limit theorem; Monte Carlo simulation; one- and two-sample hypothesis testing; Bayesian inference; linear and logistic regression; ANOVA; the bootstrap; random forests and cross-validation. Features the analysis of real-world data sets and the communication of findings in a clear and reproducible manner within a project setting."/>
                </div>
            </div>
        </section>
    );
}

export default Courses;