// Bowery Creative AI Chatbot Widget
(function() {
    // Create and add chatbot button
    const chatbotHTML = '<div id="bowery-chatbot" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;"><button id="bowery-chat-btn" style="width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; border: none; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.3); font-size: 28px;">💬</button></div>';
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Add click handler
    document.getElementById('bowery-chat-btn').addEventListener('click', function() {
        alert('Chat feature coming soon\! For now, call us at (845) 409-0692 or check out our packages below.');
        
        // Scroll to campaign selector if it exists
        const campaignSection = document.getElementById('campaign-selector');
        if (campaignSection) {
            campaignSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
})();
EOF < /dev/null