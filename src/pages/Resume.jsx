import { Button } from "react-bootstrap";

const Resume = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 border-b-4 border-blue-500 pb-2">
          My Resume
        </h1>
        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">📧</span>
            emmanuelatuahene16@gmail.com
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">📞</span> (226) 582-8948
          </p>
          <p className="text-gray-600">
            <span className="font-medium">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/eatuahene/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://www.linkedin.com/in/eatuahene/
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-medium">GitHub:</span>{" "}
            <a
              href="https://github.com/lilemman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://github.com/lilemman
            </a>
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Education
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium">BrainStation</h3>
            <p className="text-gray-600">
              Software Engineering Diploma (Aug 2023)
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-medium">Trios College</h3>
            <p className="text-gray-600">Web Specialist</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-medium">Centennial College</h3>
            <p className="text-gray-600">
              Business Marketing Advanced Diploma (Jan 2017)
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Experience
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium">Freelance Developer</h3>
            <p className="text-gray-600">
              EA Digital Solutions (2019 - Present)
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Developed custom websites and e-commerce platforms for clients
                in healthcare,law,and other industries.
              </li>
              <li>Managed website hosting and maintenance for clients.</li>
              <li>
                Created digital marketing strategies for small businesses.
              </li>
              <li>
                Led a team to execute digital marketing campaigns for various
                niches.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-medium">Web Specialist</h3>
            <p className="text-gray-600">pHotential Health (2020 - 2022)</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Spearheaded the design and maintenance of the company’s website
                using WordPress, integrating WooCommerce to boost online sales
                and customer reach.
              </li>
              <li>
                Integrated third-party plugins and deployed cybersecurity
                monitoring tools on cPanel, reducing cybersecurity risks
                significantly.
              </li>
              <li>
                Led a digital transformation of operations, modernizing
                workflows and achieving a 120% increase in operational
                efficiency.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <span className="font-bold">Frontend</span> : React, HTML, CSS,
              JavaScript
            </li>
            <li>
              <span className="font-bold">Backend</span>: Node.js, Express.js,
              MongoDB
            </li>
            <li>
              <span className="font-bold">Styling</span>: CSS,SCSS, Tailwind
              CSS, Bootstrap
            </li>
            <li>
              <span className="font-bold">Tools</span>: Git, GitHub, Vite
            </li>
            <li>
              <span className="font-bold">Certifications</span>: Meta & IBM
              Frontend Certifications
            </li>
            <li>
              <span className="font-bold">Awards</span>: Google X BrainStation
              24hrs Hackathon award winner
            </li>
          </ul>
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Winner of the 24-hour Google x BrainStation Hackathon</li>
            <li>Built a church management CRM with dynamic features.</li>
            <li>Secured a contract with No Frills for my cleaning business.</li>
          </ul>
        </section>
        {/*Contact Button*/}
        <Button href="/contact" variant="primary">
          Contact Me{" "}
        </Button>
      </div>
    </div>
  );
};

export default Resume;
