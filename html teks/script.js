// Menambahkan interaktivitas pada node
document.querySelectorAll('.org-node').forEach(node => {
    node.addEventListener('click', function() {
        const role = this.querySelector('.role').innerText;
        const name = this.querySelector('.name').innerText;
        alert(`Role: ${role}\nName: ${name}`);
    });
});
