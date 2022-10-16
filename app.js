let price = 0;
let cartStorage = 0;
const addToCart = (para) => {
    cartStorage++;
    document.getElementById('totalProduct').innerText = cartStorage;
    price = price + para;
    const iniPrice = document.getElementById('price')
    iniPrice.innerText = price;

    const tax = parseFloat((price / 200).toFixed(2));
    document.getElementById('tax').innerText = tax;




    function getCharge(deliverCalculator) {
        let charge;
        if (deliverCalculator >= 0 && deliverCalculator <= 500) {
            charge = 0;
        }
        else if (deliverCalculator > 500 && deliverCalculator <= 800) {
            charge = 100;
        }
        else if (deliverCalculator > 800 && deliverCalculator <= 1000) {
            charge = 150;
        }
        else {
            charge = 200;
        }
        return charge;
    };
    const delivery = getCharge(price);


    // const delivery = cartStorage * 19
    document.getElementById('delivery').innerText = delivery

    const shipping = parseFloat((price * 0.001).toFixed(2));

    document.getElementById('shipping').innerText = shipping

    const grandTotal = Math.round(price + tax + delivery + shipping);

    document.getElementById('incTax').innerText = grandTotal;

}


// Toast:
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

//PopOver
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))