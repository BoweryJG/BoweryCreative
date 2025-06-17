// Bowery Creative Simple Chatbot
(function() {
    window.addEventListener('load', function() {
        // Create chatbot button
        var chatDiv = document.createElement('div');
        chatDiv.id = 'bowery-chatbot';
        chatDiv.style.position = 'fixed';
        chatDiv.style.bottom = '20px';
        chatDiv.style.right = '20px';
        chatDiv.style.zIndex = '9999';
        
        var chatBtn = document.createElement('button');
        chatBtn.style.width = '60px';
        chatBtn.style.height = '60px';
        chatBtn.style.borderRadius = '50%';
        chatBtn.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';
        chatBtn.style.color = 'white';
        chatBtn.style.border = 'none';
        chatBtn.style.cursor = 'pointer';
        chatBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        chatBtn.style.fontSize = '28px';
        chatBtn.innerHTML = '💬';
        
        chatBtn.onclick = function() {
            alert('Welcome to Bowery Creative! Call us at (845) 409-0692 to discuss your AI marketing needs.');
        };
        
        chatDiv.appendChild(chatBtn);
        document.body.appendChild(chatDiv);
    });
})();