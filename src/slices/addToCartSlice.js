import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state , action) => {
    
      // console.log(state.value);
      // console.log(action.payload);
      // state.value.push(action.payload);

        let alldata =state.value.find(item=>item.PrdTitle===action.payload.PrdTitle)
        if(alldata){
          alldata.quantity+=1;
        }else{
           state.value.push({ ...action.payload, quantity: 1 });
        }
    },
   
    },
   
  },
)

// Action creators are generated for each case reducer function
export const { addtocart } = addToCartSlice.actions

export default addToCartSlice.reducer