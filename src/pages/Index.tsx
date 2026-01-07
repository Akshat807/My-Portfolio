import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Scene3D = lazy(() => import('@/components/Scene3D'));

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Akshat Srivastava | Frontend Developer Portfolio</title>
        <meta name="description" content="Frontend Developer with expertise in React.js, JavaScript, and modern web technologies. 800+ DSA problems solved. Open-source contributor." />
        <meta name="keywords" content="Frontend Developer, React.js, JavaScript, Portfolio, Web Developer, Akshat Srivastava" />
        <meta property="og:title" content="Akshat Srivastava | Frontend Developer" />
        <meta property="og:description" content="Frontend Developer building responsive, performance-optimized web applications" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="relative min-h-screen grid-bg">
        {/* 3D Background */}
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
