(function() {
    function loadHTML(containerId, filePath) {
        const basePath = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');
        const fullUrl = `${basePath}/${filePath}?nocache=${Date.now()}`;

        fetch(fullUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar ${filePath}: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const container = document.getElementById(containerId);
                if (container) container.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
                if (filePath.includes("footer.html")) {
                    const container = document.getElementById(containerId);
                    if (container) {
                        container.innerHTML = `
                            <footer style="background:#061e64ff;color:white;padding:20px;text-align:center;">
                                <p>Disciplina: Gerência de Configuração (GC)</p>
                                <p>&copy; Todos os direitos reservados.</p>
                            </footer>
                        `;
                    }
                }
            });
    }

    window.loadHTML = loadHTML;
})();
