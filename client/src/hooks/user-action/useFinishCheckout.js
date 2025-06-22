import { useNavigate } from "react-router-dom";
import { reduceQtyCheckout } from "../../api/apiProducts";
import useCheckout from "./useCheckout";

export default function useFinishCheckout(handleCloseBag) {
  const { addedToBag, removeAllProducts } = useCheckout();
  const navigate = useNavigate();

  async function finishChekout() {
    if (addedToBag.length <= 0) {
      console.log("No prods");
      return;
    }

    try {
      const reducedProducts = addedToBag.reduce((acc, obj) => {
        let existing = acc.find((i) => i._id === obj._id);
        if (!existing) {
          existing = obj;
          acc.push(existing);
        }

        existing.sizes.forEach((size) => {
          if (size.size !== obj.size) {
            return;
          }
          const reduced = Number(size.amount) - Number(obj.quantity);
          if (reduced < 0) {
            //TODO eror that the qty is bigger
            return;
          }
          size.amount = reduced;
        });

        return acc;
      }, []);

      const promises = reducedProducts.map((prod) => {
        delete prod.quantity;
        delete prod.size;

        return reduceQtyCheckout(prod._id, prod);
      });
      await Promise.all(promises);

      handleCloseBag();
      navigate("/order-completion");
      removeAllProducts();
    } catch (error) {
      console.log(error);
    }
  }

  return { finishChekout };
}
