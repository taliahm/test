import { allowEdit } from "./user";
import { getUser } from "./auth";

jest.mock('./auth', () => ({
    getUser: jest.fn()
}))

test("admins can edit", () => {
  // somehow create an admin user?
  getUser.mockReturnValueOnce({ isAdmin: true });
  expect(allowEdit()).toBe(true);
});

test("regular users cannot edit", () => {
  // somehow create a regular user?
  getUser.mockReturnValueOnce({ isAdmin: false });
  expect(allowEdit()).toBe(false);
});