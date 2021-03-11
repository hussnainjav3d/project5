import React from "react";

const ProjectRequest = () => {
  return (
    <section className="project-request container" id="project-request">
      <div className="heading">
        <h1>start your new project</h1>
      </div>
      <div className="form-content">
        <form className="form-controler">
          <input type="text" placeholder="YOUR NAME" required></input>
          <input type="email" placeholder="YOUR EMAIL" required></input>
          <input type="number" placeholder="YOUR PHONE" required></input>
          <input type="submit" className="btn" value="Project Request"></input>
        </form>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea ut
          numquam fuga at optio ratione rerum excepturi, natus ex.
        </p>
      </div>
    </section>
  );
};

export default ProjectRequest;
