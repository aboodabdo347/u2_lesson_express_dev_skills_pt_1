const skills = [
  { id: 1, skill: 'front-end', experience: 4 },
  { id: 2, skill: 'back-end', experience: 1 },
  { id: 3, skill: 'Full-stack', experience: 1 }
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  let skill = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  return skill
}
const create = (skill) => {
  if (skills.length > 1) {
    skill.id = skills[skills.length - 1].id + 1
  } else {
    skill.id = 1
  }
  skill.experience = 0
  skills.push(skill)
  console.log(skill.id)
}
const deleteOne = (id) => {
  let pos
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].id === parseInt(id)) {
      pos = i
    }
  }
  skills.splice(pos, 1)
}
const updateOne = (id, updateSkill) => {
  id = parseInt(id)
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].id === id) {
      skills[i].skill = updateSkill
    }
  }
}
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
}
