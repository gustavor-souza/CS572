class Grade {
  constructor(_id, _name, _course, _grade) {
    this.id = _id;
    this.name = _name;
    this.course = _course;
    this.grade = _grade;
  }
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    getCourse() {
      return this.course;
    }
    getGrade() {
      return this.grade;
    }
}

module.exports = Grade;