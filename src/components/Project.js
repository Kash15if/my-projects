const Projects = ({ title, videoURL, description, repo, webpage }) => {
    return (

        <>

            <h2>{title}</h2>


            <iframe width="50%" height="345" src={videoURL}>
            </iframe>

            <h6>{description}</h6>

            <a href={repo}>Code</a>
            <br />
            <a href={webpage}>Demo</a>

        </>
    );
}

export default Projects;