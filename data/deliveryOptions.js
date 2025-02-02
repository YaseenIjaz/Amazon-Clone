import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [
    {
        id : '1',
        deliveryDays : 7,
        price : 0
    },
    {
        id : '2',
        deliveryDays : 3,
        price : 100
    },
    {
        id : '3',
        deliveryDays : 1,
        price : 300
    }
]

export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if(deliveryOptionId === option.id){
            deliveryOption = option;
        }
    })
    return deliveryOption
}
export function calculateDeliveryDate(deliveryOption) {
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );
  
    return dateString; 
}