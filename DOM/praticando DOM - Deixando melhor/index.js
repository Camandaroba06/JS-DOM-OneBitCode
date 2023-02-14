let salvos = {
    Nomes: [],
    Numeros: [],
    Enderecos: []
}

function addContact(salvos) {
    const btn = document.getElementById('btn');
    if (btn.textContent === "Novo Contato") {
        const section = document.getElementById('forms')

        const titulo = document.createElement('h3');
        titulo.innerText = "Preencha o Contato"
        const nomeLabel = document.createElement('label')
        const numeroLabel = document.createElement('label')
        const enderecoLabel = document.createElement('label')

        nomeLabel.innerText = "Nome: "
        numeroLabel.innerText = "Número: "
        enderecoLabel.innerText = "Endereço: "

        const nomeInput = document.createElement('input')
        nomeInput.id = "nomeInp"
        nomeInput.placeholder = "Digite Um Nome"
        const numeroInput = document.createElement('input')
        numeroInput.id = "numInp"
        numeroInput.placeholder = "Digite o Número de Telefone"
        const enderecoInput = document.createElement('input')
        enderecoInput.id = "endeInp"
        enderecoInput.placeholder = "Digite seu Endereço"

        nomeLabel.appendChild(nomeInput)
        numeroLabel.appendChild(numeroInput)
        enderecoLabel.appendChild(enderecoInput)

        const nomeli = document.createElement('li')
        const numeroli = document.createElement('li')
        const enderecoli = document.createElement('li')
        const ul = document.createElement('ul')
        ul.id = 'formulario'
        nomeli.appendChild(nomeLabel)
        numeroli.appendChild(numeroLabel)
        enderecoli.appendChild(enderecoLabel)
        nomeli.id = "formularioLi"
        numeroli.id = "formularioLi"
        enderecoli.id = "formularioLi"
        ul.appendChild(nomeli)
        ul.appendChild(numeroli)
        ul.appendChild(enderecoli)
        section.appendChild(document.createElement('hr'))
        section.appendChild(titulo)
        section.appendChild(ul)


        btn.innerText = "Add na Lista"
    }
    else if (btn.textContent === "Add na Lista") {
        console.log(salvos)


        let nomeSalvar = (document.getElementById("nomeInp").value)
        let numSalvar = (document.getElementById("numInp").value)
        let endSalvar = (document.getElementById("endeInp").value)
        salvos.Nomes.push(nomeSalvar)
        salvos.Numeros.push(numSalvar)
        salvos.Enderecos.push(endSalvar)
        const sectionContatos = document.getElementById('contacts-list')
        const ul = document.createElement('ul')

        for (let i = 0; i < salvos.Nomes.length; i++) {

            let itemAddNomeLi = document.createElement('li')
            let itemAddNumLi = document.createElement('li')
            let itemAddEndLi = document.createElement('li')

            let itemAddNome = document.createTextNode(salvos.Nomes[i])
            let itemAddNum = document.createTextNode(salvos.Numeros[i])
            let itemAddEnd = document.createTextNode(salvos.Enderecos[i])

            itemAddNomeLi.appendChild(itemAddNome)
            itemAddNumLi.appendChild(itemAddNum)
            itemAddEndLi.appendChild(itemAddEnd)


            ul.appendChild(itemAddNomeLi)
            ul.appendChild(itemAddNumLi)
            ul.appendChild(itemAddEndLi)


        }
        sectionContatos.replaceChildren(ul)
        document.getElementById('nomeInp').value = ''
        document.getElementById('numInp').value = ''
        document.getElementById('endeInp').value = ''
    }
}