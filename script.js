function generateLink() {
    const code    = document.getElementById('countryCode').value;
    const number  = document.getElementById('phoneNumber').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorEl = document.getElementById('errorMsg');

    if (!number || !/^\d+$/.test(number)) {
      errorEl.style.display = 'block';
      document.getElementById('output').classList.remove('visible');
      return;
    }
    errorEl.style.display = 'none';

    const encodedMessage = encodeURIComponent(message);
    const url = message
      ? `https://wa.me/${code}${number}?text=${encodedMessage}`
      : `https://wa.me/${code}${number}`;

    const linkEl = document.getElementById('generatedLink');
    linkEl.textContent = url;
    linkEl.href = url;

    const copyBtn = document.getElementById('copyBtn');
    copyBtn.textContent = 'Copy';
    copyBtn.classList.remove('copied');

    document.getElementById('output').classList.add('visible');
  }

  function copyLink() {
    const url = document.getElementById('generatedLink').textContent;
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('copyBtn');
      btn.textContent = 'Copied ✓';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  }

  function showDocs() {
    document.getElementById('generatorCard').style.display = 'none';
    document.getElementById('docsCard').classList.add('visible');
  }

  function showGenerator() {
    document.getElementById('docsCard').classList.remove('visible');
    document.getElementById('generatorCard').style.display = 'block';
  }

  document.getElementById('phoneNumber').addEventListener('keydown', e => {
    if (e.key === 'Enter') generateLink();
  });