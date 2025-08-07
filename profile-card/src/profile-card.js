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
    { name: "HTML", emoji: "🛡️", color: "#ffa94d" },
    { name: "CSS", emoji: "🪻", color: "#e25df4ff" },
    { name: "JavaScript", emoji: "💻️", color: "#e7d10bff" },
    { name: "Python", emoji: "🐍", color: "#5cca60ff" },
    { name: "React", emoji: "🌏️", color: "#74c9e8ff" },
  ];
  return (
    <ul className="skill-list">
      {skillList.map((skill) => {
        return (
          <Skill
            key={skill.name}
            name={skill.name}
            emoji={skill.emoji}
            color={skill.color}
          />
        );
      })}
    </ul>
  );
}

function Skill({ name, emoji, color }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {name} {emoji}
    </li>
  );
}
