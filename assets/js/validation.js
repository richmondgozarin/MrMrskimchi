
let inputs = document.orderForm.querySelectorAll('input:not([type="submit"]),textarea')

function disableForm() {
    let isValid = false;

    inputs.forEach(element => {
        console.log('element.value', element.value)
        if (!element.value) {
            isValid = true;
        }
    });
    
    return isValid;

    
}

function checkValid() {
    console.log('fired', disableForm());
    document.orderForm.submit.disabled = disableForm();
}

console.log('inputs', inputs);
inputs.forEach(idx => {
    console.log('idx', idx);
    console.log('idx', idx.value);

    idx.addEventListener('change', checkValid);
    idx.addEventListener('keyup', checkValid);
})