export const sellerList = [
  {id: 0, discount: 0, text: 'Я (для себя)'},
  {id: 1, discount: 0, text: 'Я (для себя со скидкой)'},
  {id: 2, discount: 0, text: 'Я (клиенту)'},
  {id: 3, discount: 0, text: 'Моя команда от Start-Up (0%)'},
  {id: 4, discount: 15, text: 'Моя команда от Promouter (15%)'},
  {id: 5, discount: 30, text: 'Моя команда от Adviser (30%)'},
  {id: 6, discount: 35, text: 'Моя команда от Superviser (35%)'},
  {id: 7, discount: 38, text: 'Моя команда от Ass. Coordinator (38%)'},
  {id: 8, discount: 43, text: 'Моя команда от Coordinator (43%)'},
];

export const priceList = [
  {id: 0, text: 'Olife (1 бут.)', price: 2050, be: 0.117},
  {id: 1, text: 'Набор Start-Up', price: 7790, be: 0.5, discount: 0},
  {id: 2, text: 'Набор Promouter', price: 15790, be: 1,discount: 15},
  {id: 3, text: 'Набор Adviser', price: 27390, be: 2, discount: 30},
];

export const statusList = [
  {id: -1, text: 'Клиент', level: -1, forNext: 0, nextID: 0},
  {id: 0, text: 'Start-Up (0%)', level: 0, forNext: 1, nextID: 15},
  {id: 15, text: 'Promouter (15%)', level: 1, forNext: 2, nextID: 30},
  {id: 30, text: 'Adviser (30%)', level: 2, forNext: 10, nextID: 35},
  {id: 35, text: 'Superviser (35%)', level: 10, forNext: 25, nextID: 38},
  {id: 38, text: 'Ass. Coordinator (38%)', level: 25, forNext: 75, nextID: 43},
  {id: 43, text: 'Coordinator (43%)', level: 75, forNext: 125, nextID: 48},
];