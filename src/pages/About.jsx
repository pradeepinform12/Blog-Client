import { FooterDivider } from 'flowbite-react';
import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center  text-black dark:bg-gray-900 dark:text-white ">
      <div className="max-w-2xl mx-auto p-6  bg-white dark:bg-gray-900 dark:text-gray-100">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">
          About Me – Pradeep Kumar
        </h1>

        {/* Introduction */}
        <p className="leading-relaxed mb-6 text-justify">
          Hello, I am <span className="font-semibold">Pradeep Kumar</span>,
          a passionate and result-driven <strong>Full-Stack Developer</strong>

          <span className='gap-2'> who loves building powerful, scalable, and user-friendly web applications.
            My journey in software development started with a deep curiosity about how
            websites work behind the scenes. Over time, I learned to work on both
            frontend and backend, which helped me become a complete full-stack developer.</span>
        </p>

        <FooterDivider />

        {/* Frontend Section */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          On the Frontend Side, I Work With:
        </h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li><strong>React.js & Next.js</strong> – for building interactive and fast UIs</li>
          <li><strong>Tailwind CSS, Flowbite, Shadcn, Bootstrap</strong> – for responsive styling</li>
          <li><strong>Framer Motion & Animations</strong> – for engaging user experiences</li>
        </ul>

        {/* Community Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          On the backend side, I specialize in:
        </h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li><strong>Node.js & Express.js</strong> – for REST APIs and business logic</li>
          <li><strong>Java & Spring Boot</strong> – for REST APIs and business logic</li>
          <li><strong>MongoDB & Mongoose</strong> – for database design and queries</li>
          <li><strong>JWT & OAuth 2.0 authentication</strong> – for secure login systems</li>
          <li><strong>Passport.js & Refresh tokens</strong> – for session management</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Some of my key projects include:
        </h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A Blog Platform with user authentication, comments, likes, and admin roles.</li>
          <li>A Canva-like Template Builder for YouTube banners, Instagram posts,and thumbnails.</li>
          <li>A Full E-commerce System with cart, checkout, and payment integration.</li>
          <li>A Real-time Design Collaboration Tool with fabric.js and Next.js.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          My Technical Skills
        </h2>

        <ul className="list-disc list-inside space-y-2 text-left">
          <li><strong>Frontend Development:</strong> – HTML, CSS, JavaScript (ES6+), React.js, Next.js, Redux, Zustand</li>
          <li><strong>Backend Development:</strong> – Node.js, Express.js, REST APIs, Java, Spring Boot</li>
          <li><strong>Databases:</strong> – MongoDB, Mongoose, Firebase basics, MySql</li>
          <li><strong>Authentication:</strong> – JWT, Google OAuth, Passport.js</li>
          <li><strong>UI/UX Tools:</strong> – Tailwind CSS, Flowbite, Shadcn, Framer Motion, Material UI</li>
          <li><strong>Version Control & Deployment:</strong> – Git, GitHub, Vercel, Render,</li>
          <li><strong>Other Skills:</strong> – MVC pattern, Error handling, API security, Performance optimization</li>
        </ul>
        <p className="leading-relaxed mb-6 mt-5 text-justify">
          I believe that a Full-Stack Developer is not just someone who codes, but someone who understands the complete picture of application development — from planning the architecture to deployment.

          Currently, I am exploring Next.js 14 advanced features, server-side rendering, and cloud deployment strategies to push my projects to the next level.

          Apart from coding, I enjoy sharing knowledge, writing about development, and guiding others who are starting their journey in web development.

          My long-term vision is to develop impactful applications that solve real-world problems, improve user experience, and create value for businesses.

          Thank you for reading my journey. I am always open to collaborations, new projects, and discussions.
        </p>

        <h1>— Pradeep Kumar
        </h1>
        <h5>Full-Stack Developer</h5>
        {/* CTA */}
        
      </div>
    </div>

  );
}