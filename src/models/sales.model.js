const connection = require('../connection');

const postSale = async (sales) => {
  const timeStamp = new Date();
  const query1 = 'INSERT INTO StoreManager.sales (date) VALUES (?);';
  const [sale] = await connection.execute(query1, [timeStamp]);

  const { insertId: id } = sale;
  const savingSales = sales.map(({ productId, quantity }) => {
    const halquery = 'INSERT INTO StoreManager.sales_products';
    const otherHalfQuery = '(sale_id, product_id, quantity) VALUES (?,?,?);';
    const query2 = `${halquery} ${otherHalfQuery}`;
    return connection.execute(query2, [id, productId, quantity]);
  });

  Promise.all(savingSales);

  return { id, itemsSold: sales };
};

const getAllSales = async () => {
  const query1 = 'SELECT sp.sale_id AS "saleId", sp.product_id AS "productId", sp.quantity, s.date';
  const query2 = 'FROM StoreManager.sales_products AS sp LEFT JOIN StoreManager.sales AS s';
  const query3 = 'ON sp.sale_id = s.id ORDER BY sale_id, product_id';
  const query = `${query1} ${query2} ${query3}`;
  const [allSales] = await connection.execute(query);
  return allSales;
};

const getSaleById = async (id) => {
  const query1 = 'SELECT sp.product_id AS "productId", sp.quantity, s.date';
  const query2 = 'FROM StoreManager.sales_products AS sp LEFT JOIN StoreManager.sales AS s';
  const query3 = 'ON sp.sale_id = s.id WHERE sp.sale_id = ? ORDER BY sale_id, product_id;';
  const query = `${query1} ${query2} ${query3}`;
  const [saleById] = await connection.execute(query, [id]);
  saleById.map((productSale) => {
    const productSaleCopy = { ...productSale };
    delete productSaleCopy.sale_id;
    return productSaleCopy;
  });
  return saleById;
};

module.exports = {
  postSale,
  getAllSales,
  getSaleById,
};