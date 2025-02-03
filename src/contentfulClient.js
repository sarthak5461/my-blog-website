import { createClient } from "contentful";

const contentfulClient = createClient({
  space: "tmq3vziluwpx", // Replace with your Contentful Space ID
  accessToken: "YnbxqH0s253XA1rRixA0fajQ91TmBkEirGQIjCD779Y", // Replace with your Contentful Access Token
});

export default contentfulClient;