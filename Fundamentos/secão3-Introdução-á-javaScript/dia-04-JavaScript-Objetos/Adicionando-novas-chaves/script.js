let student = {
    firstName: 'Danilo',
    age: 19,
    job: 'tecnico de informatica',
  };
  
  let newKey = 'lastName';
  let lastName = 'Gomes';
  let newKey2 = 'e_mail';
  let e_mail = "danilo.gomes.dg91@gmail.com";
  let newKey3 = 'telefone';
  let telefone ="991458923";
  
  function addProperty(object, key, value) {
    object[key] = value;
  };
  
  addProperty(student, newKey, lastName,);
  addProperty(student, newKey2, e_mail);
  addProperty(student, newKey3, telefone);

  console.log(student);

  
  newKey = 'fullName';
  let fullName = student.firstName + ' ' + student.lastName;
  
  addProperty(student, newKey, fullName);
  console.log(student);