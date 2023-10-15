// querySelectorAll pega todos elem com a class hidden
const element = document.querySelectorAll('.hidden');

//                                              funçã0 Ero
const myObiserver = new IntersectionObserver((entr) => {
  entr.forEach((entr) => {
    // forEach pega elemento por element
    if (entr.intersectionRatio) {
      // isIntersecting : 'true ' = se tiver na vew port / 'False' = se tiver fora da vew port
      
      entr.target.classList.add("show");

      
    } else {
      entr.target.classList.remove("show");
      entr.target.classList.remove("hidden");
      
    }
    console.log(element)
  });
});

// virou uma lista como varios elementos // pega elent por element // obiseva elemento por elemento
element.forEach((element) => myObiserver.observe(element));

// vai observar lesOne   / inpecione  isIntersecting : 'true ' = se tiver na vew port / 'False' = se tiver fora da vew port
// myObiserver.observe(lastOne)
