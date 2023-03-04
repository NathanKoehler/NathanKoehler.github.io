import React from 'react'

function ProjectTimeline({ data }) {
  const sublineVariables = [
    {
      borderColor: "#2bcc56",
      backgroundColor: "rgba(43, 204, 86, 0.15)",
    },
    {
      borderColor: "#ffdc26",
      backgroundColor: "rgba(255, 232, 61, 0.15)",
    },
    {
      borderColor: "#e35cf7",
      backgroundColor: "rgba(227, 92, 247, 0.15)",
    },
    {
      borderColor: "#6b74fa",
      backgroundColor: "rgba(107, 116, 250, 0.15)",
    },
    {
      borderColor: "#eb263d",
      backgroundColor: "rgba(235, 38, 61, 0.15)",
    },
    {
      borderColor: "#04baba",
      backgroundColor: "rgba(4, 186, 186, 0.15)",
    },
    {
      borderColor: "#6b74fa",
      backgroundColor: "rgba(107, 116, 250, 0.15)",
    },
  ]

  return (
    <ul className="timeline my-1">
        {data.map((item, index) => (
          <li key={index} className="timeline-item" style={{
            "--subline-border": `${sublineVariables[index].borderColor}`, 
            "--subline-background": `${sublineVariables[index].backgroundColor}`
          }}>
            <div className="timeline-item__content">
              <h2 className="timeline-item__title" style={{ color: `${sublineVariables[index].borderColor}` }}>{item.title}</h2>
              <h3 className="timeline-item__date text">{item.date}</h3>
              <div className="timeline-item__text text">{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
  )
}

export default ProjectTimeline