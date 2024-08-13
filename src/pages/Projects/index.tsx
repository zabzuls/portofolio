import MainLayout from "@/components/MainLayout";
import React from "react";
interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <MainLayout>
     <div id={id}>

     </div>
    </MainLayout>
  );
};

export default Projects;
