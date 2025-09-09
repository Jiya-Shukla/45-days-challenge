const skills = [
  { name: "HTML", proficiency: "Intermediate" },
  { name: "CSS", proficiency: "Advanced" },
  { name: "JavaScript", proficiency: "Beginner" }
];

function formatSkills(skillsArray) {
  return skillsArray.map(skill => `${skill.name} (${skill.proficiency})`);
}

const formattedSkills = formatSkills(skills);
console.log(formattedSkills);

// Display on the webpage
const skillsList = document.getElementById("skills-list");
formattedSkills.forEach(skill => {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
});