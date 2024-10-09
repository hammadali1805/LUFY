document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const textInput = document.getElementById('text-input').value;
    const fileInput = document.getElementById('file-input').files[0];
    const language = document.getElementById('languageSelect').value;
    const checkbox = document.getElementById('toggle').checked;
    let endpoint = '';
    let options = {};

    if (fileInput) {
        endpoint = 'http://127.0.0.1:5000/summarisedoc';
        const formData = new FormData();
        formData.append('file', fileInput);
        formData.append('language', language);
        formData.append('checkbox',checkbox);
        options = {
            method: 'POST',
            body: formData
        };
    } else if (textInput) {
        endpoint = 'http://127.0.0.1:5000/summarizetext';
        const data = { text: textInput, language: language };
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
    } else {
        alert('Please enter text or upload a file.');
        return;
    }

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('processing-container').style.display = 'block';

    fetch(endpoint, options)
    .then(response => response.json())
    .then(data => {
        document.getElementById('processing-container').style.display = 'none';
        document.getElementById('response-container').style.display = 'block';
        document.getElementById('response-text').innerText = data.summary;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Submission failed!');
        document.getElementById('processing-container').style.display = 'none';
        document.getElementById('form-container').style.display = 'block';
    });
});

function goBack() {
    if (document.getElementById('response-container').style.display === 'none'){
        window.location.replace('index.html');
    }else{
        document.getElementById('response-container').style.display = 'none';
        document.getElementById('form-container').style.display = 'block';
        document.getElementById('upload-form').reset();
        document.getElementById('text-input').value = '';
    }

}

function askQuery() {
    window.location.replace('query.html');
}