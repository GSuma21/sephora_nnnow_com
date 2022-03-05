async function getdata() {
    try {
      let res = await fetch(`./product_data.json`)
      let data = await res.json();
      console.log(data.Face_Foundation_Cream)
       displaydata(data.Face_Foundation_Cream)
      
    } catch (err) {
      console.log(err);
    }
  }

  function displaydata(data) {
    second.innerText = ""
  for(let i=1;i<data.length;i++){
    let pict = document.createElement("div")
    let img = document.createElement("img");
      img.src = data[i].image1;
      let title = document.createElement("p");
      title.textContent = data[i].title;
      pict.append(img, title);
      s.append(pict);

  }


//   data.forEach((element) => {
//       let pict = document.createElement("div");
//       let img = document.createElement("img");
//       img.src = element.image1;
//       let title = document.createElement("p");
//       title.textContent = element.itle;
//       pict.append(img, title);
//       s.append(pict);
//   });

}

getdata();
