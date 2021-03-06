import { Link } from "react-router-dom"


export default function ProjectsList(props) {

  return (
    <div className="ProjectsList">
      <h1>Lif of Projects</h1>

      { props.projects.map( project => {
          return (
            <div className="project-summary" key={project._id}>
              <Link to={`/projects/${project._id}`}>{project.title}</Link>
            </div>
          );
        })
      }

    </div>
  )
}
