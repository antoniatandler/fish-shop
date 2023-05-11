import Product from "../../../db/models/Product";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  const { backendId } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(backendId);
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(product);
    return;
  }
}
