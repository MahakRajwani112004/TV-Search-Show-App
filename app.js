const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  //console.log("SUBMITTED!");
  const input = form.elements.query.value;
  //const config = { params: { q: input } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`);
  //console.log(res.data);
  //console.log(res.data[0].show.language);
  //   const img = document.createElement("IMG");
  //   img.src = res.data[0].show.image.medium;
  //   document.body.append(img);
  makeImages(res.data);
});
const makeImages = (shows) => {
  for (let show1 of shows) {
    // const but = document.querySelector("button");
    // but.addEventListener("onclick", function () {
    //   const Iurl =
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fkP7ROg89yAIiBeqlAUm9nMm7WGHmGa5Ww&usqp=CAU";
    //   body.style.backgroundImage = "url(Iurl)";

    if (show1.show.image) {
      const img = document.createElement("IMG");
      img.src = show1.show.image.medium;
      document.body.appendChild(img);
    }
  }
};
// const but = document.querySelector("button");
// but.addEventListener("onclick", function () {
//   const Iurl = "https://wallpaperaccess.com/full/1397712.jpg";
//   body.style.backgroundImage = `url(${Iurl})`;
// });
