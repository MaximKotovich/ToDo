export const token = sessionStorage.getItem("token");
export const config = {
  headers: { Authorization: `Bearer ${token}` },
};