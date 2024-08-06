import { jwtDecode } from "jwt-decode";
export const jwtDecoded = (token) => {
  const { email, role, exp } = jwtDecode(token);
  return { email, role, exp };
};
