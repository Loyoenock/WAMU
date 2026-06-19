import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

export function Wishlist() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    organization: '',
    interest: 'Savings Groups',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          country: '',
          organization: '',
          interest: 'Savings Groups',
          message: ''
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        const errorData = await res.json().catch(() => null);
        setErrorMessage(errorData?.error || 'Could not save. Unknown error.');
        setStatus('error');
        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'country') {
      let code = '';
      if (value === 'Uganda') code = '+256';
      else if (value === 'Kenya') code = '+254';
      else if (value === 'Rwanda') code = '+250';
      
      setFormData(prev => {
        const isCurrentPhoneJustCode = !prev.phone || ['+256', '+254', '+250'].includes(prev.phone.trim());
        return {
          ...prev,
          [name]: value,
          phone: isCurrentPhoneJustCode ? (code ? `${code} ` : '') : prev.phone
        };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section id="wishlist" className="py-24 bg-white border-b border-brand-grove/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#2D4A38 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="max-w-2xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl mb-4 text-brand-primary">Join the Wishlist</h2>
          <p className="text-brand-moss text-xs uppercase tracking-widest mt-2">
            Securing institutional and community partnerships.
          </p>
        </div>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 bg-white border border-brand-highlight shadow-sm"
          >
            <div className="font-serif text-3xl mb-4 text-brand-primary">Thank you.</div>
            <div className="text-brand-grove">We'll keep you informed as WAMU evolves.</div>
          </motion.div>
        ) : status === 'error' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 bg-white border border-red-200 shadow-sm"
          >
            <div className="font-serif text-3xl mb-4 text-red-600">Notice</div>
            <div className="text-red-800">{errorMessage}</div>
          </motion.div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full bg-brand-mist border border-brand-highlight rounded-none px-4 py-3 text-sm text-brand-midnight focus:outline-none focus:border-brand-primary focus:bg-white transition-colors placeholder:text-brand-midnight/60 font-medium" />
              <input type="text" id="organization" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} className="w-full bg-brand-mist border border-brand-highlight rounded-none px-4 py-3 text-sm text-brand-midnight focus:outline-none focus:border-brand-primary focus:bg-white transition-colors placeholder:text-brand-midnight/60 font-medium" />
            </div>

            <input required type="email" id="email" name="email" placeholder="Work Email" value={formData.email} onChange={handleChange} className="w-full bg-brand-mist border border-brand-highlight rounded-none px-4 py-3 text-sm text-brand-midnight focus:outline-none focus:border-brand-primary focus:bg-white transition-colors placeholder:text-brand-midnight/60 font-medium" />

            <div className="flex flex-col sm:flex-row gap-4">
              <select required id="country" name="country" value={formData.country} onChange={handleChange} className="w-full sm:w-1/3 bg-brand-mist border border-brand-highlight rounded-none px-4 py-3 text-sm text-brand-midnight focus:outline-none focus:border-brand-primary focus:bg-white transition-colors appearance-none font-medium">
                <option value="" className="bg-brand-mist">Country</option>
                <option value="Uganda" className="bg-brand-mist">Uganda</option>
                <option value="Kenya" className="bg-brand-mist">Kenya</option>
                <option value="Rwanda" className="bg-brand-mist">Rwanda</option>
              </select>
              <input required type="tel" id="phone" name="phone" placeholder="WhatsApp Number" value={formData.phone} onChange={handleChange} className="w-full sm:w-2/3 bg-brand-mist border border-brand-highlight rounded-none px-4 py-3 text-sm text-brand-midnight focus:outline-none focus:border-brand-primary focus:bg-white transition-colors placeholder:text-brand-midnight/60 font-medium" />
            </div>

            <select id="interest" name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-brand-mist border border-brand-highlight rounded-none px-4 py-3 text-sm text-brand-midnight focus:outline-none focus:border-brand-primary focus:bg-white transition-colors appearance-none font-medium">
              <option value="Savings Groups" className="bg-brand-mist">Savings Groups</option>
              <option value="Micro-Insurance" className="bg-brand-mist">Micro-Insurance</option>
              <option value="Utility Payments" className="bg-brand-mist">Utility Payments</option>
              <option value="Institutional Partner" className="bg-brand-mist">Institutional Partner</option>
              <option value="Other" className="bg-brand-mist">Other</option>
            </select>

            <textarea id="message" name="message" rows={3} placeholder="Message (Optional)" value={formData.message} onChange={handleChange} className="w-full bg-brand-mist border border-brand-highlight rounded-none px-4 py-3 text-sm text-brand-midnight focus:outline-none focus:border-brand-primary focus:bg-white transition-colors resize-none placeholder:text-brand-midnight/60 font-medium" />

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full cursor-pointer bg-brand-highlight hover:bg-brand-mist text-[#0D1A12] font-bold py-4 text-xs uppercase tracking-[0.2em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-4 shadow-[0_0_15px_rgba(93,202,165,0.2)]"
            >
              {status === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : "Request Access"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
