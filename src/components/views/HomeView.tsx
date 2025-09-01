import { Database, Upload, RotateCcw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { AttackModal } from "@/components/AttackModal";

export function HomeView() {
  const [showAttackModal, setShowAttackModal] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">
          neo_security
        </h1>
        <p className="text-muted-foreground font-medium">
          Follow the workflow from left to right, top to bottom
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Generate Synthetic Data */}
        <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl font-display">Generate Synthetic Data</CardTitle>
            </div>
            <CardDescription className="text-base">
              Generate fake personal information for testing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full h-12 text-base font-medium">
              Generate Data
            </Button>
          </CardContent>
        </Card>

        {/* Upload to S3 */}
        <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl font-display">Upload to S3</CardTitle>
            </div>
            <CardDescription className="text-base">
              Upload the generated data file to your AWS S3 bucket.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full h-12 text-base font-medium">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
          </CardContent>
        </Card>

        {/* Run Scan */}
        <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <RotateCcw className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl font-display">Run Scan</CardTitle>
            </div>
            <CardDescription className="text-base">
              Configure and run scan for sensitive data patterns.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full h-12 text-base font-medium"
              onClick={() => setShowAttackModal(true)}
            >
              Run Scan
            </Button>
          </CardContent>
        </Card>

        {/* Download Report */}
        <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl font-display">Download Report</CardTitle>
            </div>
            <CardDescription className="text-base">
              Download a full PDF report of scan results.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full h-12 text-base font-medium">
              Download Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Reset Configuration */}
      <div className="flex justify-center pt-6">
        <Button variant="destructive" size="lg" className="font-medium">
          Reset Configuration
        </Button>
      </div>

      <AttackModal 
        isOpen={showAttackModal} 
        onClose={() => setShowAttackModal(false)}
        onSubmit={(data) => {
          console.log("Attack submitted:", data);
          setShowAttackModal(false);
        }}
      />
    </div>
  );
}