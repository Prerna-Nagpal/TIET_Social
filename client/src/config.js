let BASE_URL = "https://tiet-social-1.onrender.com";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/";
}

export { BASE_URL };
