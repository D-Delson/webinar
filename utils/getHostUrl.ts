export const getHostAPIUrl = () => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === "production")
    return "https://turais.in";
  else if (process.env.NEXT_PUBLIC_NODE_ENV === "development")
    return "http://localhost:8000/";

  return "http://localhost:8000/";
};
