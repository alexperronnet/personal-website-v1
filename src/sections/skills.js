import React from "react"
import skills from "../data/skills"
import CustomTooltip from "../components/tooltip"

const Skills = () => {
  return (
    <section
      className = "mb-16"
      id        = "skills"
    >
      <h2 className="mb-16">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
        {skills.map((x) => {
          return (
            <CustomTooltip
              key       = {x.title}
              title     = {x.topic}
              placement = "top"
              arrow
            >
              <div className="p-3 border-2 border-black hover:bg-blue-200 hover:border-blue-700 hover:text-blue-800">
                {x.title}
              </div>
            </CustomTooltip>
          )
        })}
      </div>
    </section>
  )
}

export default Skills