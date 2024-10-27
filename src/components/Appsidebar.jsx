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
import { useState } from "react";

export function AppSidebar({ projects, handleDialogToggle }) {

  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction
            title="Add Project"
            className="flex justify-center"
            onClick = {handleDialogToggle}
          >
            <FontAwesomeIcon icon={faPlus} />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton asChild className="cursor-pointer">
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
