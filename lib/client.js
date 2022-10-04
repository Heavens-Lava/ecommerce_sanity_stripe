import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "fejnhdz8",
  dataset: "production",
  apiVersion: "2022-10-01",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// use the sanity images
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
