import { USERS } from "../store/exchange-store";

export default function CreateOnRamp({
  userId,
  price,
}: {
  userId: string;
  price: number;
}) {
  const existingUser = USERS.get(userId);
  if (!existingUser) {
    throw new Error("user not found");
  }

  existingUser.collateral.available += price;
  return {
    status: "success",
    message: "user balance updated",
  };
}
