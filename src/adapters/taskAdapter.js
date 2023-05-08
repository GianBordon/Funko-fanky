export const createTaskAdapterFromFirestore = (doc) => {
    const fields = doc.data();

    const taskAdapter = {
        id: doc.id,
        category: fields.category,
        description: fields.description,
        img: fields.img,
        name: fields.name,
        price: fields.price,
        stock: fields.stock,
    };
    return fields;
};