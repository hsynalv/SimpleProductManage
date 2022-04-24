export const updateTradeResult = (state, argument) => {
    if(argument.count){
        state.purchase += parseFloat(argument.purchase) * parseInt(argument.count);
        state.sale += parseFloat(argument.sale) * parseInt(argument.count);
    }else{
        state.purchase += parseFloat(argument.purchase);
        state.sale += parseFloat(argument.sale);
    }
    state.balance = parseFloat(state.sale) - parseInt(state.purchase);
}