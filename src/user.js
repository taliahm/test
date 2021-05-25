import { getUser } from "./auth";

export function allowEdit() {
  const user = getUser();
  if (!user) {
    return false;
  }
  return user.isAdmin;
}
