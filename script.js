document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const table = document.getElementById('projects-table');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const projectName = cells[0].innerText.toLowerCase();
        if (projectName.includes(searchInput)) {
            rows[i].classList.add('highlight');
            rows[i].scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Highlight the search term within the project name
            const originalText = cells[0].innerText;
            const regex = new RegExp(`(${searchInput})`, 'gi');
            const highlightedText = originalText.replace(regex, '<span class="highlight-text">$1</span>');
            cells[0].innerHTML = highlightedText;
        } else {
            rows[i].classList.remove('highlight');
            cells[0].innerHTML = cells[0].innerText; // Reset the content
        }
    }
});


// Função para abrir o menu lateral
document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
});

// Função para fechar o menu lateral
document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
});


