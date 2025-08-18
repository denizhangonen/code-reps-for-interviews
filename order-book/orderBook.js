class OrderBook {
  constructor() {
    this.orders = [];
  }
  addOrder(orderObj) {
    this.orders.push(orderObj);
  }
  getOrders(type) {
    return this.orders.filter((o) => o.type === type);
  }
  getOrder(id) {
    return this.orders.find((o) => o.id === id) || null;
  }
  cancelOrder(id) {
    const beforeCancelCount = this.orders.length;
    this.orders = this.orders.filter((o) => o.id !== id);
    return this.orders.length < beforeCancelCount;
  }
}

module.exports = { OrderBook };

