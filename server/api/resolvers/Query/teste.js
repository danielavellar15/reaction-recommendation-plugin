export default async function testeItem(_, args, context) {

    const { shopId } = args;

    return context.queries.catalogItems(context, {
        shopId
    });
    
}