import { jwtDecode } from "jwt-decode";
export const jwtDecoded = (token) => {
  const { email, role } = jwtDecode(token);
  return { email, role };
};
