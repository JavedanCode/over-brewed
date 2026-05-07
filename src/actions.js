export function handleInteraction(obj) {
  switch (obj.type) {
    case "cutting":
      console.log("Cutting ingredients...");
      break;
    case "crushing":
      console.log("Crushing ingredients...");
      break;
    case "cauldron":
      console.log("Brewing Potion...");
      break;
    case "cutting":
      console.log("Cutting ingredients...");
      break;
    case "ingredient":
      console.log("Picking up ingredient...");
      break;
    case "container":
      console.log("Picking up container...");
      break;
    case "oil-base":
      console.log("Using oil base...");
      break;
    case "water-base":
      console.log("Using water base...");
      break;
    case "wine-base":
      console.log("Using wine base...");
      break;
    case "bell":
      console.log("Delivering potion...");
      break;
    default:
      console.log("Unknown interaction");
  }
}
