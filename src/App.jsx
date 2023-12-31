import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }

  function handleAddProject(projectData) {
    console.log('projectData: ', projectData);
    const newProject = {
      ...projectData,
      id: Math.random()
    };
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [ ...prevState.projects, newProject]
      };
    })
  }

  console.log('projectsState: ', projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content= <NewProject onAdd={handleAddProject}/>
  } else if (projectsState.selectedProjectId === undefined ) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
