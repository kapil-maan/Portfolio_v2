// Experience.jsx
import React from 'react';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaCodeBranch,
  FaTh
} from 'react-icons/fa';

const Experience = () => {

  const experiences = [

    {
      company: "Macbease",
      role: "App Development Intern",
      period: "Jun 2025 - Aug 2025",
      duration: "3 months",
      location: "Remote",
      type: "Internship",

      technologies: [
        "React Native",
        "React.js",
        "Android",
        "REST API"
      ],

      projects: [
        {
          title: "Cross-platform Mobile Applications",
          description:
            "Developed and maintained cross-platform mobile applications ensuring smooth performance and seamless user experience across Android platforms.",
          highlights: [
            "Built cross-platform mobile apps using React Native and React.js",
            "Integrated REST APIs for real-time data communication",
            "Debugged and optimized app performance",
            "Improved UI responsiveness across multiple screen sizes"
          ]
        }
      ],

      responsibilities: [
        "Developed mobile UI components using React Native",
        "Integrated APIs for dynamic data rendering",
        "Debugged application issues to improve performance",
        "Collaborated with development team for feature improvements"
      ],

      achievements: [
        "Improved application performance and reduced loading time",
        "Gained practical experience in cross-platform development",
        "Enhanced understanding of mobile UI optimization"
      ]
    },


    {
      company: "Harman",
      role: "C++ Data Structure Intern",
      period: "May 2024 - Jul 2024",
      duration: "3 months",
      location: "Remote",
      type: "Internship",

      technologies: [
        "C++",
        "Data Structures",
        "Algorithms"
      ],

      projects: [
        {
          title: "Algorithm Development",
          description:
            "Developed and tested algorithms for solving real-world computational problems using advanced data structures.",
          highlights: [
            "Implemented sorting and searching algorithms",
            "Worked on graph-based pathfinding algorithms",
            "Debugged and optimized code for performance efficiency",
            "Documented algorithm logic for maintainability"
          ]
        }
      ],

      responsibilities: [
        "Developed algorithms for sorting, searching and pathfinding",
        "Debugged and tested data structure implementations",
        "Documented code for better maintainability",
        "Analyzed algorithm efficiency and optimization"
      ],

      achievements: [
        "Improved problem-solving skills using real-world datasets",
        "Strengthened understanding of advanced data structures",
        "Enhanced coding efficiency in C++"
      ]
    },


    {
      company: "Soul AI / Deccan AI",
      role: "AI Trainer (Freelance)",
      period: "Mar 2025 - Dec 2025",
      duration: "10 months",
      location: "Remote",
      type: "Freelance",

      technologies: [
        "Google API",
        "Gemini",
        "ChatGPT",
        "Prompt Engineering",
        "NLP",
        "AI Evaluation"
      ],

      projects: [
        {
          title: "AI Response Optimization",
          description:
            "Evaluated and improved AI-generated responses to ensure high-quality, reliable and optimized outputs.",
          highlights: [
            "Reviewed and refined AI model responses",
            "Improved accuracy and clarity of generated outputs",
            "Worked with NLP based evaluation techniques",
            "Used prompt engineering strategies to improve response quality"
          ]
        }
      ],

      responsibilities: [
        "Analyzed AI-generated responses for accuracy and quality",
        "Applied prompt engineering techniques for optimization",
        "Improved response consistency across multiple domains",
        "Collaborated with AI teams for better output reliability"
      ],

      achievements: [
        "Improved AI output reliability through structured evaluation",
        "Enhanced skills in prompt engineering and NLP workflows",
        "Worked with multiple AI platforms including Gemini and ChatGPT"
      ]
    },


    {
      company: "National Cadet Corps (NCC)",
      role: "NCC Cadet",
      period: "Aug 2023 - Mar 2026",
      duration: "2.5 years",
      location: "India",
      type: "Leadership & Training",

      technologies: [
        "Leadership",
        "Discipline",
        "Teamwork"
      ],

      projects: [
        {
          title: "Military Training & Leadership Development",
          description:
            "Participated in structured military training programs to develop leadership, discipline and teamwork skills.",
          highlights: [
            "Completed multiple training camps",
            "Developed leadership and decision-making skills",
            "Participated in physical endurance and discipline programs"
          ]
        }
      ],

      responsibilities: [
        "Participated in NCC training camps",
        "Developed discipline and leadership qualities",
        "Worked in team-based structured activities"
      ],

      achievements: [
        "Strengthened leadership and teamwork skills",
        "Demonstrated discipline and commitment over long-term training"
      ]
    }

  ];


  return (

    <section id="experience" className="section-container">

      <div className="text-center mb-16">
        <h2 className="section-title flex items-center justify-center gap-2">
          <FaBriefcase /> Work Experience
        </h2>
      </div>


      <div className="max-w-5xl mx-auto space-y-10">

        {experiences.map((exp, expIndex) => (

          <div key={expIndex} className="card p-6">

            {/* header */}
            <div className="flex justify-between flex-wrap gap-3 border-b pb-4 mb-4">

              <div>
                <h3 className="text-xl font-bold">{exp.company}</h3>

                <p className="text-gray-400 text-sm">
                  {exp.role}
                </p>
              </div>


              <div className="text-sm text-gray-400">

                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {exp.period}
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  {exp.location}
                </div>

              </div>

            </div>


            {/* badges */}
            <div className="flex gap-3 mb-5 flex-wrap">

              <span className="badge">
                {exp.duration}
              </span>

              <span className="badge">
                {exp.type}
              </span>

            </div>


            {/* technologies */}
            <div className="mb-6">

              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <FaCode /> Technologies
              </h4>

              <div className="flex flex-wrap gap-2">

                {exp.technologies.map((tech, i) => (

                  <span key={i} className="tech-badge">
                    {tech}
                  </span>

                ))}

              </div>

            </div>



            {/* projects */}
            <div className="mb-6">

              <h4 className="font-semibold flex items-center gap-2 mb-3">
                <FaTh /> Key Projects
              </h4>


              {exp.projects.map((project, pIndex) => (

                <div key={pIndex} className="mb-4">

                  <h5 className="font-medium">
                    {project.title}
                  </h5>


                  <p className="text-sm text-gray-400">
                    {project.description}
                  </p>


                  <ul className="mt-2 space-y-1">

                    {project.highlights.map((h, hIndex) => (

                      <li key={hIndex} className="flex gap-2 text-sm">

                        <FaCheckCircle className="text-green-400 mt-1" />

                        {h}

                      </li>

                    ))}

                  </ul>

                </div>

              ))}

            </div>



            {/* responsibilities */}
            <div className="mb-6">

              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <FaUsers /> Responsibilities
              </h4>

              <ul className="space-y-1">

                {exp.responsibilities.map((r, i) => (

                  <li key={i} className="text-sm">
                    • {r}
                  </li>

                ))}

              </ul>

            </div>



            {/* achievements */}
            <div className="mb-6">

              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <FaAward /> Achievements
              </h4>

              <ul className="space-y-1">

                {exp.achievements.map((a, i) => (

                  <li key={i} className="flex gap-2 text-sm">

                    <FaStar className="text-yellow-400 mt-1" />

                    {a}

                  </li>

                ))}

              </ul>

            </div>


            {/* github */}
            <div className="flex items-center gap-2 text-sm">

              <FaCodeBranch />

              <span>
                Projects available on GitHub
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

};


export default Experience;