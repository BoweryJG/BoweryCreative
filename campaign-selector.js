// Bowery Creative Campaign Selector - Convert Visitors to Clients
(function() {
    // Campaign packages data
    const campaigns = [
        {
            id: 'starter',
            name: 'AI Starter Package',
            price: '$15,000',
            features: [
                'Custom Website (No Templates)',
                'AI Chatbot Integration',
                'Basic Analytics Dashboard',
                '3 Months Support'
            ],
            color: '#3b82f6',
            popular: false
        },
        {
            id: 'growth',
            name: 'Practice Growth System',
            price: '$45,000',
            features: [
                'Custom CRM System',
                'AI Phone Transcription',
                'Automated Patient Booking',
                'Sentiment Analysis',
                'Custom Website',
                '6 Months Support'
            ],
            color: '#10b981',
            popular: true
        },
        {
            id: 'enterprise',
            name: 'Enterprise AI Infrastructure',
            price: '$125,000+',
            features: [
                'Complete Custom CRM',
                'AI Phone System with Analytics',
                'Patient Simulators',
                'Automated Marketing Campaigns',
                'Custom Integrations',
                'Dedicated Support Team'
            ],
            color: '#8b5cf6',
            popular: false
        }
    ];

    // Insert campaign selector into page
    function insertCampaignSelector() {
        const selectorHTML = `
            <section id="campaign-selector" style="
                padding: 80px 20px;
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                position: relative;
                overflow: hidden;
            ">
                <!-- Background effects -->
                <div style="
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
                    animation: rotate 60s linear infinite;
                "></div>

                <div style="
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                ">
                    <!-- Header -->
                    <div style="text-align: center; margin-bottom: 60px;">
                        <h2 style="
                            font-size: 3rem;
                            font-weight: 700;
                            color: white;
                            margin-bottom: 20px;
                            letter-spacing: -0.025em;
                        ">Start Transforming Your Practice Today</h2>
                        <p style="
                            font-size: 1.25rem;
                            color: rgba(255, 255, 255, 0.8);
                            max-width: 600px;
                            margin: 0 auto;
                        ">Choose your AI-powered growth package. No templates. No compromises. Just results.</p>
                    </div>

                    <!-- Campaign Cards -->
                    <div style="
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                        gap: 30px;
                        margin-bottom: 40px;
                    ">
                        ${campaigns.map(campaign => `
                            <div class="campaign-card" style="
                                background: rgba(255, 255, 255, 0.05);
                                backdrop-filter: blur(10px);
                                border: 1px solid rgba(255, 255, 255, 0.1);
                                border-radius: 16px;
                                padding: 40px 30px;
                                position: relative;
                                transition: all 0.3s ease;
                                cursor: pointer;
                                ${campaign.popular ? 'transform: scale(1.05); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);' : ''}
                            " 
                            onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 20px 40px rgba(0, 0, 0, 0.3)';"
                            onmouseout="this.style.transform='${campaign.popular ? 'scale(1.05)' : 'scale(1)}'; this.style.boxShadow='${campaign.popular ? '0 20px 40px rgba(0, 0, 0, 0.3)' : 'none'}';"
                            onclick="startOnboarding('${campaign.id}')">
                                ${campaign.popular ? `
                                    <div style="
                                        position: absolute;
                                        top: -15px;
                                        left: 50%;
                                        transform: translateX(-50%);
                                        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                                        color: #000;
                                        padding: 8px 24px;
                                        border-radius: 20px;
                                        font-weight: 600;
                                        font-size: 0.875rem;
                                    ">MOST POPULAR</div>
                                ` : ''}
                                
                                <h3 style="
                                    color: white;
                                    font-size: 1.75rem;
                                    margin-bottom: 10px;
                                    font-weight: 600;
                                ">${campaign.name}</h3>
                                
                                <div style="
                                    font-size: 2.5rem;
                                    font-weight: 700;
                                    color: ${campaign.color};
                                    margin-bottom: 30px;
                                ">${campaign.price}</div>
                                
                                <ul style="
                                    list-style: none;
                                    padding: 0;
                                    margin: 0 0 30px 0;
                                ">
                                    ${campaign.features.map(feature => `
                                        <li style="
                                            color: rgba(255, 255, 255, 0.9);
                                            padding: 10px 0;
                                            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                                            display: flex;
                                            align-items: center;
                                        ">
                                            <span style="color: ${campaign.color}; margin-right: 10px;">✓</span>
                                            ${feature}
                                        </li>
                                    `).join('')}
                                </ul>
                                
                                <button style="
                                    width: 100%;
                                    padding: 16px;
                                    background: linear-gradient(135deg, ${campaign.color} 0%, ${campaign.color}dd 100%);
                                    color: white;
                                    border: none;
                                    border-radius: 8px;
                                    font-weight: 600;
                                    font-size: 1rem;
                                    cursor: pointer;
                                    transition: all 0.3s ease;
                                " 
                                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 10px 20px rgba(0, 0, 0, 0.2)';"
                                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                                    Start Now →
                                </button>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Quick contact -->
                    <div style="
                        text-align: center;
                        padding-top: 40px;
                        border-top: 1px solid rgba(255, 255, 255, 0.1);
                    ">
                        <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 20px;">
                            Need a custom solution? Let's talk.
                        </p>
                        <button onclick="window.toggleBoweryChat && window.toggleBoweryChat()" style="
                            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                            color: #000;
                            padding: 16px 32px;
                            border: none;
                            border-radius: 8px;
                            font-weight: 600;
                            font-size: 1rem;
                            cursor: pointer;
                            margin: 0 10px;
                            transition: all 0.3s ease;
                        ">
                            💬 Chat with AI Assistant
                        </button>
                        <a href="tel:8454090692" style="
                            background: rgba(255, 255, 255, 0.1);
                            color: white;
                            padding: 16px 32px;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            border-radius: 8px;
                            font-weight: 600;
                            font-size: 1rem;
                            text-decoration: none;
                            display: inline-block;
                            margin: 0 10px;
                            transition: all 0.3s ease;
                        ">
                            📞 (845) 409-0692
                        </a>
                    </div>
                </div>
            </section>
        `;

        // Find a good place to insert it (after hero section or first section)
        const targetElement = document.querySelector('#services') || 
                            document.querySelector('.services') || 
                            document.querySelector('main') || 
                            document.body;
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = selectorHTML;
        
        if (targetElement.tagName === 'BODY') {
            targetElement.appendChild(tempDiv.firstElementChild);
        } else {
            targetElement.insertAdjacentElement('afterend', tempDiv.firstElementChild);
        }
    }

    // Start onboarding function
    window.startOnboarding = function(packageId) {
        const campaign = campaigns.find(c => c.id === packageId);
        
        // Show immediate feedback
        alert(`Great choice! Starting your ${campaign.name} setup...\n\nNext steps:\n1. We'll collect your practice details\n2. Customize your AI solutions\n3. Get you up and running in days!`);
        
        // In production, this would:
        // 1. Open an onboarding modal
        // 2. Or redirect to dashboard with package selected
        // 3. Or trigger the chatbot with context
        
        // For now, open chatbot with context
        if (window.toggleBoweryChat) {
            window.toggleBoweryChat();
            setTimeout(() => {
                const input = document.getElementById('bowery-chat-input');
                if (input) {
                    input.value = `I'm interested in the ${campaign.name} at ${campaign.price}`;
                    window.sendBoweryMessage();
                }
            }, 500);
        }
    };

    // Add rotation animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertCampaignSelector);
    } else {
        insertCampaignSelector();
    }
})();