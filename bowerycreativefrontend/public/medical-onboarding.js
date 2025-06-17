// Bowery Creative Medical Practice Onboarding System
// Targeted for Dental Implant/YOMI Robotics & Aesthetic Medicine Practices

(function() {
    // Practice-specific campaigns
    const dentalCampaigns = {
        yomiAdvantage: {
            name: 'YOMI Robotics Marketing Suite',
            tagline: 'Position Your Practice as the Future of Dental Implants',
            price: '$85,000',
            roi: '137% average implant volume increase',
            features: [
                'YOMI-specific landing pages highlighting precision & safety',
                'Patient education videos on robotic implant advantages',
                'Automated email campaigns for implant candidates',
                'Real-time appointment booking with pre-qualification',
                'Competitor analysis dashboard (track other YOMI practices)',
                'ROI tracking: cost per implant patient acquisition'
            ],
            stats: {
                avgNewPatients: '45-60/month',
                conversionRate: '32%',
                avgCaseValue: '$4,500'
            }
        },
        implantGrowth: {
            name: 'Implant Practice Accelerator',
            tagline: 'From Consultation to Surgery - Fully Automated',
            price: '$65,000',
            features: [
                'AI phone system that pre-qualifies implant candidates',
                'Automated insurance verification for implant coverage',
                'Digital treatment planning portal for patients',
                'Referral network management system',
                'Post-surgery follow-up automation',
                'Google Ads + Facebook campaigns included'
            ],
            stats: {
                avgNewPatients: '30-40/month',
                conversionRate: '28%',
                avgCaseValue: '$3,800'
            }
        }
    };

    const aestheticCampaigns = {
        quietLuxury: {
            name: 'Quiet Luxury Aesthetic System',
            tagline: 'Natural Enhancement Marketing for Discerning Clients',
            price: '$95,000',
            trending: '2025 #1 Trend',
            features: [
                'Regenerative medicine content marketing suite',
                'Before/after gallery with AI-powered result predictions',
                'Membership program management (collagen banking)',
                'Male aesthetic marketing campaigns',
                'Prejuvenation packages for Gen Z/Millennials',
                'Integration with booking for combo treatments'
            ],
            treatments: [
                'Polynucleotides',
                'Bio-stimulators',
                'RF Microneedling',
                'Natural fillers'
            ],
            stats: {
                avgNewPatients: '60-80/month',
                conversionRate: '35%',
                avgTicket: '$1,200'
            }
        },
        bodyTransformation: {
            name: 'Body Contouring Revenue System',
            tagline: 'Capture the GLP-1 Skin Tightening Boom',
            price: '$75,000',
            opportunity: 'Ozempic/Wegovy patients need skin tightening',
            features: [
                'Weight loss drug patient identification system',
                'Skin tightening package builder',
                'CoolSculpting campaign automation',
                'Body analysis photo management',
                'Package pricing optimization AI',
                'Post-weight loss treatment protocols'
            ],
            stats: {
                avgNewPatients: '40-55/month',
                packageValue: '$3,500-8,000',
                retention: '85%'
            }
        }
    };

    // Create the onboarding interface
    function createOnboardingModal() {
        const modalHTML = `
            <div id="medical-onboarding-modal" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                z-index: 10000;
                display: none;
                overflow-y: auto;
                backdrop-filter: blur(10px);
            ">
                <div style="
                    max-width: 1200px;
                    margin: 40px auto;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                    position: relative;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                ">
                    <!-- Close button -->
                    <button onclick="closeMedicalOnboarding()" style="
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        background: rgba(255, 255, 255, 0.1);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        color: white;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        font-size: 24px;
                        cursor: pointer;
                        z-index: 10;
                    ">×</button>

                    <!-- Header -->
                    <div style="
                        padding: 60px 40px 40px;
                        text-align: center;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    ">
                        <h1 style="
                            color: white;
                            font-size: 3rem;
                            margin-bottom: 20px;
                            font-weight: 700;
                        ">Select Your Medical Specialty</h1>
                        <p style="
                            color: rgba(255, 255, 255, 0.8);
                            font-size: 1.25rem;
                            max-width: 600px;
                            margin: 0 auto;
                        ">AI-powered marketing systems designed specifically for your practice type</p>
                    </div>

                    <!-- Specialty Selection -->
                    <div style="
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 40px;
                        padding: 60px;
                    ">
                        <!-- Dental Implants -->
                        <div onclick="showDentalCampaigns()" style="
                            background: rgba(59, 130, 246, 0.1);
                            border: 2px solid rgba(59, 130, 246, 0.3);
                            border-radius: 16px;
                            padding: 40px;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            text-align: center;
                        " 
                        onmouseover="this.style.transform='scale(1.02)'; this.style.borderColor='rgba(59, 130, 246, 0.6)';"
                        onmouseout="this.style.transform='scale(1)'; this.style.borderColor='rgba(59, 130, 246, 0.3)';">
                            <div style="font-size: 4rem; margin-bottom: 20px;">🦷</div>
                            <h2 style="color: white; font-size: 2rem; margin-bottom: 20px;">Dental Implants & YOMI</h2>
                            <p style="color: rgba(255, 255, 255, 0.8); font-size: 1.125rem;">
                                Robotic implant systems, full-arch solutions, bone grafting
                            </p>
                            <div style="
                                margin-top: 30px;
                                padding: 20px;
                                background: rgba(0, 0, 0, 0.3);
                                border-radius: 8px;
                            ">
                                <div style="color: #3b82f6; font-size: 0.875rem; margin-bottom: 10px;">MARKET OPPORTUNITY</div>
                                <div style="color: white; font-size: 1.125rem;">137% avg implant volume increase with YOMI</div>
                            </div>
                        </div>

                        <!-- Medical Aesthetics -->
                        <div onclick="showAestheticCampaigns()" style="
                            background: rgba(139, 92, 246, 0.1);
                            border: 2px solid rgba(139, 92, 246, 0.3);
                            border-radius: 16px;
                            padding: 40px;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            text-align: center;
                        "
                        onmouseover="this.style.transform='scale(1.02)'; this.style.borderColor='rgba(139, 92, 246, 0.6)';"
                        onmouseout="this.style.transform='scale(1)'; this.style.borderColor='rgba(139, 92, 246, 0.3)';">
                            <div style="font-size: 4rem; margin-bottom: 20px;">💉</div>
                            <h2 style="color: white; font-size: 2rem; margin-bottom: 20px;">Medical Aesthetics</h2>
                            <p style="color: rgba(255, 255, 255, 0.8); font-size: 1.125rem;">
                                Injectables, body contouring, RF microneedling, regenerative
                            </p>
                            <div style="
                                margin-top: 30px;
                                padding: 20px;
                                background: rgba(0, 0, 0, 0.3);
                                border-radius: 8px;
                            ">
                                <div style="color: #8b5cf6; font-size: 0.875rem; margin-bottom: 10px;">2025 TREND</div>
                                <div style="color: white; font-size: 1.125rem;">"Quiet Luxury" natural enhancement boom</div>
                            </div>
                        </div>
                    </div>

                    <!-- Campaign Details (hidden initially) -->
                    <div id="campaign-details" style="display: none; padding: 0 60px 60px;">
                        <!-- Will be populated by showDentalCampaigns() or showAestheticCampaigns() -->
                    </div>
                </div>
            </div>
        `;

        // Add modal to page
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = modalHTML;
        document.body.appendChild(modalDiv.firstElementChild);
    }

    // Show dental campaigns
    window.showDentalCampaigns = function() {
        const detailsDiv = document.getElementById('campaign-details');
        detailsDiv.style.display = 'block';
        detailsDiv.innerHTML = `
            <h2 style="color: white; text-align: center; margin-bottom: 40px; font-size: 2.5rem;">
                Dental Implant Marketing Systems
            </h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                ${Object.entries(dentalCampaigns).map(([key, campaign]) => `
                    <div style="
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 12px;
                        padding: 30px;
                        position: relative;
                    ">
                        <h3 style="color: #3b82f6; font-size: 1.5rem; margin-bottom: 10px;">
                            ${campaign.name}
                        </h3>
                        <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 20px;">
                            ${campaign.tagline}
                        </p>
                        <div style="font-size: 2rem; color: white; font-weight: 700; margin-bottom: 20px;">
                            ${campaign.price}
                        </div>
                        ${campaign.roi ? `
                            <div style="
                                background: rgba(16, 185, 129, 0.2);
                                border: 1px solid rgba(16, 185, 129, 0.4);
                                padding: 10px;
                                border-radius: 6px;
                                margin-bottom: 20px;
                                text-align: center;
                            ">
                                <span style="color: #10b981; font-weight: 600;">${campaign.roi}</span>
                            </div>
                        ` : ''}
                        <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
                            ${campaign.features.map(feature => `
                                <li style="
                                    color: rgba(255, 255, 255, 0.9);
                                    padding: 8px 0;
                                    display: flex;
                                    align-items: start;
                                ">
                                    <span style="color: #3b82f6; margin-right: 10px;">✓</span>
                                    ${feature}
                                </li>
                            `).join('')}
                        </ul>
                        <div style="
                            background: rgba(0, 0, 0, 0.3);
                            padding: 15px;
                            border-radius: 6px;
                            margin-bottom: 20px;
                        ">
                            <div style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem; margin-bottom: 5px;">
                                Expected Results:
                            </div>
                            <div style="color: white; font-size: 0.875rem;">
                                ${campaign.stats.avgNewPatients} new patients • 
                                ${campaign.stats.conversionRate} conversion • 
                                ${campaign.stats.avgCaseValue} avg case
                            </div>
                        </div>
                        <button onclick="startPracticeOnboarding('dental', '${key}')" style="
                            width: 100%;
                            padding: 16px;
                            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                            color: white;
                            border: none;
                            border-radius: 8px;
                            font-weight: 600;
                            cursor: pointer;
                        ">
                            Start Implementation →
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    };

    // Show aesthetic campaigns
    window.showAestheticCampaigns = function() {
        const detailsDiv = document.getElementById('campaign-details');
        detailsDiv.style.display = 'block';
        detailsDiv.innerHTML = `
            <h2 style="color: white; text-align: center; margin-bottom: 40px; font-size: 2.5rem;">
                Medical Aesthetic Marketing Systems
            </h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                ${Object.entries(aestheticCampaigns).map(([key, campaign]) => `
                    <div style="
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 12px;
                        padding: 30px;
                        position: relative;
                    ">
                        ${campaign.trending ? `
                            <div style="
                                position: absolute;
                                top: -10px;
                                right: 20px;
                                background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
                                color: white;
                                padding: 6px 16px;
                                border-radius: 20px;
                                font-size: 0.75rem;
                                font-weight: 600;
                            ">${campaign.trending}</div>
                        ` : ''}
                        <h3 style="color: #8b5cf6; font-size: 1.5rem; margin-bottom: 10px;">
                            ${campaign.name}
                        </h3>
                        <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 20px;">
                            ${campaign.tagline}
                        </p>
                        <div style="font-size: 2rem; color: white; font-weight: 700; margin-bottom: 20px;">
                            ${campaign.price}
                        </div>
                        ${campaign.opportunity ? `
                            <div style="
                                background: rgba(251, 191, 36, 0.2);
                                border: 1px solid rgba(251, 191, 36, 0.4);
                                padding: 10px;
                                border-radius: 6px;
                                margin-bottom: 20px;
                                text-align: center;
                            ">
                                <span style="color: #fbbf24; font-weight: 600;">💡 ${campaign.opportunity}</span>
                            </div>
                        ` : ''}
                        ${campaign.treatments ? `
                            <div style="margin-bottom: 20px;">
                                <div style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem; margin-bottom: 10px;">
                                    Trending Treatments:
                                </div>
                                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                    ${campaign.treatments.map(treatment => `
                                        <span style="
                                            background: rgba(139, 92, 246, 0.2);
                                            border: 1px solid rgba(139, 92, 246, 0.4);
                                            padding: 4px 12px;
                                            border-radius: 20px;
                                            font-size: 0.75rem;
                                            color: white;
                                        ">${treatment}</span>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
                            ${campaign.features.map(feature => `
                                <li style="
                                    color: rgba(255, 255, 255, 0.9);
                                    padding: 8px 0;
                                    display: flex;
                                    align-items: start;
                                ">
                                    <span style="color: #8b5cf6; margin-right: 10px;">✓</span>
                                    ${feature}
                                </li>
                            `).join('')}
                        </ul>
                        <div style="
                            background: rgba(0, 0, 0, 0.3);
                            padding: 15px;
                            border-radius: 6px;
                            margin-bottom: 20px;
                        ">
                            <div style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem; margin-bottom: 5px;">
                                Expected Results:
                            </div>
                            <div style="color: white; font-size: 0.875rem;">
                                ${campaign.stats.avgNewPatients} new patients • 
                                ${campaign.stats.avgTicket || campaign.stats.packageValue} avg ticket
                                ${campaign.stats.retention ? ` • ${campaign.stats.retention} retention` : ''}
                            </div>
                        </div>
                        <button onclick="startPracticeOnboarding('aesthetic', '${key}')" style="
                            width: 100%;
                            padding: 16px;
                            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
                            color: white;
                            border: none;
                            border-radius: 8px;
                            font-weight: 600;
                            cursor: pointer;
                        ">
                            Start Implementation →
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    };

    // Start practice onboarding
    window.startPracticeOnboarding = function(type, campaignKey) {
        const campaigns = type === 'dental' ? dentalCampaigns : aestheticCampaigns;
        const campaign = campaigns[campaignKey];
        
        // Create checkout/onboarding form
        const checkoutHTML = `
            <div id="practice-checkout" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                z-index: 10001;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow-y: auto;
            ">
                <div style="
                    background: white;
                    max-width: 600px;
                    width: 90%;
                    margin: 40px;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                ">
                    <!-- Header -->
                    <div style="
                        background: linear-gradient(135deg, ${type === 'dental' ? '#3b82f6' : '#8b5cf6'} 0%, 
                                                             ${type === 'dental' ? '#2563eb' : '#7c3aed'} 100%);
                        color: white;
                        padding: 30px;
                    ">
                        <h2 style="margin: 0 0 10px 0; font-size: 1.75rem;">Get Started with ${campaign.name}</h2>
                        <p style="margin: 0; opacity: 0.9;">${campaign.price} - Implementation begins immediately</p>
                    </div>

                    <!-- Form -->
                    <div style="padding: 30px;">
                        <div style="margin-bottom: 25px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">
                                Practice Name *
                            </label>
                            <input type="text" id="practice-name" style="
                                width: 100%;
                                padding: 12px;
                                border: 2px solid #e0e0e0;
                                border-radius: 8px;
                                font-size: 16px;
                            " placeholder="Dr. Smith Dental Implant Center">
                        </div>

                        <div style="margin-bottom: 25px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">
                                Your Name *
                            </label>
                            <input type="text" id="contact-name" style="
                                width: 100%;
                                padding: 12px;
                                border: 2px solid #e0e0e0;
                                border-radius: 8px;
                                font-size: 16px;
                            " placeholder="Dr. John Smith">
                        </div>

                        <div style="margin-bottom: 25px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">
                                Email *
                            </label>
                            <input type="email" id="email" style="
                                width: 100%;
                                padding: 12px;
                                border: 2px solid #e0e0e0;
                                border-radius: 8px;
                                font-size: 16px;
                            " placeholder="doctor@example.com">
                        </div>

                        <div style="margin-bottom: 25px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">
                                Phone *
                            </label>
                            <input type="tel" id="phone" style="
                                width: 100%;
                                padding: 12px;
                                border: 2px solid #e0e0e0;
                                border-radius: 8px;
                                font-size: 16px;
                            " placeholder="(555) 123-4567">
                        </div>

                        <div style="
                            background: #f8f9fa;
                            padding: 20px;
                            border-radius: 8px;
                            margin-bottom: 25px;
                        ">
                            <h4 style="margin: 0 0 10px 0; color: #333;">What Happens Next?</h4>
                            <ol style="margin: 0; padding-left: 20px; color: #666;">
                                <li style="margin-bottom: 8px;">Immediate consultation call within 24 hours</li>
                                <li style="margin-bottom: 8px;">Custom implementation plan delivered in 48 hours</li>
                                <li style="margin-bottom: 8px;">System deployment begins within 7 days</li>
                                <li>First patient leads within 30 days</li>
                            </ol>
                        </div>

                        <button onclick="processCheckout('${type}', '${campaignKey}')" style="
                            width: 100%;
                            padding: 18px;
                            background: linear-gradient(135deg, ${type === 'dental' ? '#3b82f6' : '#8b5cf6'} 0%, 
                                                                 ${type === 'dental' ? '#2563eb' : '#7c3aed'} 100%);
                            color: white;
                            border: none;
                            border-radius: 8px;
                            font-size: 18px;
                            font-weight: 600;
                            cursor: pointer;
                        ">
                            Proceed to Payment →
                        </button>

                        <button onclick="closeCheckout()" style="
                            width: 100%;
                            padding: 12px;
                            background: none;
                            color: #666;
                            border: none;
                            margin-top: 10px;
                            cursor: pointer;
                        ">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        `;

        const checkoutDiv = document.createElement('div');
        checkoutDiv.innerHTML = checkoutHTML;
        document.body.appendChild(checkoutDiv.firstElementChild);
    };

    // Process checkout
    window.processCheckout = function(type, campaignKey) {
        const practiceName = document.getElementById('practice-name').value;
        const contactName = document.getElementById('contact-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (!practiceName || !contactName || !email || !phone) {
            alert('Please fill in all required fields');
            return;
        }

        // In production, this would:
        // 1. Send to your backend API
        // 2. Create Stripe checkout session
        // 3. Store lead information
        // 4. Trigger automated onboarding

        alert(`Thank you, ${contactName}!\n\nWe've received your information and will contact you within 24 hours to begin implementing your ${type} marketing system.\n\nCheck your email for next steps.`);
        
        // Close all modals
        closeCheckout();
        closeMedicalOnboarding();
    };

    // Close functions
    window.closeMedicalOnboarding = function() {
        const modal = document.getElementById('medical-onboarding-modal');
        if (modal) modal.style.display = 'none';
    };

    window.closeCheckout = function() {
        const checkout = document.getElementById('practice-checkout');
        if (checkout) checkout.remove();
    };

    // Open medical onboarding
    window.openMedicalOnboarding = function() {
        const modal = document.getElementById('medical-onboarding-modal');
        if (modal) {
            modal.style.display = 'block';
        } else {
            createOnboardingModal();
            document.getElementById('medical-onboarding-modal').style.display = 'block';
        }
    };

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createOnboardingModal);
    } else {
        createOnboardingModal();
    }

    // Update campaign selector to trigger medical onboarding
    const originalStartOnboarding = window.startOnboarding;
    window.startOnboarding = function(packageId) {
        // Open medical-specific onboarding
        openMedicalOnboarding();
    };
})();