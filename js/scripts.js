const PRODUCTS = {
    product_1: {
        id: "product_1",
        name: "Hpat Mask",
        description: "Affordable and functional paintball mask from Hpat.",
        price: 29.99,
        stars: 3,
        image: "Images/helmets/Mask_1.jpg"
    }, product_2: {
        id: "product_2",
        name: "Terminator Mask",
        description: "Paint the town red while looking like a futuristic death machine from the popular Terminator movie franchise.",
        price: 59.99,
        stars: 5,
        image: "Images/helmets/Mask_2.jpg"
    }, product_3: {
        id: "product_3",
        name: "Checkit Blaster SE",
        description: "A special editon version of Checkit's most popular paintball gun.",
        price: 179.99,
        stars: 5,
        image: "Images/guns/Gun_1.jpg"
    }, product_4: {
        id: "product_4",
        name: "Cronus Paint4 FDE",
        description: "A good budget paintball gun from Cronus with a field dark earth finish.",
        price: 99.99,
        stars: 4,
        image: "Images/guns/Gun_2.jpg"
    }, product_5: {
        id: "product_5",
        name: "Tippmann TipX FDE",
        description: "Entry level paintball gun from Tippmann, good for getting into the sport and comes with various acessories.",
        price: 59.99,
        stars: 3,
        image: "Images/guns/Gun_3.jpg"
    }, product_6: {
        id: "product_6",
        name: "SNP Black and Brown Paintball Armor",
        description: "Simple full upper body paintball armor made by us, this is the same type of armor that we rent out for guests playing on our field.",
        price: 44.99,
        stars: 5,
        image: "Images/apparel/Suit_1.jpg"
    }, product_7: {
        id: "product_7",
        name: "tld Chest Paintball Armor",
        description: "Simple torso-only paintball armor made by tld.",
        price: 29.99,
        stars: 4,
        image: "Images/apparel/Suit_2.jpg"
    }, product_8: {
        id: "product_8",
        name: "Dye Elbow Pads",
        description: "Great and affordable elbow pads made by Dye, a perfect match for torso-only paintball armor.",
        price: 29.99,
        stars: 5,
        image: "Images/apparel/Pads.jpg"
    }
};

$(document).ready(function () {
    showProducts();

});

function getProductHTML(productId) {

    const product = PRODUCTS[productId];

    const productHTML = $("#product-template");
    productHTML.prop("id", "");
    productHTML.removeClass('d-none');

    productHTML.find(".product-name").text(product.name);
    productHTML.find(".product-price").text(product.price);

    const imageE = productHTML.find(".card-img-top");
    imageE.prop("src", product.image);
    imageE.prop("alt", product.name);


    return productHTML;
}

function showProducts() {
    for (let product in PRODUCTS) {
        const productHTML = getProductHTML(product);

        $("#products").append(productHTML);
    }
}