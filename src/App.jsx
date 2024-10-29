import { useState, useEffect } from "react";
import "./index.css";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { AppSidebar } from "./components/Appsidebar";
import { create, getAll } from "./services/project";
import Appdialog from "./components/Appdialog";
import Maincomponent from "./components/Maincomponent";
import Project from "./components/Project";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAll().then((projectsList) => {
      setProjects(projectsList);
      console.log(projects);
    });
  }, []);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const addProject = (projectName) => {
    const projectData = {
      name: projectName,
    };
    create(projectData)
      .then((response) => {
        setProjects(projects.concat(response));
      })
      .catch((error) => console.log(error));
    setIsDialogOpen(false);
  };

  const [isHomePageOpen, setIsHomePageOpen] = useState(true);
  const [selectedProject , setSelectedProject] = useState(projects[0])

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AppSidebar
          projects={projects}
          handleDialogToggle={handleDialogToggle}
          setIsHomePageOpen={setIsHomePageOpen}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <main className="flex-1 p-4">
          <SidebarTrigger />
          {isHomePageOpen && <Maincomponent />}
          {!isHomePageOpen && <Project project={selectedProject}/>}
        </main>
      </SidebarProvider>
      {isDialogOpen && (
        <Appdialog
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          addProject={addProject}
        />
      )}
    </div>
  );
};

export default App;
