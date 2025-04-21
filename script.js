let currentFile = null;
const fileList = document.getElementById('fileList');
const codeEditor = document.getElementById('codeEditor');
const previewFrame = document.getElementById('preview');

document.getElementById('newFolderButton').addEventListener('click', function() {
    const folderName = prompt("Nom du nouveau dossier :");
    if (folderName) {
        const folderItem = document.createElement('li');
        folderItem.textContent = folderName;
        folderItem.classList.add('folder');
        fileList.appendChild(folderItem);
    }
});

document.getElementById('newFileButton').addEventListener('click', function() {
    const fileName = prompt("Nom du fichier (ex: index.html) :");
    if (fileName) {
        const fileItem = document.createElement('li');
        fileItem.textContent = fileName;
        fileItem.classList.add('file');
        fileItem.addEventListener('click', function() {
            currentFile = fileName;
            codeEditor.value = ""; // Réinitialiser l'éditeur
            // Charger le contenu du fichier si nécessaire
        });
        fileList.appendChild(fileItem);
    }
});

document.getElementById('publishButton').addEventListener('click', function() {
    if (currentFile) {
        alert(`Le fichier ${currentFile} a été publié ! (Simulation)`);
        // Ici, tu pourrais ajouter une logique pour publier le fichier sur un serveur
    } else {
        alert("Veuillez sélectionner un fichier à publier.");
    }
});

document.getElementById('codeEditor').addEventListener('input', function() {
    const code = codeEditor.value;
    previewFrame.contentDocument.open();
    previewFrame.contentDocument.write(code);
    previewFrame.contentDocument.close();
});