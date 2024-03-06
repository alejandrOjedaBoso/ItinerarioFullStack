const { people } = require("../data");

function getPeople(req, res) {
  res.status(200).json({ succes: true, data: people });
}

function createPerson(req, res) {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ sucess: false, msg: "please provide a name value" });
  }
  res.status(200).json({ sucess: true, person: name });
}

function createPersonPostman(req, res) {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ sucess: false, msg: "please provide a name value" });
  }
  res.status(200).json({ sucess: true, person: [...people, name] });
}

function updatePerson(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === parseInt(id));
  if (!person) {
    return res
      .status(404)
      .json({ succes: false, msg: "no person with id: " + id });
  }
  const newPeople = people.map((person) => {
    if (person.id === parseInt(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ sucess: true, data: newPeople });
}

function deletePerson(req, res) {
  const person = people.find((person) => person.id === parseInt(req.params.id));

  if (!person) {
    return res
      .setMaxListeners(404)
      .json({ success: false, msg: "no person with id: " + req.params.id });
  }
  const newPeople = people.filter((person) => {
    if (person.id !== parseInt(req.params.id)) {
      return person;
    }
  });
  return res.status(200).json({ success: true, data: newPeople });
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
