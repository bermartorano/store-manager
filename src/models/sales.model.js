const connection = require('../connection');

const postSale = async (sales) => {
  const timeStamp = new Date();
  const query1 = 'INSERT INTO StoreManager.sales (date) VALUES (?);';
  const [sale] = await connection.execute(query1, [timeStamp]);

  const { insertId: id } = sale;
  sales.forEach(async ({ productId, quantity }) => {
    const halquery = 'INSERT INTO StoreManager.sales_products';
    const otherHalfQuery = '(sale_id, product_id, quantity) VALUES (?,?,?);';
    const query2 = `${halquery} ${otherHalfQuery}`;
    
    // const query2 = 'INSERT INTO StoreManager.sales_products\
    //   (sale_id, product_id, quantity) VALUES (?,?,?);';
    await connection.execute(query2, [id, productId, quantity]);
  });

  return { id, itemSold: sales };
};

module.exports = {
  postSale,
};