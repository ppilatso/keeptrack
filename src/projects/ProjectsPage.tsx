import { MOCK_PROJECTS } from './MockProjects'

type Props = {}

function ProjectsPage(props: Props) {
  return (
    <>
      <h1>Projects</h1>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
    </>
  )
}

export default ProjectsPage