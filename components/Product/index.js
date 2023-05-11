import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { frontendId } = router.query;
  console.log(router.query);

  const { data: product, isLoading } = useSWR(`/api/products/${frontendId}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return "error";
  }

  return (
    <ProductCard>
      <div>
        <h2>{product.name}</h2>
        <p>Description: {product.description}</p>
        <p>
          Price: {product.price} {product.currency}
        </p>

        <StyledLink href="/">Back to all</StyledLink>
      </div>
    </ProductCard>
  );
}
