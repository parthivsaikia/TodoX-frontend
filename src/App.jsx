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
      name: projectName
    }
    create(projectData)
      .then(response => {
        setProjects(projects.concat(response))
      })
      .catch(error => console.log(error))
    setIsDialogOpen(false)
  }

  return (
    <div>
      <SidebarProvider>
        <AppSidebar projects={projects} handleDialogToggle={handleDialogToggle}/>
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
      {
        isDialogOpen && 
        <Appdialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} addProject={addProject}/>
      }
      <h1>hii</h1>
    </div>
  );
};

export default App;
