var Megaroster = function() {
  var self = this;

  this.save = function() {
    try {
        return (localStorage.students = JSON.stringify(self.students));
    }
    catch(err) {
      return false;
    }
  };

  this.addStudent = function(student_name) {
    var student = new Student();
    student.init({
      name: student_name
    });

    self.students.push(student);
    student.appendToList();

    self.save();
  };

  this.init = function() {
    self.students = [];
    Student.counter = 0;
    //self.load();
    //Student.counter = 0;

      $(document).on('submit', 'form.edit', self.updateStudent);

      $('#new_student_form').on('submit', function(ev){
        ev.preventDefault();
        var student_name = $(this.student_name).val();
        self.addStudent(student_name);
      });
  };
};

var roster = new Megaroster();
roster.init();
