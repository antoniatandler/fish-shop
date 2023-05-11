import Product from "../../../db/models/Product";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById("626a48a8916f633a190f0251");
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(product);
    return;
  }
}
