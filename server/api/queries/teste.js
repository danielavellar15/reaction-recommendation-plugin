export default async function testeItem(context, { shopId }) {
  const { collections } = context;
  const { Packages } = collections;

  return Packages.findOne({
    name: "recommendation",
    shopId: shopId
  });
  
}