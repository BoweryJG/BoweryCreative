// Bowery Creative Chatbot - WORKING VERSION
window.addEventListener('DOMContentLoaded', function() {
    // Create chatbot container
    var container = document.createElement('div');
    container.innerHTML = [
        '<div id="bowery-chat-widget" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: Arial, sans-serif;">',
        '  <div id="chat-button" style="width: 60px; height: 60px; background: #1e293b; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.3); color: white; font-size: 28px;">',
        '    💬',
        '  </div>',
        '  <div id="chat-window" style="position: absolute; bottom: 80px; right: 0; width: 350px; height: 500px; background: white; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.15); display: none; flex-direction: column; border: 1px solid #e0e0e0;">',
        '    <div style="background: #3b82f6; color: white; padding: 20px; border-radius: 12px 12px 0 0;">',
        '      <div style="display: flex; justify-content: space-between; align-items: center;">',
        '        <div>',
        '          <div style="font-weight: 600; font-size: 18px;">Bowery AI Assistant</div>',
        '          <div style="font-size: 13px; opacity: 0.9;">Ready to help</div>',
        '        </div>',
        '        <button id="close-chat" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">×</button>',
        '      </div>',
        '    </div>',
        '    <div id="chat-messages" style="flex: 1; padding: 20px; overflow-y: auto; background: #f8fafc;">',
        '      <div style="background: white; padding: 12px 16px; border-radius: 18px; margin-bottom: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">',
        '        Welcome! I can help you learn about our AI marketing solutions for medical practices. What would you like to know?',
        '      </div>',
        '    </div>',
        '    <div style="padding: 20px; border-top: 1px solid #e0e0e0;">',
        '      <div style="display: flex; gap: 10px;">',
        '        <input id="chat-input" type="text" placeholder="Type your message..." style="flex: 1; border: 1px solid #ddd; border-radius: 24px; padding: 12px 20px; outline: none;">',
        '        <button id="send-btn" style="background: #3b82f6; color: white; border: none; border-radius: 50%; width: 44px; height: 44px; cursor: pointer;">→</button>',
        '      </div>',
        '    </div>',
        '  </div>',
        '</div>'
    ].join('');
    
    document.body.appendChild(container);
    
    // Get elements
    var chatButton = document.getElementById('chat-button');
    var chatWindow = document.getElementById('chat-window');
    var closeChat = document.getElementById('close-chat');
    var chatInput = document.getElementById('chat-input');
    var sendBtn = document.getElementById('send-btn');
    var messagesDiv = document.getElementById('chat-messages');
    
    // Toggle chat
    chatButton.addEventListener('click', function() {
        chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
        if (chatWindow.style.display === 'flex') {
            chatInput.focus();
        }
    });
    
    closeChat.addEventListener('click', function() {
        chatWindow.style.display = 'none';
    });
    
    // Send message
    function sendMessage() {
        var message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        var userMsg = document.createElement('div');
        userMsg.style.cssText = 'background: #3b82f6; color: white; padding: 12px 16px; border-radius: 18px; margin-bottom: 10px; margin-left: auto; max-width: 80%; text-align: right;';
        userMsg.textContent = message;
        messagesDiv.appendChild(userMsg);
        
        // Clear input
        chatInput.value = '';
        
        // Bot response
        setTimeout(function() {
            var botMsg = document.createElement('div');
            botMsg.style.cssText = 'background: white; padding: 12px 16px; border-radius: 18px; margin-bottom: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); max-width: 80%;';
            
            // Simple responses based on keywords
            var response = 'I can help you with that! ';
            var msg = message.toLowerCase();
            
            if (msg.includes('price') || msg.includes('cost')) {
                response = 'Our packages start at $15,000 for basic AI integration and go up to $125,000+ for enterprise solutions. Would you like details on a specific package?';
            } else if (msg.includes('crm')) {
                response = 'Our custom CRM systems are our flagship offering! Starting at $45,000, we build CRMs that pull data from anywhere and display it exactly how you need.';
            } else if (msg.includes('phone')) {
                response = 'Our AI phone system includes automatic transcription, sentiment analysis, and automated booking. Starting at $40,000 for a complete system.';
            } else if (msg.includes('website')) {
                response = 'We build custom websites with NO templates - everything coded from scratch. Starting at $12,000 for a professional practice website.';
            } else if (msg.includes('contact')) {
                response = 'You can reach us at (845) 409-0692 or email support@bowerycreativeagency.com. Would you like to schedule a consultation?';
            } else {
                response += 'You can reach us at (845) 409-0692 to discuss your specific needs.';
            }
            
            botMsg.textContent = response;
            messagesDiv.appendChild(botMsg);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);
        
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
});