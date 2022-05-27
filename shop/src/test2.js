const item = [
  { id: 1, title: 'test', count: 1 },
  { id: 2, title: 'test', count: 1 },
  { id: 3, title: 'test', count: 1 },
];

const id = 2;

const newItem2 = item.map((product, index) => {
  if (product.id === id) {
    return {
      //   id: product.id,
      //   title: product.title,
      ...product,
      count: product.count + 1,
    };
  }
  return product;
});

console.log(newItem2);

const deleteId = 2;

const newItem = item.filter((product, index) => {
  return product.id !== deleteId;
});

console.log(newItem);
console.log(item);

const t = { a: 1 };
const testObject = {
  ...t, // a:1
  a: 2, // a:2 , 2로 덮어쓴다.
};

// const nextItem = [{ id: 1, title: 'test' }];
// const payload = { id: 1, title: 'test' };

// item.push(payload);

// const newItem = [...item, payload];

// const state = { item: [] };
// const nextState = { ...state, item: newItem };
// {item:[],newItem:[payload]}
