import { getOrCreateUser } from "./get-or-create";

/** Credits collateral to a user. Creates in-memory user if not yet present. */
export default function CreateOnRamp({
  userId,
  price,
}: {
  userId: string;
  price: number;
}) {
  const existingUser = getOrCreateUser(userId);
  existingUser.collateral.available += price;
  return {
    status: "success",
    message: "user balance updated",
  };
}
