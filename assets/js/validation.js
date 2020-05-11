
let inputs = document.orderForm.querySelectorAll('input:not([type="submit"]),textarea')

function disableForm() {
    let isValid = false;

    inputs.forEach(element => {
        if (!element.value) {
            isValid = true;
        }
    });
    
    return isValid;

    
}

function checkValid() {
    document.orderForm.submit.disabled = disableForm();
}

inputs.forEach(idx => {
    idx.addEventListener('change', checkValid);
    idx.addEventListener('keyup', checkValid);
})