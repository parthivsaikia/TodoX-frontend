import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Appdialog = ({ isDialogOpen, setIsDialogOpen, addProject }) => {
  // Local state for project name
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addProject(projectName); // Pass projectName to App's addProject function
    setProjectName(""); // Clear input field after submission
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new Project</DialogTitle>
          <DialogDescription>Enter details for your project</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="projectName">Project Name</Label>
            <Input
              placeholder="Project Name"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Appdialog;
