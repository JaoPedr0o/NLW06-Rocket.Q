import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modaldescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")


// Pegar quando o marcar quando lido for clicado
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    // Adicionar a escuta
    button.addEventListener("click", handleClick)
})

        

// Quando o botal delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    modalTitle.innerHTML = `${text} esta pergunta`
    modaldescription.innerHTML = `Tem certeza que voce deseja ${text.toLocaleLowerCase()} esta pergunta?`
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}







