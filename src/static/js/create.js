console.log('create');

import MyFetch from './class/MyFetch.class.js'

MyFetch.getPosts()
    .then(posts => console.log('posts posts', posts))
    .catch(err => console.error(err.message))

// get all from data into json object and send it back end via fetch




const mainForm = document.getElementById('add-blog-form');
console.log(mainForm);


mainForm.addEventListener('submit', function (event) {
  // sustabdyti forma nuo issiuntimo su psl perkrovimu
  event.preventDefault();
//   console.log('sustabdem');

  // pasiimti formos duomenis pagal name atributa
  const formData = new FormData(mainForm);
  // pasidarom paprsta js objekta is formDataObject
  const formDataPlain = Object.fromEntries(formData.entries());
  // pasidarom JSON objekta
  const formDataInJson = JSON.stringify(formDataPlain);
  console.log('formDataInJson',formDataInJson);

 MyFetch.createPost(formDataInJson, (data)=> {
   if (data.redirect){
       window.location = data.redirect}
 }
  );
  
});