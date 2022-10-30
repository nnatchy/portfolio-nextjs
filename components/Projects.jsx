import React from "react";
import twImg from "../public/assets/projects/tw.png";
import ProjectItem from "./ProjectItem";
import showcaseImg from "../public/assets/projects/showcase.png"
import trackingImg from '../public/assets/projects/tracking.png'
import netflixImg from '../public/assets/projects/netflix.png'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Tailwind CSS"
            backgroundImg={twImg}
            projectUrl="/tailwind"
          />
           <ProjectItem
            title="Showcase"
            backgroundImg={showcaseImg}
            projectUrl="/showcase"
          />
          <ProjectItem
            title="Netflix"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Tracking Website"
            backgroundImg={trackingImg}
            projectUrl="/tracking"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
