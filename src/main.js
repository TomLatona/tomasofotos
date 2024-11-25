// Photo data for each tab
const photoData = {
  japan: [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg"

  ],
  savannah: [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
  ],
  china: [
      "china1.jpeg",
      "china2.jpeg",
      "china3.jpeg",
      "china4.jpeg",
      "china5.jpeg",
      "china6.jpeg",
      "china7.jpeg",
      "china8.jpeg",
      "china9.jpeg",
      "china10.jpeg",
      "china11.jpeg",
      "china12.jpeg",
      "china13.jpeg",
      "china14.jpeg",
      "china15.jpeg",
      "china16.jpeg",
      "china17.jpeg",
      "china18.jpeg",
      "china19.jpeg",
      "china20.jpeg",
      "china22.jpg",
      "china23.jpg",
      "china24.jpg",
      "china25.jpg",
      "china26.jpg",
      "china27.jpg",
      "china28.jpg",
      "china29.jpg",
      "china30.jpg",
      "china31.jpg",
      "china32.jpg",
      "china33.jpg",
      "china34.jpg",
      "china35.jpg"
  ],
    motorcycles: [
        "bb1.jpg",
        "bb2.jpg",
        "bb3.jpg",
        "bb4.jpg",
        "bb5.jpg",
        "bb6.jpg",
        "bb7.jpeg",
        "bb8.jpg",
        "bb9.jpg",
        "bb10.jpg",
        "bb11.jpg",
        "bb12.jpg"
    ],
    portraits: [
        "p1.jpg",
        "p2.jpg",
        "p3.jpg",
        "p4.jpg",
        "p5.jpg",
        "p6.jpeg",
        "p7.jpeg",
        "p8.jpg",
        "p9.jpg",
        "p10.jpg",
        "p11.jpg",
        "p12.jpg",
        "p13.jpg",
        "p14.jpg",
        "p15.jpg",
        "p16.jpg",
        "p17.jpg",
        "p18.jpg",
        "p19.jpg",
        "p20.jpg",
        "p21.jpg",
        "p22.jpg",
        "p23.jpg",
        "p24.jpg",
        "p25.jpg",
        "p26.jpg",
        "p27.jpg",
        "p28.jpg",
        "p29.jpeg",
        "p30.jpg"
    ],
  "new-york": [
    "newyork1.jpg",
    "newyork2.jpg",
    "newyork3.jpg"
  ]
};

// Define descriptions for each location
const descriptions = {
  japan: "Fall 2024 - Kodak Gold 200, Kodak ColorPlus 200, Fujifilm 400 - I spent two weeks in Japan travelling with friends between Osaka, Kyoto, and Tokyo. " +
      "Japan was one of the most life changing places I've ever been because I saw what life could be like " +
      "when everyone has a profound care for their fellow human. The culture here was remarkable, and the food " +
      "was absolutely incredible. I fell in love with the countryside, the bowing deer in Nara and the tea fields " +
      "in Uji where matcha was invented. From the city lights to the mountains and valleys, this land is a " +
      "movie scene in every frame.",
  savannah: "Spring 2024 - Fujifilm 400 - A film walk through the spanish moss lined Savannah streets.",
  "new-york": "Experience the energy and iconic landmarks of New York City in these images.",
  china: "Summer 2024 - iPhone 15 Pro Max - I spent almost a month in China for work. I travelled between many cities in eastern china" +
      " and was deeply moved by the ancient cities, tea ceremonies, and remarkable people. Come on a tour" +
      " with me of my experiences in the People's Republic.",
    motorcycles: "I started riding motorcycles when I was 18 and it has brought me coast to coast on some of my favorite adventures." +
        "The most therapeutic thing in the world for me is heading out with a full tank and nowhere to go, finding cool places " +
        "to take photos and stopping for some good food. \nThis is my first bike, which I named Buckbeak. A 1989 Yamaha Radian 600 " +
        "that I got for $900 and rebuilt over the years. Nothing can compare to that carberated inline 4 cylinder induction sound.",
    portraits: "Here are some portraits of friends over the years."
};

// Update the displayed photos and description
function showPhotos(location) {
  const photoGrid = document.querySelector(".photo-grid");
  const galleryDescription = document.getElementById("gallery-description");

  // Update description
  galleryDescription.textContent = descriptions[location];

  // Clear existing photos
  photoGrid.innerHTML = "";

  // Add photos from the predefined list
  photoData[location].forEach((photo) => {
    const imgElement = document.createElement("img");
    imgElement.src = `public/${location}/${photo}`;
    imgElement.alt = `${location} photo`;
    photoGrid.appendChild(imgElement);
  });
}

function showAbout() {
  const photoGrid = document.querySelector(".photo-grid");
  const galleryDescription = document.getElementById("gallery-description");

    // Clear existing photos
    photoGrid.innerHTML = "";
    galleryDescription.textContent = "";
    galleryDescription.margin = 0;

  // Add content for "About Me"
  photoGrid.innerHTML = `
    <div class="about-section">
    <p>Hello! My name is Tom.</p>
      <img src="public/about-me/portrait.jpeg" alt="About Me Portrait" class="about-photo">
      <p>I love to ride motorcycles, eat good food, and take pictures along the way.<br><br>
      I've shot on a Canon rebel t7 DSLR for years but recently have discovered a love for shooting on film.
      Something about the colors, the nostalgic feel, and just how soulful images look on film really speaks to me.
      In this process I've found a number of lessons can be extracted, something about delayed gratification and
      the impact of things that are finite. It changes photography into something much more deep, and much more thrilling.
      <br><br>I plan to shoot basically only film going forward, using my 1979 Canon A-1 I bought in Japan, with a 50mm prime 1.4 lense.</p>
      <img src="public/about-me/me.jpeg" alt="Gallery 1" class="about-photo">
      <p>I'm born and raised in the New York City area, but travel every chance I get since I work remote as a software engineer.</p>
      <img src="public/about-me/pointreyes.jpeg" alt="Gallery 2" class="about-photo">
      <p>Thank you for visiting my site. I hope these photos inspire you to explore the beauty around you!</p>
    </div>
  `;
}

function highlightTab(tabElement) {
    // Remove 'active' class from all tabs
    document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));

    // Add 'active' class to the clicked tab
    tabElement.classList.add('active');
}
