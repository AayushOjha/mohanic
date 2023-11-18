import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CDN_KEY || "",
    host: "cdn.contentful.com",
  });

  const getJokes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "bhilwaraJokes",
        select: ["fields"],
      });

      return entries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getJokes };
};

export default useContentful;
