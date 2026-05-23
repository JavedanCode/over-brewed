import recipe1 from "../assets/items/recipes1.png";
import recipe2 from "../assets/items/recipes2.png";
import recipe3 from "../assets/items/recipes3.png";

const images = [];

const img1 = new Image();
img1.src = recipe1;

const img2 = new Image();
img2.src = recipe2;

const img3 = new Image();
img3.src = recipe3;

images.push(img1);
images.push(img2);
images.push(img3);

export default images;
