import React, { useEffect, useState } from "react";
import ProjectGrid from "./components/ProjectGrid";
import "./styles.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // CRA automatically replaces PUBLIC_URL with "/start" at build time
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);  

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark" : ""}>
      <header>
        <div className="controls">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      <main>
        <ProjectGrid projects={filteredProjects} />
      </main>
    </div>
  );
}

export default App;