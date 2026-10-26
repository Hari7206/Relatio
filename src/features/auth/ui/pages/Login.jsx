import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Hook for redirecting

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    // Add your authentication API call here
    // Upon success, redirect to dashboard:
    navigate('/home'); 
  };

  return (
    <div className="bg-[#141218] text-[#e6e0e9] font-sans min-h-screen flex flex-col overflow-hidden relative">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#cfbcff]/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#cdc0e9]/5 blur-[100px]"></div>
      </div>

      {/* Main Container */}
      <main className="relative z-10 flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* Card Shell */}
          <div className="bg-[#1d1b20] rounded-xl border border-[#494551]/30 shadow-2xl p-8">
            
            {/* Brand Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6750a4] rounded-lg mb-4 shadow-lg shadow-[#6750a4]/20">
                <svg className="w-7 h-7 text-[#e0d2ff]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-[#e6e0e9] tracking-tight">Synthetix AI</h1>
              <p className="text-sm text-[#cbc4d2] mt-1">Sign in to your workspace</p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 bg-[#2b292f] hover:bg-[#3b383e] transition-colors border border-[#494551]/50 py-2 px-4 rounded-lg group">
                <svg className="w-4 h-4 text-[#cbc4d2] group-hover:text-[#e6e0e9]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 14h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                </svg>
                <span className="text-[11px] font-semibold tracking-wider text-[#e6e0e9] uppercase">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#2b292f] hover:bg-[#3b383e] transition-colors border border-[#494551]/50 py-2 px-4 rounded-lg group">
                <svg className="w-4 h-4 text-[#cbc4d2] group-hover:text-[#e6e0e9]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                <span className="text-[11px] font-semibold tracking-wider text-[#e6e0e9] uppercase">Github</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-8 flex items-center">
              <div className="flex-grow border-t border-[#494551]/30"></div>
              <span className="flex-shrink mx-4 text-xs text-[#cbc4d2]">or continue with email</span>
              <div className="flex-grow border-t border-[#494551]/30"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              {/* Email */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold tracking-wider text-[#cbc4d2] uppercase ml-1" htmlFor="email">
                  Email Address
                </label>
                <input 
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className={`w-full bg-[#0f0d13] border ${errors.email ? 'border-red-500' : 'border-[#494551]/50'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#cfbcff]/30 focus:border-[#cfbcff] outline-none transition-all text-[#e6e0e9] placeholder:text-[#948e9c]/50`}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <span className="text-red-400 text-xs ml-1">{errors.email.message}</span>}
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[11px] font-semibold tracking-wider text-[#cbc4d2] uppercase" htmlFor="password">
                    Password
                  </label>
                  <a href="#" className="text-xs text-[#cfbcff] hover:underline transition-all">
                    Forgot password?
                  </a>
                </div>
                <input 
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className={`w-full bg-[#0f0d13] border ${errors.password ? 'border-red-500' : 'border-[#494551]/50'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#cfbcff]/30 focus:border-[#cfbcff] outline-none transition-all text-[#e6e0e9] placeholder:text-[#948e9c]/50`}
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <span className="text-red-400 text-xs ml-1 block">{errors.password.message}</span>}
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2 px-1">
                <input 
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#494551]/50 bg-[#0f0d13] text-[#cfbcff] focus:ring-[#cfbcff]/30 accent-[#cfbcff] cursor-pointer"
                  {...register('remember')}
                />
                <label className="text-xs text-[#cbc4d2] cursor-pointer select-none" htmlFor="remember">
                  Stay signed in
                </label>
              </div>

              {/* Sign In Button */}
              <button 
                type="submit"
                className="w-full bg-[#6750a4] text-[#e0d2ff] hover:bg-[#cfbcff] hover:text-[#381e72] font-medium py-3 rounded-lg shadow-lg hover:shadow-[#cfbcff]/20 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
              >
                <span>Sign In</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
              </button>
            </form>

            {/* Footer Sign Up -> Updated to Link */}
            <div className="mt-8 pt-6 border-t border-[#494551]/30 text-center">
              <p className="text-xs text-[#cbc4d2]">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#cfbcff] font-bold hover:underline ml-1">
                  Sign Up
                </Link>
              </p>
            </div>

          </div>

          {/* Footer Meta */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#948e9c]/50">© 2024 Synthetix AI. Enterprise Intelligence Platforms.</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="text-xs text-[#948e9c]/40 hover:text-[#cbc4d2] transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-[#948e9c]/40 hover:text-[#cbc4d2] transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </main>

      {/* Decoration Image Element */}
      <div className="fixed bottom-6 right-6 opacity-20 pointer-events-none select-none hidden md:block">
        <div className="relative w-64 h-64 rounded-xl overflow-hidden border border-[#494551]/20">
          <img 
            alt="Abstract AI Visualization" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            style={{ filter: "hue-rotate(220deg) saturate(1.5) brightness(0.6)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141218] to-transparent"></div>
        </div>
      </div>

    </div>
  );
};

export default Login;