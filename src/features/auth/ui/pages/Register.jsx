import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router'; // Added for routing

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const password = watch('password', '');
  
  const getPasswordStrength = (pwd) => {
    let score = 0;
    if (pwd.length > 7) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
    return score;
  };

  const strength = getPasswordStrength(password);
  
  const onSubmit = (data) => {
    console.log('Register Data:', data);
    // Add your registration API call here
    // Upon success, redirect to dashboard:
    navigate('/home');
  };

  return (
    <div className="flex min-h-screen bg-[#0f1115] text-white font-sans relative overflow-hidden">
      
      {/* Background Ambient Glows (Matching Login style) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#cfbcff]/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#cdc0e9]/5 blur-[100px]"></div>
      </div>

      {/* Left Pane - Hero Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-[#2a2e38] z-10">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
            filter: "hue-rotate(220deg) saturate(1.5) brightness(0.6)"
          }}
        />
        
        <div className="relative z-10 text-xl font-bold tracking-wider text-white">
          Synthetix AI
        </div>

        <div className="relative z-10 max-w-md mt-auto mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#cfbcff] mb-4 uppercase">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Next-Gen Intelligence
          </div>
          
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Accelerate your team's intelligence.
          </h1>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-12">
            Connect your enterprise data to our specialized AI models and unlock unparalleled strategic insights in seconds.
          </p>
          
          <div className="flex gap-8">
            <div>
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-xs text-gray-500 mt-1">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl font-bold">ISO</div>
              <div className="text-xs text-gray-500 mt-1">27001 Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 py-12 relative z-10">
        <div className="w-full max-w-md mx-auto">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Create your account</h2>
            <p className="text-sm text-gray-400">Experience the future of collaborative data intelligence.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full bg-[#1a1d24] border ${errors.fullName ? 'border-red-500' : 'border-[#2a2e38]'} text-white text-sm rounded-lg focus:ring-1 focus:ring-[#cfbcff] focus:border-[#cfbcff] block pl-10 p-3 outline-none transition-colors`}
                  {...register('fullName', { required: 'Full name is required' })}
                />
              </div>
              {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className={`w-full bg-[#1a1d24] border ${errors.email ? 'border-red-500' : 'border-[#2a2e38]'} text-white text-sm rounded-lg focus:ring-1 focus:ring-[#cfbcff] focus:border-[#cfbcff] block pl-10 p-3 outline-none transition-colors`}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
              </div>
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className={`w-full bg-[#1a1d24] border ${errors.password ? 'border-red-500' : 'border-[#2a2e38]'} text-white text-sm rounded-lg focus:ring-1 focus:ring-[#cfbcff] focus:border-[#cfbcff] block pl-10 p-3 outline-none transition-colors`}
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Minimum 8 characters' }
                  })}
                />
              </div>
              
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1 h-1 mb-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div 
                        key={level} 
                        className={`flex-1 rounded-full ${
                          strength >= level 
                            ? (strength <= 2 ? 'bg-red-500' : 'bg-[#cfbcff]') 
                            : 'bg-[#2a2e38]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className={`text-xs ${strength <= 2 ? 'text-red-400' : 'text-[#cfbcff]'}`}>
                    {strength <= 2 ? 'Weak password' : strength === 3 ? 'Good password' : 'Strong password'}
                  </span>
                </div>
              )}
              {errors.password && <span className="text-red-500 text-xs mt-1 block">{errors.password.message}</span>}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-[#2a2e38] rounded bg-[#1a1d24] focus:ring-2 focus:ring-[#cfbcff]/50 accent-[#cfbcff]"
                  {...register('terms', { required: 'You must agree to the terms' })}
                />
              </div>
              <label htmlFor="terms" className="ml-2 text-xs font-medium text-gray-400">
                I agree to the <a href="#" className="text-[#cfbcff] hover:underline">Terms of Service</a> and <a href="#" className="text-[#cfbcff] hover:underline">Privacy Policy</a>.
              </label>
            </div>
            {errors.terms && <span className="text-red-500 text-xs">{errors.terms.message}</span>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-[#e0d2ff] bg-[#6750a4] hover:bg-[#cfbcff] hover:text-[#381e72] focus:ring-4 focus:outline-none focus:ring-[#cfbcff]/30 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center mt-8 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#2a2e38]"></div>
            </div>
            <div className="relative px-4 bg-[#0f1115] text-xs text-gray-500 uppercase">
              Or continue with
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 w-full bg-[#1a1d24] border border-[#2a2e38] text-white text-sm rounded-lg py-2.5 hover:bg-[#232730] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full bg-[#1a1d24] border border-[#2a2e38] text-white text-sm rounded-lg py-2.5 hover:bg-[#232730] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              SSO
            </button>
          </div>

          {/* Log In Link -> Updated to Link */}
          <p className="text-center text-sm text-gray-400 mt-8">
            Already have an account? <Link to="/" className="text-white font-medium hover:underline">Log In</Link>
          </p>

        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 w-full border-t border-[#2a2e38] bg-[#0f1115] py-4 px-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 z-10 hidden md:flex">
        <div className="font-bold text-white mb-4 md:mb-0 text-sm">Synthetix AI</div>
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
          <a href="#" className="hover:text-white transition-colors">System Status</a>
        </div>
        <div>
          © 2024 Synthetix AI. Enterprise Intelligence Platform.
        </div>
      </div>

    </div>
  );
};

export default Register;