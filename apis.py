from flask import Flask, request, jsonify
from flask_cors import CORS
from peft import PeftModel, PeftConfig
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
from googletrans import Translator
import PyPDF2
import docx

app = Flask(__name__)
CORS(app)

# Load the PEFT configuration
config = PeftConfig.from_pretrained("hammadali1805/legal_bart_large_cnn")

# Load the base BART model
base_model = AutoModelForSeq2SeqLM.from_pretrained("facebook/bart-large-cnn")

# Load the PEFT model
model = PeftModel.from_pretrained(base_model, "hammadali1805/legal_bart_large_cnn")

# Load the tokenizer
tokenizer = AutoTokenizer.from_pretrained("hammadali1805/legal_bart_large_cnn")

translator = Translator()

# Function to summarize text
def summarize(text, max_length=512, min_length=30, num_beams=2):
    input_ids = tokenizer.encode(text, return_tensors="pt", max_length=512, truncation=True)
    summary_ids = model.base_model.generate(input_ids, num_beams=num_beams, max_length=max_length, min_length=min_length, length_penalty=2.0, early_stopping=True)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary

@app.route('/summarizetext', methods=['POST'])
def summarize_text():
    data = request.json
    if 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400

    text = data['text']
    language = data['language']
    summary = summarize(text)
    translated_summary = translator.translate(summary, dest=language).text
    return jsonify({'summary': translated_summary})

@app.route('/summarisedoc', methods=['POST'])
def summarize_doc():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    language = request.form['language']
    if file.filename.endswith('.txt'):
        text = file.read().decode('utf-8')
    elif file.filename.endswith('.pdf'):
        reader = PyPDF2.PdfReader(file)
        text = ''.join([page.extract_text() for page in reader.pages])
    elif file.filename.endswith('.docx'):
        doc = docx.Document(file)
        text = '\n'.join([para.text for para in doc.paragraphs])
    else:
        return jsonify({'error': 'Unsupported file type'}), 400

    summary = summarize(text)
    translated_summary = translator.translate(summary, dest=language).text
    return jsonify({'summary': translated_summary})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)