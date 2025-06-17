// Bowery Creative AI Chatbot Widget
(function() {
    // Widget HTML
    const widgetHTML = `
        <div id="bowery-chatbot-widget" style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        ">
            <!-- Chat Button -->
            <div id="bowery-chat-button" style="
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                transition: all 0.3s ease;
                color: white;
                font-size: 28px;
            ">
                💬
            </div>

            <!-- Chat Window -->
            <div id="bowery-chat-window" style="
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 380px;
                height: 550px;
                background: #fff;
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.15);
                display: none;
                flex-direction: column;
                border: 1px solid #e0e0e0;
                overflow: hidden;
            ">
                <!-- Header -->
                <div style="
                    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                    color: white;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                ">
                    <div>
                        <div style="font-weight: 600; font-size: 18px;">Bowery AI Assistant</div>
                        <div style="font-size: 13px; opacity: 0.9;">🟢 Online • Ready to help</div>
                    </div>
                    <button onclick="window.toggleBoweryChat()" style="
                        background: none;
                        border: none;
                        color: white;
                        font-size: 24px;
                        cursor: pointer;
                        padding: 4px;
                    ">×</button>
                </div>

                <!-- Messages -->
                <div id="bowery-chat-messages" style="
                    flex: 1;
                    padding: 20px;
                    overflow-y: auto;
                    background: #f8fafc;
                ">
                    <div style="
                        margin-bottom: 16px;
                        display: flex;
                        align-items: flex-start;
                    ">
                        <div style="
                            background: white;
                            color: #333;
                            padding: 12px 16px;
                            border-radius: 18px;
                            max-width: 80%;
                            font-size: 14px;
                            line-height: 1.5;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        ">
                            👋 Welcome to Bowery Creative! I'm your AI assistant. How can I help you transform your practice with our AI-first solutions?
                        </div>
                    </div>
                </div>

                <!-- Input -->
                <div style="
                    padding: 20px;
                    border-top: 1px solid #e0e0e0;
                    background: white;
                ">
                    <div style="display: flex; gap: 10px;">
                        <input 
                            id="bowery-chat-input" 
                            type="text" 
                            placeholder="Ask about our services..."
                            style="
                                flex: 1;
                                border: 1px solid #ddd;
                                border-radius: 24px;
                                padding: 12px 20px;
                                outline: none;
                                font-size: 14px;
                            "
                            onkeypress="if(event.key === 'Enter') window.sendBoweryMessage()"
                        >
                        <button onclick="window.sendBoweryMessage()" style="
                            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                            color: white;
                            border: none;
                            border-radius: 50%;
                            width: 44px;
                            height: 44px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 18px;
                        ">→</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Initialize widget
    function initWidget() {
        const div = document.createElement('div');
        div.innerHTML = widgetHTML;
        document.body.appendChild(div);
    }

    // Toggle chat
    window.toggleBoweryChat = function() {
        const chatWindow = document.getElementById('bowery-chat-window');
        const chatButton = document.getElementById('bowery-chat-button');
        const isOpen = chatWindow.style.display === 'flex';
        
        chatWindow.style.display = isOpen ? 'none' : 'flex';
        chatButton.innerHTML = isOpen ? '💬' : '×';
        
        if (!isOpen) {
            document.getElementById('bowery-chat-input').focus();
        }
    };

    // Send message
    window.sendBoweryMessage = function() {
        const input = document.getElementById('bowery-chat-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        input.value = '';
        
        // Bot response based on keywords
        setTimeout(() => {
            let response = "I'd be happy to help! Could you tell me more about what you're looking for?";
            
            const lowerMessage = message.toLowerCase();
            if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
                response = "Our custom solutions start at $15,000 for basic packages and go up to $200,000+ for enterprise AI infrastructure. Would you like to discuss a specific service?";
            } else if (lowerMessage.includes('crm')) {
                response = "Our custom CRM systems are our flagship offering! We build CRMs that pull data from anywhere and display it exactly how you need. Starting at $45,000 for a fully custom solution.";
            } else if (lowerMessage.includes('ai') || lowerMessage.includes('chatbot')) {
                response = "We're the first AI-first agency for medical practices! Our AI solutions include chatbots, phone transcription, sentiment analysis, and more. What specific AI capability interests you?";
            } else if (lowerMessage.includes('phone')) {
                response = "Our AI phone system includes automatic transcription, sentiment analysis, and automated booking. It's a game-changer for practices! Starting at $40,000.";
            } else if (lowerMessage.includes('website')) {
                response = "We build custom websites with no templates - everything is coded from scratch. Starting at $12,000 for a professional practice website.";
            } else if (lowerMessage.includes('contact') || lowerMessage.includes('call')) {
                response = "You can reach us at (845) 409-0692 or email support@bowerycreativeagency.com. Would you like to schedule a consultation?";
            }
            
            addMessage(response, 'bot');
        }, 1000);
    };

    // Add message to chat
    function addMessage(text, sender) {
        const messagesContainer = document.getElementById('bowery-chat-messages');
        const messageDiv = document.createElement('div');
        
        const isUser = sender === 'user';
        messageDiv.style.cssText = `
            margin-bottom: 16px;
            display: flex;
            justify-content: ${isUser ? 'flex-end' : 'flex-start'};
        `;
        
        messageDiv.innerHTML = `
            <div style="
                background: ${isUser ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' : 'white'};
                color: ${isUser ? 'white' : '#333'};
                padding: 12px 16px;
                border-radius: 18px;
                max-width: 80%;
                font-size: 14px;
                line-height: 1.5;
                word-wrap: break-word;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            ">
                ${text}
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();