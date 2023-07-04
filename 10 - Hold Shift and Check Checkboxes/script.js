const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // Check if they had the shift key down
    // AND it's being checked in
    let inBetween = false 
    if (e.shiftKey && this.checked) {
        // Loop over checkboxes
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
            }
            
            // If in between start checking in intermediates
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))