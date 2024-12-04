const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/store/:store_name", (req: any, res: any) => {
    res.sendFile(path.join(__dirname, "public", "store.html"));
})

app.get("/api/store/:store_name", (req: any, res: any) => {
    const products = [
        {name: "LEGO 1 DAY", price: 1.99, image: "https://stf-downloads.s3.us-east-1.amazonaws.com/public/san-ka/images/1.jpg"},
        {name: "LEGO 7 DAY", price: 5.99, image: "https://stf-downloads.s3.us-east-1.amazonaws.com/public/san-ka/images/2.png"},
        {name: "LEGO 30 DAY", price: 15.99, image: "https://stf-downloads.s3.us-east-1.amazonaws.com/public/san-ka/images/3.png"},
        {name: "LEGO 60 DAY", price: 15.99, image: "https://stf-downloads.s3.us-east-1.amazonaws.com/public/san-ka/images/3.png"},
        {name: "LEGO 90 DAY", price: 15.99, image: "https://stf-downloads.s3.us-east-1.amazonaws.com/public/san-ka/images/avatars/lego.jpg"},
    ];

    res.send(products);
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});