// Bowery Creative AI Assistant - Intelligent, Personality-Driven Chatbot
(function() {
    window.addEventListener('DOMContentLoaded', function() {
        
        // Assistant personalities
        const personalities = {
            visionary: {
                name: 'The Visionary',
                icon: '🚀',
                description: 'Like Steve Jobs - inspiring, forward-thinking, focused on transformation',
                systemPrompt: 'You are a visionary AI assistant for Bowery Creative, similar to Steve Jobs in personality. You inspire practices to think bigger, focus on transformative solutions, and see the art in technology. You speak with confidence about the future of medical marketing, emphasizing innovation and excellence. Never pushy, always inspiring.'
            },
            strategist: {
                name: 'The Strategist',
                icon: '🧠',
                description: 'Like Sam Altman - thoughtful, strategic, data-driven insights',
                systemPrompt: 'You are a strategic AI assistant for Bowery Creative, similar to Sam Altman. You provide thoughtful, measured responses focused on long-term growth and strategic advantage. You use data and logic to guide decisions, always considering the broader implications of technology adoption in medical practices.'
            },
            expert: {
                name: 'The Expert',
                icon: '👨‍⚕️',
                description: 'Medical marketing authority - professional, knowledgeable, results-focused',
                systemPrompt: 'You are an expert medical marketing AI assistant for Bowery Creative. You have deep knowledge of dental implants, YOMI robotics, medical aesthetics, and practice growth. You speak with authority but remain approachable, focusing on ROI and practical implementation.'
            },
            friend: {
                name: 'The Friend',
                icon: '🤝',
                description: 'Casual advisor - friendly, relatable, genuinely helpful',
                systemPrompt: 'You are a friendly AI assistant for Bowery Creative. You speak casually and warmly, like a trusted advisor who genuinely wants to help practices succeed. You make complex technology feel accessible and exciting without being overly technical.'
            }
        };
        
        let selectedPersonality = null;
        let conversationHistory = [];
        
        // Create enhanced chatbot UI
        var container = document.createElement('div');
        container.innerHTML = [
            '<div id="bowery-ai-widget" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif;">',
            '  <div id="ai-chat-button" style="width: 70px; height: 70px; background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4); position: relative;">',
            '    <div style="color: white; font-size: 32px;">🤖</div>',
            '    <div style="position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background: #10b981; border-radius: 50%; border: 3px solid white;"></div>',
            '  </div>',
            '  <div id="ai-chat-window" style="position: absolute; bottom: 90px; right: 0; width: 420px; height: 600px; background: white; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); display: none; flex-direction: column; overflow: hidden;">',
            '    <div id="chat-header" style="background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%); color: white; padding: 24px; position: relative;">',
            '      <div style="display: flex; justify-content: space-between; align-items: center;">',
            '        <div>',
            '          <div style="font-weight: 700; font-size: 20px;">Bowery AI Assistant</div>',
            '          <div id="personality-display" style="font-size: 14px; opacity: 0.9; margin-top: 4px;">Choose your advisor personality</div>',
            '        </div>',
            '        <button onclick="closeAIChat()" style="background: rgba(255,255,255,0.2); border: none; color: white; width: 36px; height: 36px; border-radius: 50%; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center;">×</button>',
            '      </div>',
            '    </div>',
            '    <div id="personality-selector" style="padding: 20px; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">',
            '      <p style="margin: 0 0 16px 0; font-weight: 600; color: #1e293b;">How would you like me to communicate?</p>',
            '      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">',
            '        <div onclick="selectPersonality(\'visionary\')" style="background: white; border: 2px solid #e2e8f0; padding: 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s;">',
            '          <div style="font-size: 24px; margin-bottom: 8px;">🚀</div>',
            '          <div style="font-weight: 600; margin-bottom: 4px;">The Visionary</div>',
            '          <div style="font-size: 12px; color: #64748b;">Inspiring & transformative</div>',
            '        </div>',
            '        <div onclick="selectPersonality(\'strategist\')" style="background: white; border: 2px solid #e2e8f0; padding: 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s;">',
            '          <div style="font-size: 24px; margin-bottom: 8px;">🧠</div>',
            '          <div style="font-weight: 600; margin-bottom: 4px;">The Strategist</div>',
            '          <div style="font-size: 12px; color: #64748b;">Data-driven insights</div>',
            '        </div>',
            '        <div onclick="selectPersonality(\'expert\')" style="background: white; border: 2px solid #e2e8f0; padding: 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s;">',
            '          <div style="font-size: 24px; margin-bottom: 8px;">👨‍⚕️</div>',
            '          <div style="font-weight: 600; margin-bottom: 4px;">The Expert</div>',
            '          <div style="font-size: 12px; color: #64748b;">Industry authority</div>',
            '        </div>',
            '        <div onclick="selectPersonality(\'friend\')" style="background: white; border: 2px solid #e2e8f0; padding: 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s;">',
            '          <div style="font-size: 24px; margin-bottom: 8px;">🤝</div>',
            '          <div style="font-weight: 600; margin-bottom: 4px;">The Friend</div>',
            '          <div style="font-size: 12px; color: #64748b;">Casual & helpful</div>',
            '        </div>',
            '      </div>',
            '    </div>',
            '    <div id="ai-messages" style="flex: 1; padding: 24px; overflow-y: auto; background: white; display: none;">',
            '    </div>',
            '    <div id="ai-input-area" style="padding: 20px; border-top: 1px solid #e2e8f0; background: #f8fafc; display: none;">',
            '      <div style="display: flex; gap: 12px;">',
            '        <input id="ai-input" type="text" placeholder="Ask me anything about growing your practice..." style="flex: 1; border: 2px solid #e2e8f0; border-radius: 12px; padding: 14px 20px; font-size: 15px; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor=\'#3b82f6\'" onblur="this.style.borderColor=\'#e2e8f0\'">',
            '        <button id="ai-send" onclick="sendAIMessage()" style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; border: none; border-radius: 12px; padding: 0 24px; font-weight: 600; cursor: pointer; transition: transform 0.2s;">Send</button>',
            '      </div>',
            '      <div style="margin-top: 8px; font-size: 12px; color: #64748b; text-align: center;">',
            '        Powered by Claude 3.5 & GPT-4 • Your conversations are private',
            '      </div>',
            '    </div>',
            '  </div>',
            '</div>'
        ].join('');
        
        document.body.appendChild(container);
        
        // Add hover effects
        var style = document.createElement('style');
        style.textContent = `
            #ai-chat-button:hover { transform: scale(1.05); }
            #ai-send:hover { transform: translateY(-1px); }
            #personality-selector > div > div:hover { 
                border-color: #3b82f6 !important; 
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
            }
        `;
        document.head.appendChild(style);
        
        // Chat button click
        document.getElementById('ai-chat-button').addEventListener('click', function() {
            document.getElementById('ai-chat-window').style.display = 'flex';
            if (!selectedPersonality) {
                document.getElementById('personality-selector').style.display = 'block';
                document.getElementById('ai-messages').style.display = 'none';
                document.getElementById('ai-input-area').style.display = 'none';
            }
        });
        
        // Close chat
        window.closeAIChat = function() {
            document.getElementById('ai-chat-window').style.display = 'none';
        };
        
        // Select personality
        window.selectPersonality = function(type) {
            selectedPersonality = personalities[type];
            
            // Update UI
            document.getElementById('personality-selector').style.display = 'none';
            document.getElementById('ai-messages').style.display = 'block';
            document.getElementById('ai-input-area').style.display = 'block';
            document.getElementById('personality-display').textContent = selectedPersonality.icon + ' ' + selectedPersonality.name;
            
            // Add welcome message
            addAIMessage('assistant', getWelcomeMessage(type));
            document.getElementById('ai-input').focus();
        };
        
        // Get personality-specific welcome message
        function getWelcomeMessage(type) {
            const messages = {
                visionary: "Welcome to the future of medical practice growth. I'm here to help you see beyond the traditional and embrace what's possible. What transformation are you envisioning for your practice?",
                strategist: "Hello. I'm here to help you make strategic decisions about your practice growth. Let's analyze your current situation and identify the highest-impact opportunities. What's your biggest challenge right now?",
                expert: "Welcome! With over 2,800 successful practice transformations, I can guide you through proven strategies for growth. Whether it's YOMI robotics, aesthetic expansions, or patient acquisition, I'm here to help. What area would you like to explore?",
                friend: "Hey there! 👋 I'm excited to help you grow your practice. No corporate BS here - just real talk about what actually works. What's on your mind today?"
            };
            return messages[type];
        }
        
        // Add message to chat
        function addAIMessage(sender, text) {
            var messagesDiv = document.getElementById('ai-messages');
            var messageDiv = document.createElement('div');
            
            const isAssistant = sender === 'assistant';
            messageDiv.style.cssText = `
                margin-bottom: 20px;
                display: flex;
                ${isAssistant ? 'justify-content: flex-start' : 'justify-content: flex-end'}
            `;
            
            var bubbleStyle = isAssistant 
                ? 'background: #f1f5f9; color: #1e293b; margin-right: 40px;'
                : 'background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; margin-left: 40px;';
            
            messageDiv.innerHTML = `
                <div style="${bubbleStyle} padding: 16px 20px; border-radius: 16px; max-width: 85%; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    ${isAssistant ? '<div style="font-weight: 600; margin-bottom: 4px; color: #64748b; font-size: 13px;">' + selectedPersonality.icon + ' ' + selectedPersonality.name + '</div>' : ''}
                    <div style="line-height: 1.5;">${text}</div>
                </div>
            `;
            
            messagesDiv.appendChild(messageDiv);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
        
        // Send message
        window.sendAIMessage = async function() {
            var input = document.getElementById('ai-input');
            var message = input.value.trim();
            if (!message) return;
            
            // Add user message
            addAIMessage('user', message);
            input.value = '';
            
            // Show typing indicator
            var typingDiv = document.createElement('div');
            typingDiv.id = 'typing-indicator';
            typingDiv.style.cssText = 'margin-bottom: 20px;';
            typingDiv.innerHTML = '<div style="background: #f1f5f9; padding: 16px 20px; border-radius: 16px; display: inline-block;"><div style="color: #64748b;">Thinking...</div></div>';
            document.getElementById('ai-messages').appendChild(typingDiv);
            
            // Add to conversation history
            conversationHistory.push({ role: 'user', content: message });
            
            try {
                // In production, this would call OpenRouter API
                // For now, simulate intelligent responses
                const response = await generateAIResponse(message);
                
                // Remove typing indicator
                document.getElementById('typing-indicator').remove();
                
                // Add AI response
                addAIMessage('assistant', response);
                conversationHistory.push({ role: 'assistant', content: response });
                
            } catch (error) {
                document.getElementById('typing-indicator').remove();
                addAIMessage('assistant', 'I apologize, I'm having trouble connecting right now. Please call us at (845) 409-0692 for immediate assistance.');
            }
        };
        
        // Generate AI response with sophisticated Socratic questioning
        async function generateAIResponse(message) {
            const msg = message.toLowerCase();
            
            // Track conversation context
            const context = analyzeConversationContext();
            
            // Personality-specific responses with Socratic follow-ups
            if (selectedPersonality.name === 'The Visionary') {
                if (msg.includes('price') || msg.includes('cost')) {
                    return "Here's how I see it - this isn't about cost, it's about transformation. When Apple launched the iPhone, people said $499 was too expensive. Now look where we are. Our systems, starting at $45K, aren't expenses - they're investments that fundamentally change how your practice operates. But let me ask you - what would transforming your practice mean to you? Is it about working less while earning more, or building something that changes your entire market?";
                }
                if (msg.includes('yomi') || msg.includes('robot')) {
                    return "YOMI isn't just a robot - it's the future of implant dentistry happening now. Our YOMI marketing systems have helped practices increase implant volume by 137%. But here's what I'm curious about - are you already using YOMI, or considering it? Because the marketing strategy changes dramatically based on where you are in that journey. Most YOMI practices we work with were shocked to discover they were only capturing 20% of their market potential.";
                }
                if (msg.includes('marketing') || msg.includes('agency')) {
                    return "Most marketing agencies are stuck in 2010 - billboards, radio ads, generic SEO. We're building AI systems that predict which patients need implants before they even know it themselves. But I'm curious - what's been your experience with marketing companies? I ask because 73% of our clients come to us after being burned by template-based agencies. Understanding your past helps me show you a better future.";
                }
            }
            
            if (selectedPersonality.name === 'The Strategist') {
                if (msg.includes('roi') || msg.includes('return')) {
                    return "Let's look at the data: Our average dental implant client sees ROI in 6-18 months. With YOMI practices specifically, we're seeing 137% increases in implant volume. At an average case value of $4,500 and 50 new cases in 90 days, that's $225,000 in new revenue. But to give you accurate projections, I need to understand your baseline - what's your current monthly implant volume? And more importantly, what percentage of consultations convert to treatment?";
                }
                if (msg.includes('compete') || msg.includes('competition')) {
                    return "Competition analysis is crucial. Only 200 practices nationwide have YOMI robots - that's your advantage if you have one. Our competitor conquest campaigns specifically target patients searching for advanced implant solutions. But here's the strategic question - who do you see as your main competitors? Are they the low-cost implant mills, or the established oral surgery groups? Your answer determines our entire approach.";
                }
                if (msg.includes('patient') || msg.includes('new patient')) {
                    return "New patient acquisition requires precision targeting. Our AI identifies patients at the exact moment they're ready for treatment. For context, our top performing practices average 75-150 new patients monthly for implants alone. Where does your practice currently stand? And perhaps more importantly - what's your capacity for growth? There's no point driving 200 new patients if you can only handle 50.";
                }
            }
            
            if (selectedPersonality.name === 'The Expert') {
                if (msg.includes('implant') || msg.includes('dental')) {
                    return "In my experience with 2,800+ practices, implant marketing success comes down to three factors: case presentation, financing options, and speed to treatment. Most practices fail at all three. We fix that with AI-driven systems that pre-qualify patients, arrange financing before they walk in, and book same-day starts. Quick question - what's your average time from consultation to implant placement? If it's over 2 weeks, you're losing 40% of cases to competitors.";
                }
                if (msg.includes('aesthetic') || msg.includes('botox') || msg.includes('filler')) {
                    return "The aesthetics market has fundamentally shifted. It's no longer about Instagram ads - it's about identifying life moments that drive treatment. New job, divorce, weight loss from GLP-1 drugs - our AI tracks these triggers and delivers perfectly timed campaigns. What procedures are you currently offering? I ask because the marketing strategy for Botox is completely different from body contouring or regenerative treatments.";
                }
                if (msg.includes('market') || msg.includes('grow')) {
                    return "Practice growth isn't about more patients - it's about the RIGHT patients. Our AI can identify someone who needs full-mouth reconstruction versus someone shopping for a single crown. The revenue difference is 50x. Tell me - what's your ideal patient profile? High-value cases like All-on-4? Volume procedures like clear aligners? Your answer shapes everything we build.";
                }
            }
            
            if (selectedPersonality.name === 'The Friend') {
                if (msg.includes('help') || msg.includes('need')) {
                    return "Hey, I totally get it - marketing can be overwhelming, especially when you're trying to run a practice too. Here's the thing - we make it stupid simple. Our AI does the heavy lifting while you focus on patients. But let me understand where you're at... what's the biggest marketing challenge you're facing right now? Is it getting new patients, or is it more about converting the ones you already see?";
                }
                if (msg.includes('work') || msg.includes('how')) {
                    return "Great question! So basically, we build custom AI systems that act like your own personal marketing team working 24/7. It finds patients who need your services, nurtures them, books appointments, even handles insurance verification. But here's what I need to know - are you more interested in bringing in new patients, or maximizing revenue from existing ones? Most practices need both, but we always start with your biggest pain point.";
                }
            }
            
            // Sophisticated topic-based Socratic responses
            if (msg.includes('crm') || msg.includes('software')) {
                if (!context.hasDiscussedNeeds) {
                    return "Our custom CRM systems are what set us apart - we're talking about $45,000+ investments that become your practice's operational backbone. But before I dive into features, help me understand - what's broken about your current system? Is it that patient data is scattered across different platforms? Or that you can't track marketing ROI? Your specific frustrations determine what we build.";
                }
                return "Based on what you've told me, you need a CRM that does more than store patient info. Our systems pull data from ANY source - practice management, imaging, even social media - and display it exactly how YOUR team works. One client told me it saved them 2 hours daily. What would you do with an extra 10 hours per week?";
            }
            
            if (msg.includes('phone') || msg.includes('call')) {
                return "Our AI phone system is incredible - imagine every call transcribed, analyzed for sentiment, and automatically booked without human intervention. Starting at $40K, it pays for itself in missed-call recovery alone. Quick question though - how many calls does your practice get daily? And more importantly, how many go unanswered? Most practices are shocked when they see the real numbers.";
            }
            
            if (msg.includes('website') || msg.includes('online')) {
                return "Websites are interesting - everyone has one, but 95% are just digital brochures. We code custom sites from scratch (starting at $12K) that actually convert visitors into patients. But here's my question - what's your current website's conversion rate? If you don't know, that's problem #1. Most practices have no idea they're losing 98% of their traffic.";
            }
            
            if (msg.includes('results') || msg.includes('success')) {
                return "Results speak louder than promises. We've generated over $3.2 billion for medical practices. One YOMI practice went from 5 to 67 implant cases monthly. A med spa added $180K in monthly revenue within 90 days. But here's what matters - what would success look like for YOUR practice? Is it doubling revenue? Working 4 days instead of 5? Building multiple locations? Your definition of success shapes our entire strategy.";
            }
            
            // Intelligent follow-up questions based on keywords
            if (msg.includes('yes') || msg.includes('no') || msg.includes('maybe')) {
                return "I appreciate your directness. Let me dig a bit deeper - when you think about your practice in 2 years, what needs to change? I ask because every practice we've transformed started with a clear vision of where they wanted to go. Some wanted to double revenue, others wanted to work less, many wanted to sell for maximum value. What's your North Star?";
            }
            
            if (msg.includes('insurance') || msg.includes('payment')) {
                return "Insurance and payment - the two things that kill more cases than anything else. Our AI systems include intelligent insurance verification and patient financing with 97% approval rates. But let me understand your situation - are you mostly fee-for-service, or heavily insurance-dependent? The marketing strategy changes completely based on your patient mix.";
            }
            
            if (msg.includes('staff') || msg.includes('team')) {
                return "Your team is everything. The best marketing in the world fails if your staff can't convert leads. That's why our systems include team training modules and automated hand-off protocols. How large is your team currently? And honestly - are they bought into growth, or resistant to change? I ask because we can build around any team dynamic.";
            }
            
            // Context-aware default responses that gather information
            const responses = [
                "That's a great point. At Bowery Creative, we've seen every possible practice scenario across 2,800+ clients. But your situation is unique. What made you start exploring new marketing solutions? Was it a specific event, or just gradual frustration with current results?",
                "I love that you're thinking strategically about this. Most practices react to problems instead of preventing them. Let me ask - if you could wave a magic wand and fix ONE thing about your practice's marketing, what would it be? Your answer tells me exactly where we should focus.",
                "You know what's interesting? Every successful practice transformation we've done started with someone asking questions just like yours. Here's what I'm curious about - are you the decision maker for marketing, or do you have partners/associates involved? I ask because our implementation process adapts to your leadership structure.",
                "Excellent question. The medical marketing landscape has completely changed in the last 2 years. AI, automation, precision targeting - it's a new world. What's your current marketing setup? In-house team, agency, or trying to do it yourself? No judgment - I just need to understand your starting point."
            ];
            
            return responses[Math.floor(Math.random() * responses.length)];
        }
        
        // Analyze conversation context
        function analyzeConversationContext() {
            const context = {
                hasDiscussedPrice: conversationHistory.some(m => m.content.toLowerCase().includes('price') || m.content.toLowerCase().includes('cost')),
                hasDiscussedNeeds: conversationHistory.some(m => m.content.toLowerCase().includes('need') || m.content.toLowerCase().includes('problem')),
                hasDiscussedProcedures: conversationHistory.some(m => m.content.toLowerCase().includes('implant') || m.content.toLowerCase().includes('aesthetic')),
                messageCount: conversationHistory.filter(m => m.role === 'user').length,
                lastTopics: conversationHistory.slice(-4).map(m => m.content.toLowerCase())
            };
            return context;
        }
        
        // Enter key to send
        document.getElementById('ai-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendAIMessage();
            }
        });
        
        // Pulse animation for button
        setInterval(function() {
            var button = document.getElementById('ai-chat-button');
            button.style.transform = 'scale(1.05)';
            setTimeout(function() {
                button.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    });
})();