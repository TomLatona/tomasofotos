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
      "china21.JPG",
      "china22.JPG",
      "china23.JPG",
      "china24.JPG",
      "china25.JPG",
      "china26.JPG",
      "china27.JPG",
      "china28.JPG",
      "china29.JPG",
      "china30.JPG",
      "china31.JPG",
      "china32.JPG",
      "china33.JPG",
      "china34.JPG",
      "china35.JPG"
  ],
    motorcycles: [
        "bb1.JPG",
        "bb2.jpg",
        "bb3.jpg",
        "bb4.JPG",
        "bb5.jpg",
        "bb6.jpg",
        "bb7.jpeg",
        "bb8.JPG",
        "bb9.jpg",
        "bb10.jpg",
        "bb11.JGP",
        "bb12.JPG"
    ],
    portraits: [
        "p1.JPG",
        "p2.jpg",
        "p3.JPG",
        "p4.jpg",
        "p5.JPG",
        "p6.jpeg",
        "p7.jpeg",
        "p8.JPG",
        "p9.JPG",
        "p10.JPG",
        "p11.JPG",
        "p12.JPG",
        "p13.JPG",
        "p14.JPG",
        "p15.JPG",
        "p16.JPG",
        "p17.JPG",
        "p18.JPG",
        "p19.JPG",
        "p20.JPG",
        "p21.JPG",
        "p22.jpg",
        "p23.jpg",
        "p24.JPG",
        "p25.JPG",
        "p26.JPG",
        "p27.JPG",
        "p28.JPG",
        "p29.jpeg",
        "p30.JPG"
    ],
    soundshore: [
        "s1.jpg",
        "s2.jpg",
        "s3.jpg",
        "s4.jpg",
        "s5.jpg",
        "s6.jpg",
        "s7.jpg",
        "s8.jpg",
        "s9.jpg",
        "s10.jpg",
        "s11.jpg",
        "s12.jpg",
        "s13.jpg",
        "s14.jpg",
        "s15.jpg"
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
    motorcycles: "When I was 18 years old I bought my first motorcycle. For $900 from a childhood friend I got my 1989 " +
        "Yamaha Radian 600, which I became obsessed with and rode every chance I got. Throughout college it became a weekly tradition " +
        "to go out with no plan at all, no maps, and just decide which way to turn randomly at each intersection. Each time " +
        "I would end up somewhere new, taking my time and finding all sorts of cool things off the beaten path. This became " +
        "a very therapeutic weekly reset for me. I would bring my DSLR and pull off somewhere, walk into the woods or along a river " +
        "and find little scenes to capture. It was just me, my music, my camera, and my bike. I honestly dont know how I would've gotten " +
        "through the grueling finals as a computer science major without it. \n \n The more I rode the more I found " +
        "things I could modify on the bike. I started with simple cosmetic things like paint and then doing very in depth work " +
        "almost to the point of rebuilding the whole motorcycle. I would attend bike nights in coney island and made so many great " +
        "friends who shared this passion. As the years went on and my skills grew, I've had the amazing fortune of riding some of " +
        "the best roads in the country and even the world. From the pacific coast highway in southern and northern california " +
        "to the tail of the dragon, I now know that the absolute best means for an adventure is in the saddle of a motorcycle. " +
        "Since then I've owned three, and am always itching to get back out on the road the next chance I get. \n \n" +
        "Here are some shots of my first bike from years ago taken during those cherished weekend adventures. \nMy old friend, Buckbeak.",
    portraits: "Here are some portraits of friends over the years.",
    soundshore: "Fall 2024 - Kodak gold - A chilly November walk through Greenwich point."
};

// Update the displayed photos and description
function showPhotos(location) {
  const photoGrid = document.querySelector(".photo-grid");
  const galleryDescription = document.getElementById("gallery-description");

  // Update description
  galleryDescription.textContent = descriptions[location];
  galleryDescription.innerHTML = descriptions[location].replace(/\n/g, "<br>");

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

document.addEventListener("DOMContentLoaded", () => {
  const photoGrid = document.querySelector(".photo-grid");
  const overlay = document.getElementById("photo-overlay");
  const enlargedPhoto = document.getElementById("enlarged-photo");
  const closeOverlayButton = document.getElementById("close-overlay");

  // Show overlay with enlarged photo
  photoGrid.addEventListener("dblclick", (event) => {
    if (event.target.tagName === "IMG") {
      const photoSrc = event.target.src;

      // Set the enlarged photo's source
      enlargedPhoto.src = photoSrc;

      // Show the overlay
      overlay.style.display = "flex";
    }
  });

  // Close overlay when clicking "X"
  closeOverlayButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  // Close overlay when clicking outside the image
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  });
});