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


function saveFolderName(folderName) {
    const name = folderName.value.trim() || "New Folder"

    const nameLabel = document.createElement("div");
    nameLabel.className = "folder-name"

    nameLabel.textContent = name;
    folderName.replaceWith(nameLabel)
}