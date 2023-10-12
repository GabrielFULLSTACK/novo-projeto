
//                                              funçã0 Ero  
const myObiserver = new IntersectionObserver((nome) => {
  nome.forEach((nome) => {
      // forEach pega elemento por element
      if (nome.intersectionRatio) {
        // isIntersecting : 'true ' = se tiver na vew port / 'False' = se tiver fora da vew port
        nome.target.classList.add("show");
   
      } else {
    
        nome.target.classList.remove("show");
      }
    });
  });

  const element = document.querySelectorAll(".hidden"); // querySelectorAll pega a class last-one
  
  // virou uma lista como varios elementos // pega elent por element // obiseva elemento por elemento
  element.forEach((element) => myObiserver.observe(element));
  
  // vai observar lesOne   / inpecione  isIntersecting : 'true ' = se tiver na vew port / 'False' = se tiver fora da vew port
  // myObiserver.observe(lastOne)
  









