const img = document.querySelectorAll('.size_img')
const janela = document.querySelector('.janela')
const janela_img = document.querySelector('#img_janela')
const btn = document.querySelector('#btn_close')
// A variável 'endere' não precisa ser global, pode ser local
// let endere = "" <-- Removida

for(let i=0 ; i < img.length ; i++){
    img[i].addEventListener('click', () => {
        // Pegando os atributos da imagem clicada
        const endere = img[i].getAttribute("src")
        const altText = img[i].getAttribute("alt")

        // Aplicando os atributos na imagem do modal
        janela_img.setAttribute('src', endere)
        janela_img.setAttribute('alt', altText)
        
        // Ativando o modal
        janela.classList.toggle('janela_ativa')
    })
}

// Listener do botão de fechar (com a linha descomentada)
btn.addEventListener('click', () => {
    janela.classList.toggle('janela_ativa')
})