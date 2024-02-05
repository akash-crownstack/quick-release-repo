import React from "react";
import { useSession } from "next-auth/react";

const Projects = () => {
  const session = useSession();

  return <div>Projects</div>;
};

export default Projects;
