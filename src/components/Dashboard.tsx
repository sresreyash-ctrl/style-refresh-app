import { useState } from "react";
import { Zap, Download, RotateCcw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AttackModal } from "./AttackModal";
import { useToast } from "@/hooks/use-toast";

export function Dashboard() {
  const [showAttackModal, setShowAttackModal] = useState(false);
  const { toast } = useToast();

  const handleRunAttack = (data: { accessKey: string; secretKey: string; region: string }) => {
    toast({
      title: "Attack Initiated",
      description: `Security assessment started for region: ${data.region}`,
    });
  };

  const handleDownloadReport = () => {
    toast({
      title: "Report Download",
      description: "Generating PDF report of attack results...",
    });
  };

  const handleResetConfiguration = () => {
    toast({
      title: "Configuration Reset",
      description: "All security configurations have been reset to default.",
      variant: "destructive",
    });
  };

  return (
    <div className="flex-1 bg-gradient-subtle min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="px-8 py-6">
          <div className="flex items-center gap-4 mb-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-3xl font-display font-bold text-foreground">
              Data Security Posture Management
            </h1>
          </div>
          <p className="text-muted-foreground font-medium">
            Follow the workflow from left to right, top to bottom
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Run Attack Card */}
            <Card className="group hover:shadow-large transition-all duration-300 border-0 shadow-medium bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-display font-bold">RUN Attack</CardTitle>
                    <CardDescription className="text-base">
                      Execute penetration testing and vulnerability assessment.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  variant="security"
                  size="lg"
                  className="w-full h-14 text-base font-semibold"
                  onClick={() => setShowAttackModal(true)}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  RUN Attack
                </Button>
              </CardContent>
            </Card>

            {/* Download Report Card */}
            <Card className="group hover:shadow-large transition-all duration-300 border-0 shadow-medium bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-security rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-display font-bold">Download Report</CardTitle>
                    <CardDescription className="text-base">
                      Download a full PDF report of attack results.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  variant="security-outline"
                  size="lg"
                  className="w-full h-14 text-base font-semibold"
                  onClick={handleDownloadReport}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Reset Configuration */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 font-medium"
              onClick={handleResetConfiguration}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Configuration
            </Button>
          </div>

          {/* Security Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-soft bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">127</div>
                <div className="text-sm font-medium text-muted-foreground">Vulnerabilities Found</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-warning mb-2">24</div>
                <div className="text-sm font-medium text-muted-foreground">Critical Issues</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2">92%</div>
                <div className="text-sm font-medium text-muted-foreground">Security Score</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Attack Modal */}
      <AttackModal
        isOpen={showAttackModal}
        onClose={() => setShowAttackModal(false)}
        onSubmit={handleRunAttack}
      />
    </div>
  );
}