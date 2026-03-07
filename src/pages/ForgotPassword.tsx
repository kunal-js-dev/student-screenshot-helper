import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) { toast.error("Please enter your email"); return; }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) toast.error(error.message);
    else setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>Check your email ✉️</CardTitle>
            <CardDescription>We've sent a password reset link to <strong>{email}</strong>.</CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Link to="/login" className="text-sm text-primary hover:underline">Back to login</Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Reset password</CardTitle>
          <CardDescription>Enter your email and we'll send you a reset link</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReset} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-9" />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Send Reset Link
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <Link to="/login" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3 w-3" /> Back to login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPassword;
