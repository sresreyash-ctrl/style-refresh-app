import { CheckCircle, XCircle, AlertTriangle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const complianceResults = [
  {
    id: "CIS-1.1",
    title: "Ensure MFA is enabled for root account",
    description: "AWS Root Account",
    status: "passed",
    severity: "high",
  },
  {
    id: "CIS-1.2", 
    title: "Ensure security contact information is provided",
    description: "AWS Account Settings",
    status: "failed",
    severity: "medium",
  },
  {
    id: "CIS-2.1",
    title: "Ensure CloudTrail is enabled in all regions", 
    description: "AWS CloudTrail",
    status: "warning",
    severity: "high",
  },
];

export function ReportView() {
  const passed = complianceResults.filter(r => r.status === "passed").length;
  const failed = complianceResults.filter(r => r.status === "failed").length;
  const warnings = complianceResults.filter(r => r.status === "warning").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Compliance Report
          </h1>
          <p className="text-muted-foreground font-medium">
            Review your security posture analysis results
          </p>
        </div>
        <Button size="lg" className="font-medium">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-3xl font-bold text-success">{passed}</p>
                <p className="text-sm text-muted-foreground">Passed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-3xl font-bold text-destructive">{failed}</p>
                <p className="text-sm text-muted-foreground">Failed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-3xl font-bold text-warning">{warnings}</p>
                <p className="text-sm text-muted-foreground">Warnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Results */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-xl font-display">Compliance Results</CardTitle>
          <CardDescription>
            Detailed breakdown of security controls assessment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {complianceResults.map((result) => (
            <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                {result.status === "passed" && (
                  <CheckCircle className="w-5 h-5 text-success" />
                )}
                {result.status === "failed" && (
                  <XCircle className="w-5 h-5 text-destructive" />
                )}
                {result.status === "warning" && (
                  <AlertTriangle className="w-5 h-5 text-warning" />
                )}
                <div>
                  <h3 className="font-semibold">{result.id}</h3>
                  <p className="text-sm text-foreground">{result.title}</p>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {result.severity}
                </Badge>
                <Badge 
                  variant={
                    result.status === "passed" ? "default" : 
                    result.status === "failed" ? "destructive" : "secondary"
                  }
                  className="text-xs"
                >
                  {result.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}