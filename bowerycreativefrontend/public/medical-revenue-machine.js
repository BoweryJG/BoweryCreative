// BOWERY CREATIVE MEDICAL REVENUE MACHINE
// Stop fucking around - let's make money

(function() {
    // Wait for page load
    window.addEventListener('DOMContentLoaded', function() {
        
        // Create the fucking revenue button that can't be ignored
        var revenueBtn = document.createElement('div');
        revenueBtn.innerHTML = [
            '<div id="revenue-trigger" style="position: fixed; bottom: 100px; right: 20px; z-index: 9998;">',
            '  <button style="background: linear-gradient(45deg, #f59e0b, #dc2626); color: white; padding: 20px 40px; border: none; border-radius: 50px; font-size: 18px; font-weight: bold; cursor: pointer; box-shadow: 0 10px 30px rgba(220, 38, 38, 0.5); animation: pulse 2s infinite;">',
            '    💰 Start Making $50K+/Month →',
            '  </button>',
            '</div>'
        ].join('');
        document.body.appendChild(revenueBtn);
        
        // Add pulse animation
        var style = document.createElement('style');
        style.textContent = '@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }';
        document.head.appendChild(style);
        
        // Revenue machine data - REAL FUCKING NUMBERS
        var dentalSolutions = {
            yomiElite: {
                name: 'YOMI Elite Revenue System',
                price: 95000,
                monthlyRevenue: '75,000-150,000',
                implementation: '30 days',
                roi: '12-18 months',
                features: [
                    'YOMI-specific patient acquisition funnels generating 60+ qualified implant leads/month',
                    'Robotic surgery positioning campaigns - "Why choose prehistoric drilling?"',
                    'Competitor conquest system targeting traditional implant practices',
                    'Insurance maximization AI - finds hidden implant coverage',
                    'Same-day implant marketing automation',
                    'Virtual consultation system with 3D treatment planning showcase',
                    'Referring dentist portal with real-time case tracking',
                    'Patient financing integration with 97% approval rates'
                ],
                guarantee: 'Get 50 new implant cases in 90 days or full refund'
            },
            implantEmpire: {
                name: 'Implant Empire Builder',
                price: 65000,
                monthlyRevenue: '50,000-85,000',
                implementation: '21 days',
                roi: '6-9 months',
                features: [
                    'All-on-4 specific marketing campaigns',
                    'Edentulous patient identification system',
                    'Medicare advantage navigator for implant coverage',
                    'Failed denture rescue campaigns',
                    'Mini-implant opportunity identifier',
                    'Bone grafting necessity predictor AI',
                    'Post-extraction implant scheduling automation',
                    'GP referral incentive management system'
                ],
                guarantee: '30 new implant patients in 60 days guaranteed'
            }
        };
        
        var aestheticSolutions = {
            luxuryMed: {
                name: 'Luxury Med Spa Dominator',
                price: 125000,
                monthlyRevenue: '100,000-250,000',
                implementation: '45 days',
                roi: '8-12 months',
                features: [
                    'Ozempic/Wegovy skin tightening identifier - captures ALL GLP-1 patients',
                    'Morpheus8 vs CoolSculpting intelligent routing system',
                    'Natural beauty positioning for "Quiet Luxury" demographic',
                    'Male aesthetics expansion pack - 40% untapped market',
                    'Regenerative medicine upsell automation (Exosomes/PRF)',
                    'Membership program builder - $500-2000/month recurring',
                    'Instagram booking integration with beauty filter previews',
                    'Celebrity look-alike campaign builder (legally compliant)'
                ],
                guarantee: '$100K new revenue in 90 days or we work free until you hit it'
            },
            injectorPro: {
                name: 'Injector Practice Accelerator',
                price: 75000,
                monthlyRevenue: '60,000-120,000',
                implementation: '30 days',
                roi: '4-8 months',
                features: [
                    'Tox membership engine - 200+ members in 90 days',
                    'Filler migration repair campaign system',
                    'Lip flip to full lips upgrade automation',
                    'Prejuvenation Gen-Z capture system',
                    'Botox party booking platform with viral sharing',
                    'RealSelf reputation dominator with review automation',
                    'Allergan/Galderma rewards maximizer',
                    'Natural results before/after AI generator'
                ],
                guarantee: '100 new injection patients in 60 days'
            }
        };
        
        // Click handler
        document.getElementById('revenue-trigger').addEventListener('click', function() {
            showRevenueModal();
        });
        
        // The main fucking modal
        window.showRevenueModal = function() {
            var modal = document.createElement('div');
            modal.id = 'revenue-modal';
            modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 10000; overflow-y: auto;';
            
            modal.innerHTML = [
                '<div style="max-width: 1400px; margin: 40px auto; background: #0f172a; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">',
                '  <div style="position: relative;">',
                '    <button onclick="document.getElementById(\'revenue-modal\').remove()" style="position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.1); border: none; color: white; width: 50px; height: 50px; border-radius: 50%; font-size: 30px; cursor: pointer; z-index: 10;">×</button>',
                '    <div style="padding: 60px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">',
                '      <h1 style="color: white; font-size: 3.5rem; margin-bottom: 20px; font-weight: 800;">Stop Leaving Money on the Table</h1>',
                '      <p style="color: #fbbf24; font-size: 1.5rem; margin-bottom: 30px;">Your competitors are stealing $50K-200K/month using our systems</p>',
                '      <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;">',
                '        <div style="text-align: center;">',
                '          <div style="color: #10b981; font-size: 3rem; font-weight: bold;">2,847</div>',
                '          <div style="color: rgba(255,255,255,0.8);">Practices Using Our AI</div>',
                '        </div>',
                '        <div style="text-align: center;">',
                '          <div style="color: #10b981; font-size: 3rem; font-weight: bold;">$3.2B</div>',
                '          <div style="color: rgba(255,255,255,0.8);">Revenue Generated</div>',
                '        </div>',
                '        <div style="text-align: center;">',
                '          <div style="color: #10b981; font-size: 3rem; font-weight: bold;">6-18x</div>',
                '          <div style="color: rgba(255,255,255,0.8);">Average ROI</div>',
                '        </div>',
                '      </div>',
                '    </div>',
                '    <div style="padding: 60px;">',
                '      <h2 style="color: white; text-align: center; font-size: 2.5rem; margin-bottom: 50px;">What\'s Your Money-Making Specialty?</h2>',
                '      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">',
                '        <div onclick="showDentalSolutions()" style="background: rgba(59, 130, 246, 0.1); border: 2px solid #3b82f6; border-radius: 20px; padding: 40px; cursor: pointer; transition: all 0.3s;">',
                '          <h3 style="color: #3b82f6; font-size: 2rem; margin-bottom: 20px;">🦷 Dental Implants & YOMI</h3>',
                '          <p style="color: white; font-size: 1.25rem; margin-bottom: 30px;">Turn your $500K YOMI investment into $2M+ annual revenue</p>',
                '          <div style="background: rgba(0,0,0,0.5); padding: 20px; border-radius: 10px;">',
                '            <div style="color: #10b981; font-size: 1.125rem; margin-bottom: 10px;">Average Practice Results:</div>',
                '            <ul style="list-style: none; padding: 0;">',
                '              <li style="color: rgba(255,255,255,0.9); margin-bottom: 5px;">• 137% increase in implant volume</li>',
                '              <li style="color: rgba(255,255,255,0.9); margin-bottom: 5px;">• $75K-150K new monthly revenue</li>',
                '              <li style="color: rgba(255,255,255,0.9);">• 6-month ROI on full system</li>',
                '            </ul>',
                '          </div>',
                '        </div>',
                '        <div onclick="showAestheticSolutions()" style="background: rgba(139, 92, 246, 0.1); border: 2px solid #8b5cf6; border-radius: 20px; padding: 40px; cursor: pointer; transition: all 0.3s;">',
                '          <h3 style="color: #8b5cf6; font-size: 2rem; margin-bottom: 20px;">💉 Medical Aesthetics</h3>',
                '          <p style="color: white; font-size: 1.25rem; margin-bottom: 30px;">Dominate the $15B aesthetic market with AI-powered patient acquisition</p>',
                '          <div style="background: rgba(0,0,0,0.5); padding: 20px; border-radius: 10px;">',
                '            <div style="color: #10b981; font-size: 1.125rem; margin-bottom: 10px;">Average Practice Results:</div>',
                '            <ul style="list-style: none; padding: 0;">',
                '              <li style="color: rgba(255,255,255,0.9); margin-bottom: 5px;">• 250+ new patients/month</li>',
                '              <li style="color: rgba(255,255,255,0.9); margin-bottom: 5px;">• $100K-250K new monthly revenue</li>',
                '              <li style="color: rgba(255,255,255,0.9);">• 85% patient retention rate</li>',
                '            </ul>',
                '          </div>',
                '        </div>',
                '      </div>',
                '    </div>',
                '  </div>',
                '</div>'
            ].join('');
            
            document.body.appendChild(modal);
        };
        
        // Show dental solutions
        window.showDentalSolutions = function() {
            var modal = document.getElementById('revenue-modal');
            modal.innerHTML = [
                '<div style="max-width: 1400px; margin: 40px auto; background: #0f172a; border-radius: 20px;">',
                '  <button onclick="showRevenueModal()" style="position: absolute; top: 20px; left: 20px; background: rgba(255,255,255,0.1); border: none; color: white; padding: 10px 20px; border-radius: 5px; cursor: pointer;">← Back</button>',
                '  <button onclick="document.getElementById(\'revenue-modal\').remove()" style="position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.1); border: none; color: white; width: 50px; height: 50px; border-radius: 50%; font-size: 30px; cursor: pointer;">×</button>',
                '  <div style="padding: 60px;">',
                '    <h2 style="color: white; text-align: center; font-size: 3rem; margin-bottom: 20px;">Dental Implant Revenue Systems</h2>',
                '    <p style="color: #3b82f6; text-align: center; font-size: 1.5rem; margin-bottom: 50px;">Stop watching other practices get all the big cases</p>',
                '    <div style="display: grid; gap: 40px;">',
                      Object.entries(dentalSolutions).map(function(item) {
                          var key = item[0];
                          var solution = item[1];
                          return [
                              '<div style="background: rgba(255,255,255,0.05); border: 2px solid #3b82f6; border-radius: 20px; padding: 40px;">',
                              '  <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px;">',
                              '    <div>',
                              '      <h3 style="color: #3b82f6; font-size: 2rem; margin-bottom: 20px;">' + solution.name + '</h3>',
                              '      <div style="display: flex; gap: 30px; margin-bottom: 30px;">',
                              '        <div>',
                              '          <div style="color: rgba(255,255,255,0.6); font-size: 0.875rem;">Investment</div>',
                              '          <div style="color: white; font-size: 2rem; font-weight: bold;">$' + solution.price.toLocaleString() + '</div>',
                              '        </div>',
                              '        <div>',
                              '          <div style="color: rgba(255,255,255,0.6); font-size: 0.875rem;">Monthly Revenue</div>',
                              '          <div style="color: #10b981; font-size: 2rem; font-weight: bold;">$' + solution.monthlyRevenue + '</div>',
                              '        </div>',
                              '        <div>',
                              '          <div style="color: rgba(255,255,255,0.6); font-size: 0.875rem;">Full ROI</div>',
                              '          <div style="color: #fbbf24; font-size: 2rem; font-weight: bold;">' + solution.roi + '</div>',
                              '        </div>',
                              '      </div>',
                              '      <div style="background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; padding: 15px; border-radius: 10px; margin-bottom: 30px;">',
                              '        <strong style="color: #10b981;">💰 ' + solution.guarantee + '</strong>',
                              '      </div>',
                              '      <h4 style="color: white; margin-bottom: 15px;">What You Get:</h4>',
                              '      <ul style="list-style: none; padding: 0;">',
                                solution.features.map(function(feature) {
                                    return '<li style="color: rgba(255,255,255,0.9); padding: 8px 0; display: flex; align-items: start;"><span style="color: #3b82f6; margin-right: 10px;">✓</span>' + feature + '</li>';
                                }).join(''),
                              '      </ul>',
                              '    </div>',
                              '    <div style="background: rgba(0,0,0,0.5); padding: 30px; border-radius: 15px;">',
                              '      <h4 style="color: white; margin-bottom: 20px;">Ready to Dominate?</h4>',
                              '      <button onclick="startOnboarding(\'dental\', \'' + key + '\')" style="width: 100%; padding: 20px; background: linear-gradient(45deg, #3b82f6, #2563eb); color: white; border: none; border-radius: 10px; font-size: 1.125rem; font-weight: bold; cursor: pointer; margin-bottom: 20px;">Start Now →</button>',
                              '      <div style="text-align: center; color: rgba(255,255,255,0.8); font-size: 0.875rem; margin-bottom: 20px;">or</div>',
                              '      <button onclick="scheduleStrategy(\'dental\', \'' + key + '\')" style="width: 100%; padding: 15px; background: transparent; color: white; border: 2px solid rgba(255,255,255,0.3); border-radius: 10px; cursor: pointer;">Schedule Strategy Call</button>',
                              '      <div style="margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px;">',
                              '        <div style="color: #fbbf24; font-size: 0.875rem; margin-bottom: 10px;">⏰ Limited Time Bonus</div>',
                              '        <div style="color: white; font-size: 0.875rem;">Sign up today and get our competitor conquest system FREE ($15K value)</div>',
                              '      </div>',
                              '    </div>',
                              '  </div>',
                              '</div>'
                          ].join('');
                      }).join(''),
                '    </div>',
                '  </div>',
                '</div>'
            ].join('');
        };
        
        // Show aesthetic solutions
        window.showAestheticSolutions = function() {
            var modal = document.getElementById('revenue-modal');
            modal.innerHTML = [
                '<div style="max-width: 1400px; margin: 40px auto; background: #0f172a; border-radius: 20px;">',
                '  <button onclick="showRevenueModal()" style="position: absolute; top: 20px; left: 20px; background: rgba(255,255,255,0.1); border: none; color: white; padding: 10px 20px; border-radius: 5px; cursor: pointer;">← Back</button>',
                '  <button onclick="document.getElementById(\'revenue-modal\').remove()" style="position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.1); border: none; color: white; width: 50px; height: 50px; border-radius: 50%; font-size: 30px; cursor: pointer;">×</button>',
                '  <div style="padding: 60px;">',
                '    <h2 style="color: white; text-align: center; font-size: 3rem; margin-bottom: 20px;">Medical Aesthetic Revenue Systems</h2>',
                '    <p style="color: #8b5cf6; text-align: center; font-size: 1.5rem; margin-bottom: 50px;">The "Quiet Luxury" revolution is here - profit from it</p>',
                '    <div style="display: grid; gap: 40px;">',
                      Object.entries(aestheticSolutions).map(function(item) {
                          var key = item[0];
                          var solution = item[1];
                          return [
                              '<div style="background: rgba(255,255,255,0.05); border: 2px solid #8b5cf6; border-radius: 20px; padding: 40px;">',
                              '  <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px;">',
                              '    <div>',
                              '      <h3 style="color: #8b5cf6; font-size: 2rem; margin-bottom: 20px;">' + solution.name + '</h3>',
                              '      <div style="display: flex; gap: 30px; margin-bottom: 30px;">',
                              '        <div>',
                              '          <div style="color: rgba(255,255,255,0.6); font-size: 0.875rem;">Investment</div>',
                              '          <div style="color: white; font-size: 2rem; font-weight: bold;">$' + solution.price.toLocaleString() + '</div>',
                              '        </div>',
                              '        <div>',
                              '          <div style="color: rgba(255,255,255,0.6); font-size: 0.875rem;">Monthly Revenue</div>',
                              '          <div style="color: #10b981; font-size: 2rem; font-weight: bold;">$' + solution.monthlyRevenue + '</div>',
                              '        </div>',
                              '        <div>',
                              '          <div style="color: rgba(255,255,255,0.6); font-size: 0.875rem;">Full ROI</div>',
                              '          <div style="color: #fbbf24; font-size: 2rem; font-weight: bold;">' + solution.roi + '</div>',
                              '        </div>',
                              '      </div>',
                              '      <div style="background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; padding: 15px; border-radius: 10px; margin-bottom: 30px;">',
                              '        <strong style="color: #10b981;">💰 ' + solution.guarantee + '</strong>',
                              '      </div>',
                              '      <h4 style="color: white; margin-bottom: 15px;">What You Get:</h4>',
                              '      <ul style="list-style: none; padding: 0;">',
                                solution.features.map(function(feature) {
                                    return '<li style="color: rgba(255,255,255,0.9); padding: 8px 0; display: flex; align-items: start;"><span style="color: #8b5cf6; margin-right: 10px;">✓</span>' + feature + '</li>';
                                }).join(''),
                              '      </ul>',
                              '    </div>',
                              '    <div style="background: rgba(0,0,0,0.5); padding: 30px; border-radius: 15px;">',
                              '      <h4 style="color: white; margin-bottom: 20px;">Ready to Scale?</h4>',
                              '      <button onclick="startOnboarding(\'aesthetic\', \'' + key + '\')" style="width: 100%; padding: 20px; background: linear-gradient(45deg, #8b5cf6, #7c3aed); color: white; border: none; border-radius: 10px; font-size: 1.125rem; font-weight: bold; cursor: pointer; margin-bottom: 20px;">Start Now →</button>',
                              '      <div style="text-align: center; color: rgba(255,255,255,0.8); font-size: 0.875rem; margin-bottom: 20px;">or</div>',
                              '      <button onclick="scheduleStrategy(\'aesthetic\', \'' + key + '\')" style="width: 100%; padding: 15px; background: transparent; color: white; border: 2px solid rgba(255,255,255,0.3); border-radius: 10px; cursor: pointer;">Schedule Strategy Call</button>',
                              '      <div style="margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px;">',
                              '        <div style="color: #fbbf24; font-size: 0.875rem; margin-bottom: 10px;">🔥 Market Timing</div>',
                              '        <div style="color: white; font-size: 0.875rem;">GLP-1 drugs created a $2B skin tightening opportunity - we show you how to capture it</div>',
                              '      </div>',
                              '    </div>',
                              '  </div>',
                              '</div>'
                          ].join('');
                      }).join(''),
                '    </div>',
                '  </div>',
                '</div>'
            ].join('');
        };
        
        // Start onboarding with payment
        window.startOnboarding = function(type, packageKey) {
            var solutions = type === 'dental' ? dentalSolutions : aestheticSolutions;
            var solution = solutions[packageKey];
            
            var checkoutModal = document.createElement('div');
            checkoutModal.id = 'checkout-modal';
            checkoutModal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.98); z-index: 10001; overflow-y: auto;';
            
            checkoutModal.innerHTML = [
                '<div style="max-width: 800px; margin: 40px auto; background: white; border-radius: 20px;">',
                '  <div style="background: linear-gradient(45deg, ' + (type === 'dental' ? '#3b82f6, #2563eb' : '#8b5cf6, #7c3aed') + '); color: white; padding: 40px; border-radius: 20px 20px 0 0;">',
                '    <h2 style="margin: 0 0 10px 0; font-size: 2rem;">Secure Your ' + solution.name + '</h2>',
                '    <p style="margin: 0; opacity: 0.9;">Investment: $' + solution.price.toLocaleString() + ' • ROI: ' + solution.roi + '</p>',
                '  </div>',
                '  <div style="padding: 40px;">',
                '    <form id="onboarding-form">',
                '      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">',
                '        <div>',
                '          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Practice Name *</label>',
                '          <input type="text" name="practice" required style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 16px;">',
                '        </div>',
                '        <div>',
                '          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Your Name *</label>',
                '          <input type="text" name="name" required style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 16px;">',
                '        </div>',
                '        <div>',
                '          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Email *</label>',
                '          <input type="email" name="email" required style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 16px;">',
                '        </div>',
                '        <div>',
                '          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Phone *</label>',
                '          <input type="tel" name="phone" required style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 16px;">',
                '        </div>',
                '      </div>',
                '      <div style="margin-bottom: 30px;">',
                '        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Current Monthly Revenue</label>',
                '        <select style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 16px;">',
                '          <option>Under $50K/month</option>',
                '          <option>$50K - $100K/month</option>',
                '          <option>$100K - $250K/month</option>',
                '          <option>$250K - $500K/month</option>',
                '          <option>Over $500K/month</option>',
                '        </select>',
                '      </div>',
                '      <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 30px;">',
                '        <h4 style="margin: 0 0 15px 0;">Payment Options</h4>',
                '        <label style="display: block; margin-bottom: 10px; cursor: pointer;">',
                '          <input type="radio" name="payment" value="full" checked style="margin-right: 10px;">',
                '          <strong>Pay in Full - $' + solution.price.toLocaleString() + '</strong> (Save $' + Math.floor(solution.price * 0.1).toLocaleString() + ')',
                '        </label>',
                '        <label style="display: block; cursor: pointer;">',
                '          <input type="radio" name="payment" value="split" style="margin-right: 10px;">',
                '          <strong>2 Payments</strong> - $' + Math.floor(solution.price / 2 * 1.05).toLocaleString() + ' today, $' + Math.floor(solution.price / 2 * 1.05).toLocaleString() + ' in 30 days',
                '        </label>',
                '      </div>',
                '      <button type="submit" style="width: 100%; padding: 20px; background: linear-gradient(45deg, ' + (type === 'dental' ? '#3b82f6, #2563eb' : '#8b5cf6, #7c3aed') + '); color: white; border: none; border-radius: 10px; font-size: 1.125rem; font-weight: bold; cursor: pointer;">',
                '        Proceed to Secure Payment →',
                '      </button>',
                '    </form>',
                '    <div style="margin-top: 20px; text-align: center; color: #666;">',
                '      <p style="margin-bottom: 10px;">🔒 Bank-level encryption • 💳 All major cards accepted</p>',
                '      <p>Questions? Call us directly: <strong>(845) 409-0692</strong></p>',
                '    </div>',
                '  </div>',
                '</div>'
            ].join('');
            
            document.body.appendChild(checkoutModal);
            
            // Form handler
            document.getElementById('onboarding-form').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In production, this would integrate with Stripe
                alert('Excellent decision! Your ' + solution.name + ' is being activated. Our team will call you within 2 hours to begin implementation. Check your email for immediate access to our client portal.');
                
                // Close modals
                document.getElementById('checkout-modal').remove();
                document.getElementById('revenue-modal').remove();
            });
        };
        
        // Schedule strategy call
        window.scheduleStrategy = function(type, packageKey) {
            window.open('https://calendly.com/bowerycreative/strategy', '_blank');
        };
        
        // Auto-show after 30 seconds if user hasn't clicked anything
        setTimeout(function() {
            if (!document.getElementById('revenue-modal')) {
                showRevenueModal();
            }
        }, 30000);
    });
})();