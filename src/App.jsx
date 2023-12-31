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

  function handleCancelProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content= <NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>
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
