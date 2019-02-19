class PersonDTO {
  constructor() {}

  getPersonBySession(person) {
    const dto = [];
    dto.push({
      id: person["id"],
      name: person["name"],
      email: person["email"]
    });
    return dto;
  }

  getIdByEmail(person) {
    const dto = [];
    dto.push({ id: person["id"]});
  }
}
module.exports = new PersonDTO();
