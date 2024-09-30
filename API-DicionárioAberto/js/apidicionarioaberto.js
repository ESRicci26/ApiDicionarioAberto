document.getElementById('buscar').addEventListener('click', async function() {
    const palavra = document.getElementById('palavra').value.trim();
    const resultadoArea = document.getElementById('resultado');

    if (palavra === '') {
        resultadoArea.value = 'Por favor, insira uma palavra.';
        return;
    }

    const url = `https://api.dicionario-aberto.net/word/${palavra}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.length > 0) {
            const significados = data.map(item => item.xml).join('\n\n');
            resultadoArea.value = `Significados para "${palavra}":\n\n${significados}`;
        } else {
            resultadoArea.value = `Nenhum significado encontrado para "${palavra}".`;
        }
    } catch (error) {
        resultadoArea.value = `Erro ao buscar o significado da palavra "${palavra}". Tente novamente mais tarde.`;
        console.error('Erro:', error);
    }
});

