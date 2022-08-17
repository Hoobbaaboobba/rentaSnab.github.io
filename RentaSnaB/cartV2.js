const liItem = document.querySelectorAll('label');
const imgItem = document.querySelectorAll('.service');

liItem.forEach(label => {
    label.onclick = function() {
        liItem.forEach(label => {
            label.className = "";
        })
        label.className = "active";
    }

    const value = label.textContent;
    imgItem.forEach(img => {
        img.style.display = 'none';
        if (img.getAttribute('data-filter') == value.toLocaleLowerCase() || value == "") {
            img.style.display = 'block';
        }
    })
})