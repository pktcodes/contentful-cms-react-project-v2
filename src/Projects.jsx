import useFetchProjects from './fetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  console.log(isLoading, projects);

  return <h2>Projects</h2>;
};

export default Projects;
