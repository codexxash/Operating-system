

const box = document.querySelector('.dragbox')
const view = document.getElementById('desktop')
const menuBar = document.querySelector('.menuBar')
const newFolder = document.querySelector('.new')

const body = document.body
let offsetX = 0
let offsetY = 0


// box.addEventListener('pointerdown', (e) => {
//     offsetX = e.clientX - box.getBoundingClientRect().left;
//     offsetY = e.clientY - box.getBoundingClientRect().top;
//     box.setPointerCapture(e.pointerId);
//     console.log(e)
// });



// box.addEventListener('pointermove', (e) => {
//     if (e.pressure === 0) return;
//     box.style.left = `${e.clientX - offsetX}px`
//     box.style.top = `${e.clientY - offsetY}px`


// });

view.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    menuBar.style.top = `${e.clientY}px`
    menuBar.style.left = `${e.clientX}px`
    menuBar.style.display = "flex"


})





view.addEventListener('click', () => {
    menuBar.style.display = "none"

})







newFolder.addEventListener('click', () => {

    const folderName = document.createElement('input');
    folderName.type = "text"
    folderName.className = "folderName"
    folderName.value = ""
    folderName.placeholder = "New Folder"
    const folderArea = document.createElement('div');
    const folder = document.createElement('div');

    const hoverText = document.createElement("div");
    hoverText.className = ".hover-text"
    hoverText.textContent = ' Date created: 6/30/2025 2:05PM  Empty folder'
    hoverText.style.cssText =
        `   
    position: absolute;
    display: none;
    padding: .1rem .5rem;
    background: #ffffff;
    font-size: #000;
    font-weight: 100;
    cursor: default;
    width: 230px;
    z-index: 1;
    transition: all 1s ease-in-out;
    `;


    folder.appendChild(hoverText)

    folder.addEventListener('mouseenter', (e) => {
        hoverText.style.display = "block"
         hoverText.style.top = `${e.clientY}px`
    hoverText.style.left = `${e.clientX}px`

    })
    folder.addEventListener('mouseleave', () => {
        hoverText.style.display = "none"

    })


    // if (!folderName) return;
    folderArea.className = "folderArea";
    folder.className = "folder";
    view.appendChild(folderArea)
    folderArea.appendChild(folder)
    folder.appendChild(folderName)
    folderName.focus();
    folderName.select();


    folderName.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            saveFolderName(folderName)
        }
    })

    const handleClickOutside = (e) => {
        if (!folder.contains(e.target)) {
            saveFolderName(folderName)


            document.removeEventListener('click', handleClickOutside);
        }
    }

    setTimeout(() => {
        document.addEventListener('click', handleClickOutside)
    }, 0)



});



// this is the function for save the folder name......

function saveFolderName(folderName) {
    const nameLabel = document.createElement("div");
    nameLabel.className = "folder-name"


    const name = folderName.value.trim() || "New Folder"


    nameLabel.textContent = name;

    nameLabel.addEventListener('click', () => {
        enableRename(nameLabel)
    })

    folderName.replaceWith(nameLabel)




}


// function for raname the folder......

function enableRename(nameLabel) {
    const currentName = nameLabel.textContent;

    const renameInput = document.createElement('input');
    renameInput.className = "folderName"
    renameInput.type = "text"
    renameInput.value = currentName

    nameLabel.replaceWith(renameInput)
    renameInput.focus()
    renameInput.select()

    renameInput.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            saveFolderName(renameInput)
        }
    });
    const handleClickOutside = (e) => {
        if (!renameInput.parentElement.contains(e.target)) {
            saveFolderName(renameInput)


            document.removeEventListener('click', handleClickOutside);
        }
    }

}