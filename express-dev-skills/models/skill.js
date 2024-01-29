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

module.exports = {
  getAll,
  getOne
}
