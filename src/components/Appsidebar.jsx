import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupAction,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import Appdialog from "./Appdialog";
import { useEffect, useState } from "react";
import { getAllTodos } from "@/services/todo";

export function AppSidebar({
  projects,
  handleDialogToggle,
  setIsHomePageOpen,
}) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const handleHomePageOpen = () => {
    setIsHomePageOpen(true);
  };

  useEffect(() => {
    if (selectedProject) {
      getAllTodos(selectedProject.id).then((todos) => {
        console.log(todos);
      });
    }
  }, [selectedProject]);

  const handleMenuButtonClick = (project) => {
    setSelectedProject(project);
    setIsHomePageOpen(false);
  };

  const menuItems = [
    {
      name: "Home",
      icon: Home,
      onClick: handleHomePageOpen,
    },
    {
      name: "Search",
      icon: Search,
      onClick: null,
    },
  ];

  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((menuItem) => (
                <SidebarMenuItem key={menuItem.name}>
                  <SidebarMenuButton onClick={menuItem.onClick}>
                    <menuItem.icon />
                    <span>{menuItem.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction
            title="Add Project"
            className="flex justify-center"
            onClick={handleDialogToggle}
          >
            <FontAwesomeIcon icon={faPlus} />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton
                    asChild
                    className="cursor-pointer"
                    onClick={() => handleMenuButtonClick(project)}
                  >
                    <span>{project.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
