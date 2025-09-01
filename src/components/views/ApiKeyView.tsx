import { Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ApiKeyView() {
  const [apiKey, setApiKey] = useState("sk-BGUDtEXGnGYQT6-s-ExBr-ey6Z_mCsKKMZQA");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">
          Set OpenAI API Key
        </h1>
        <p className="text-muted-foreground font-medium">
          Enter your OpenAI API key to enable AI features. You can find your key in your OpenAI account dashboard.
        </p>
      </div>

      <Card className="max-w-2xl shadow-soft">
        <CardHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Key className="w-5 h-5 text-white" />
            </div>
            <CardTitle className="text-xl font-display">API Configuration</CardTitle>
          </div>
          <CardDescription className="text-base">
            Configure your OpenAI API key for enhanced security analysis capabilities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="apiKey" className="text-sm font-medium">
              API Key
            </Label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="font-mono text-sm h-12"
            />
          </div>
          
          <div className="flex gap-3">
            <Button size="lg" className="font-medium">
              Save Key
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              Clear Key
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}