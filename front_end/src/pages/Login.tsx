import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Eye, EyeOff } from 'lucide-react';
import Stars from '@/components/Stars';
import heroBg from '@/assets/login.svg';
import api from '@/lib/api';
import { toast } from '@/components/ui/use-toast';
import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // ================= NORMAL LOGIN =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/login/', {
        email,
        password,
      });

      if (response.data.access) {
        localStorage.setItem('access_token', response.data.access);
      }

      if (response.data.refresh) {
        localStorage.setItem('refresh_token', response.data.refresh);
      }

      const userData = {
        id: response.data.id || response.data.user?.id,
        email: response.data.email,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        role: response.data.role,
      };

      localStorage.setItem('user', JSON.stringify(userData));

      toast({
        title: 'Login successful!',
        description: 'Welcome back!',
      });

      navigate('/dashboard');
    } catch (err: any) {
      console.error('Login error:', err);

      if (err.response?.data) {
        const errorData = err.response.data;

        if (errorData.detail) {
          setError(errorData.detail);
        } else if (errorData.non_field_errors) {
          setError(errorData.non_field_errors[0]);
        } else {
          setError('Invalid email or password');
        }
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // ================= GOOGLE LOGIN =================
  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    setError('');

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();

      const response = await api.post('/auth/google/', {
        idToken,
      });

      if (response.data.tokens) {
        localStorage.setItem('access_token', response.data.tokens.access);
        localStorage.setItem('refresh_token', response.data.tokens.refresh);
      }

      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }

      navigate('/dashboard', {
        state: {
          firstName:
            response.data?.user?.first_name ||
            result.user.displayName?.split(' ')[0] ||
            '',
          lastName:
            response.data?.user?.last_name ||
            result.user.displayName?.split(' ').slice(1).join(' ') ||
            '',
        },
      });
    } catch (err: any) {
      console.error('Google signup error:', err);

      if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in cancelled. Please try again.');
      } else if (err.code === 'auth/popup-blocked') {
        setError('Pop-up blocked. Please allow pop-ups for this site.');
      } else {
        setError('Failed to sign up with Google. Please try again.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <Stars />

      {/* Left Panel */}
      <div
        className="hidden lg:flex lg:w-1/2 relative bg-center bg-cover h-screen"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/100" />

        <div className="relative z-10 flex flex-col items-start pt-5 px-11">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <span className="font-display text-2xl font-bold tracking-wider">
              PathFinder
            </span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="gradient-text">Welcome back to</span>
            <br />
            <span className="gradient-text">Your Journey</span>
          </h1>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-background relative">
        <Stars />

        <div className="w-full max-w-md animate-fade-in-up">
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-display text-xl font-bold">PathFinder</span>
          </Link>

          <div className="flex gap-8 mb-8 border-b border-border/30">
            <Link
              to="/login"
              className="pb-3 text-foreground font-medium border-b-2 border-foreground"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="pb-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <div className="backdrop-blur-2xl rounded-2xl p-8 shadow-lg glass-card-strong border border-white/30">
            <h2 className="font-display text-3xl font-bold mb-2 text-center">
              Welcome Back
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Login to your PathFinder account
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-red-500 text-sm text-center">{error}</p>
                </div>
              )}

              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />

              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Google Button */}
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full"
                onClick={handleGoogleSignup}
                disabled={googleLoading || loading}
              >
                {googleLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-accent/30 border-t-accent rounded-full animate-spin mr-2" />
                    Signing in with Google...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </>
                )}
              </Button>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>

            <p className="text-center text-muted-foreground mt-6">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-foreground font-semibold hover:text-accent transition-colors"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;