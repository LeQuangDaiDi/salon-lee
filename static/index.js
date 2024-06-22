// JavaScript code for language button
document.getElementById('languageBtn').addEventListener('click', function() {
    // Toggle between Vietnamese and English
    if (this.innerText === 'Tiếng Việt / English') {
        this.innerText = 'English / Tiếng Việt';
    } else {
        this.innerText = 'Tiếng Việt / English';
    }
    console.log('Language button clicked');
});
