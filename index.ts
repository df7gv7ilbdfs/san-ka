import express, {Request, Response} from "express";

const app = express();

interface Product {
    name: string;
    price: number;
    image: string;
}

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/store/:store_name", (req: Request, res: Response) => {
    if ("store_name" in req.params) {
        let store_name = req.params["store_name"];

        const products: Product[] = [
            {name: "LEGO 1 DAY", price: 1.99, image: "/images/1.jpg"},
            {name: "LEGO 7 DAY", price: 5.99, image: "/images/2.png"},
            {name: "LEGO 30 DAY", price: 15.99, image: "/images/3.png"},
        ];

        res.render("store", {store_name: store_name, products: products});
    }
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});