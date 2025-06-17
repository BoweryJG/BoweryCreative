// Bowery Creative Pricing Section - WORKING VERSION
window.addEventListener('DOMContentLoaded', function() {
    // Find a good place to insert pricing
    var mainContent = document.querySelector('main') || document.querySelector('#root');
    if (!mainContent) return;
    
    // Create pricing section
    var pricingHTML = [
        '<section id="bowery-pricing" style="padding: 80px 20px; background: #0f172a;">',
        '  <div style="max-width: 1200px; margin: 0 auto;">',
        '    <h2 style="text-align: center; color: white; font-size: 3rem; margin-bottom: 20px;">Choose Your AI Growth Package</h2>',
        '    <p style="text-align: center; color: rgba(255,255,255,0.8); font-size: 1.25rem; margin-bottom: 60px;">No templates. Just results.</p>',
        '    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">',
        // Starter Package
        '      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 40px;">',
        '        <h3 style="color: white; font-size: 1.75rem; margin-bottom: 10px;">AI Starter</h3>',
        '        <div style="color: #3b82f6; font-size: 2.5rem; font-weight: bold; margin-bottom: 30px;">$15,000</div>',
        '        <ul style="list-style: none; padding: 0;">',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ Custom Website (No Templates)</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ AI Chatbot Integration</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ Basic Analytics Dashboard</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0;">✓ 3 Months Support</li>',
        '        </ul>',
        '        <button onclick="alert(\'Starting your AI journey! Call us at (845) 409-0692 to begin.\')" style="width: 100%; margin-top: 30px; padding: 16px; background: #3b82f6; color: white; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer;">Get Started</button>',
        '      </div>',
        // Growth Package
        '      <div style="background: rgba(255,255,255,0.05); border: 2px solid #10b981; border-radius: 16px; padding: 40px; position: relative;">',
        '        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #10b981; color: white; padding: 8px 24px; border-radius: 20px; font-size: 0.875rem;">MOST POPULAR</div>',
        '        <h3 style="color: white; font-size: 1.75rem; margin-bottom: 10px;">Practice Growth</h3>',
        '        <div style="color: #10b981; font-size: 2.5rem; font-weight: bold; margin-bottom: 30px;">$45,000</div>',
        '        <ul style="list-style: none; padding: 0;">',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ Custom CRM System</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ AI Phone Transcription</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ Automated Booking</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ Sentiment Analysis</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0;">✓ 6 Months Support</li>',
        '        </ul>',
        '        <button onclick="alert(\'Excellent choice! Call us at (845) 409-0692 to transform your practice.\')" style="width: 100%; margin-top: 30px; padding: 16px; background: #10b981; color: white; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer;">Get Started</button>',
        '      </div>',
        // Enterprise Package
        '      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 40px;">',
        '        <h3 style="color: white; font-size: 1.75rem; margin-bottom: 10px;">Enterprise AI</h3>',
        '        <div style="color: #8b5cf6; font-size: 2.5rem; font-weight: bold; margin-bottom: 30px;">$125,000+</div>',
        '        <ul style="list-style: none; padding: 0;">',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ Complete Custom CRM</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ AI Phone System</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ Patient Simulators</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">✓ Custom Integrations</li>',
        '          <li style="color: rgba(255,255,255,0.9); padding: 10px 0;">✓ Dedicated Support Team</li>',
        '        </ul>',
        '        <button onclick="alert(\'Let\\\'s build something amazing! Call us at (845) 409-0692 for enterprise solutions.\')" style="width: 100%; margin-top: 30px; padding: 16px; background: #8b5cf6; color: white; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer;">Get Started</button>',
        '      </div>',
        '    </div>',
        '  </div>',
        '</section>'
    ].join('');
    
    // Insert after first section or at end
    var firstSection = mainContent.querySelector('section');
    if (firstSection && firstSection.nextSibling) {
        firstSection.insertAdjacentHTML('afterend', pricingHTML);
    } else {
        mainContent.insertAdjacentHTML('beforeend', pricingHTML);
    }
});