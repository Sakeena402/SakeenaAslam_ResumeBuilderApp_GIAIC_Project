// Function to load dialogs HTML into the main document
async function loadDialogs() {
    const response = await fetch('dialogs.html');
    const dialogHtml = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(dialogHtml, 'text/html');
    const dialogsContainer = document.createElement('div');
    dialogsContainer.innerHTML = doc.body.innerHTML;
    document.body.appendChild(dialogsContainer);
}
// Load dialogs when the page loads
window.onload = function () {
    loadDialogs();
};
export {};
