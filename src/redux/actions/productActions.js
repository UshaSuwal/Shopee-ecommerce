export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_SINGLE_ITEM = 'FETCH_SINGLE_ITEM';

export const fetchproductRequest = (data) => ({
  type: FETCH_PRODUCT_REQUEST,
  payload: data
});

export const fetchsingleitem = (data) => {
  console.log("id in action",data); // Move console.log here if you want to log id
  return {
    type: FETCH_SINGLE_ITEM,
    payload: data
  };
};