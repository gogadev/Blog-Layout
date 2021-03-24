import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "27bkpsbz",
  dataset: "production",
  useCdn: true,
});
