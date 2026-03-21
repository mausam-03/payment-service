const prisma = require("../config/prismaClient");

class ProductDAO {
    async getProductById(tx, productId) {
    const client = tx || prisma;
    
    return client.product.findUnique({
      where: { id: productId }
    });
  }

 
  async getProductByCode(tx, code) {
    const client = tx || prisma;
    
    return client.product.findUnique({
      where: { code }
    });
  }

  
  async getActiveProducts(tx) {
    const client = tx || prisma;
    
    return client.product.findMany({
      where: { isActive: true }
    });
  }
}

module.exports = new ProductDAO();