import { useState } from "react";
import { X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface AttackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { accessKey: string; secretKey: string; region: string }) => void;
}

export function AttackModal({ isOpen, onClose, onSubmit }: AttackModalProps) {
  const [formData, setFormData] = useState({
    accessKey: "",
    secretKey: "",
    region: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="bg-gradient-subtle p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl font-semibold">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              Run Attack
            </DialogTitle>
            <p className="text-muted-foreground mt-2">
              Configure and run security assessment.
            </p>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="accessKey" className="text-sm font-medium">
              Access Key <span className="text-destructive">*</span>
            </Label>
            <Input
              id="accessKey"
              placeholder="Enter your access key"
              value={formData.accessKey}
              onChange={(e) => setFormData({ ...formData, accessKey: e.target.value })}
              className="h-11"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="secretKey" className="text-sm font-medium">
              Secret Key <span className="text-destructive">*</span>
            </Label>
            <Input
              id="secretKey"
              type="password"
              placeholder="Enter your secret key"
              value={formData.secretKey}
              onChange={(e) => setFormData({ ...formData, secretKey: e.target.value })}
              className="h-11"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="region" className="text-sm font-medium">
              Region <span className="text-destructive">*</span>
            </Label>
            <Input
              id="region"
              placeholder="Enter your region (e.g., us-east-1)"
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              className="h-11"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-11"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="security"
              className="flex-1 h-11"
            >
              Run Attack
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}