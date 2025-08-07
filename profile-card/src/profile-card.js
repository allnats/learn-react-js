export default function ProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile.jpeg" alt="Man smiling"></img>;
}

function Intro() {
  return (
    <div className="data">
      <h1>Allendale Nato</h1>
      <p>
        Aspiring full-stack developer at RRC Polytech! I'm currently learning
        React so I could easily build and ship web apps.
      </p>
    </div>
  );
}

function SkillList() {
  const skillList = [
    { name: "HTML", level: "intermediate", color: "#ffa94d" },
    { name: "CSS", level: "intermediate", color: "#e25df4ff" },
    { name: "JavaScript", level: "intermediate", color: "#e7d10bff" },
    { name: "Python", level: "advanced", color: "#5cca60ff" },
    { name: "React", level: "beginner", color: "#74c9e8ff" },
  ];

  return (
    <ul className="skill-list">
      {skillList.map((skill) => {
        return (
          <Skill name={skill.name} level={skill.level} color={skill.color} />
        );
      })}
    </ul>
  );
}

function Skill({ name, level, color }) {
  let emoji = "👶";
  if (level === "intermediate") {
    emoji = "👍️";
  } else if (level === "advanced") {
    emoji = "💪";
  }

  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {name} {emoji}
    </li>
  );
}
