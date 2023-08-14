let delivery = "standard"
switch (delivery) {
    case "standard":
        console.log("it will take 3-4 days")
        break;
    case "express":
        console.log("it will take 1-2 days")
        break;
    case "overnight":
        console.log("it will be delivered next day")
        break;

    default:
        console.log("invalide")
        break;
}