"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { 
  Copy, 
  RefreshCcw, 
  KeyRound, 
  Plus, 
  Calendar,
  Building,
  Globe,
  Zap,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import api from "@/lib/axios";
import dayjs from "dayjs";

type ApiKeyInfo = {
  domain: string;
  org_Name: string;
  plan: string;
  expiration_Date: string;
  limit: number;
  createdAt: string;
};

interface ApiKeyResponse {
  message: string;
  apiKey: string;
}

interface RawApiKeyResponse {
  message: string;
  rawApiKey: string;
}

const PLANS = [
  { value: "Free", label: "Free Plan", limit: "500 requests/month", color: "bg-slate-100 text-slate-700" },
  { value: "Basic", label: "Basic Plan", limit: "5,000 requests/month", color: "bg-blue-100 text-blue-700" },
  { value: "Pro", label: "Pro Plan", limit: "50,000 requests/month", color: "bg-purple-100 text-purple-700" },
  { value: "Enterprise", label: "Enterprise Plan", limit: "Unlimited requests", color: "bg-gold-100 text-gold-700" }
];

export default function ApiKeyPage() {
  const [apiKey, setApiKey] = useState<ApiKeyInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const [renewing, setRenewing] = useState(false);
  
  // Modal states
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [regenerateModalOpen, setRegenerateModalOpen] = useState(false);
  const [renewModalOpen, setRenewModalOpen] = useState(false);
  const [keyDisplayModalOpen, setKeyDisplayModalOpen] = useState(false);
  
  // Form states
  const [newApiKey, setNewApiKey] = useState("");
  const [domain, setDomain] = useState("");
  const [orgName, setOrgName] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("Free");

  const { token, user, logout, isLoading, isAuthenticated } = useAuth()
  const router = useRouter()
  

  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.push("/login")
  }, [isLoading, isAuthenticated])

  if (!token || !user) return null
  if (isLoading) return <div>Loading...</div>

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  
  const fetchApiKey = async () => {
    setLoading(true);
    try {
      const res = await api.get("/ApiKey/GetApiInfo");
      setApiKey(res.data as ApiKeyInfo);
    } catch (err: any) {
      if (err.response?.status !== 404) {
        toast({ 
          title: "Error", 
          description: err.response?.data?.Message || err.message, 
          variant: "destructive" 
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiKey();
  }, []);

  const handleCreate = async () => {
    if (!domain || !orgName) {
      toast({ 
        title: "Validation Error", 
        description: "Please fill in all required fields", 
        variant: "destructive" 
      });
      return;
    }
    
    setCreating(true);
    try {
      const res = await api.post<ApiKeyResponse>("/ApiKey/create", {
        Domain: domain,
        Org_Name: orgName,
        Plan: selectedPlan,
        Org_Email: "user@example.com",
      });
      
      setNewApiKey(res.data.apiKey);
      setCreateModalOpen(false);
      setKeyDisplayModalOpen(true);
      
      toast({ 
        title: "Success", 
        description: "API key created successfully! Please store it securely.",
        duration: 5000
      });
      
      // Reset form
      setDomain("");
      setOrgName("");
      setSelectedPlan("Free");
      
      fetchApiKey();
    } catch (err: any) {
      toast({ 
        title: "Error", 
        description: err.response?.data?.Message || err.message, 
        variant: "destructive" 
      });
    } finally {
      setCreating(false);
    }
  };

  const handleRegenerate = async () => {
    setRegenerating(true);
    try {
      const res = await api.post<RawApiKeyResponse>("/ApiKey/regenerate");
      setNewApiKey(res.data.rawApiKey);
      setRegenerateModalOpen(false);
      setKeyDisplayModalOpen(true);
      
      toast({ 
        title: "Success", 
        description: "API key regenerated successfully! Your old key is now invalid.",
        duration: 5000
      });
      
      fetchApiKey();
    } catch (err: any) {
      toast({ 
        title: "Error", 
        description: err.response?.data?.Message || err.message, 
        variant: "destructive" 
      });
    } finally {
      setRegenerating(false);
    }
  };

  const handleRenew = async () => {
    setRenewing(true);
    try {
      const res = await api.post("/ApiKey/renew", { Plan: selectedPlan });
      setRenewModalOpen(false);
      
      toast({ 
        title: "Success", 
        description: `Plan updated to ${selectedPlan} successfully!`,
        duration: 5000
      });
      
      fetchApiKey();
    } catch (err: any) {
      toast({ 
        title: "Error", 
        description: err.response?.data?.Message || err.message, 
        variant: "destructive" 
      });
    } finally {
      setRenewing(false);
    }
  };

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({ 
      title: "Copied!", 
      description: "API Key copied to clipboard",
      duration: 2000
    });
  };

  const getPlanDetails = (planName: string) => {
    return PLANS.find(p => p.value === planName) || PLANS[0];
  };

  const isExpiringSoon = (expirationDate: string) => {
    return dayjs(expirationDate).diff(dayjs(), 'days') <= 7;
  };

  return (
    <div className="container mx-auto p-6 space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <KeyRound className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">API Key Management</h1>
          <p className="text-muted-foreground">Manage your API keys and subscription plans</p>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
        </Card>
      ) : apiKey ? (
        <>
          {/* Existing API Key Card */}
          <Card className="border-2">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Active API Key
                </CardTitle>
                <Badge 
                  className={`${getPlanDetails(apiKey.plan).color} border-0`}
                  variant="secondary"
                >
                  {apiKey.plan} Plan
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Organization</p>
                      <p className="text-sm text-muted-foreground">{apiKey.org_Name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Domain</p>
                      <p className="text-sm text-muted-foreground">{apiKey.domain}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Request Limit</p>
                      <p className="text-sm text-muted-foreground">{apiKey.limit?.toLocaleString() || 'N/A'} requests</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Expires</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">
                          {dayjs(apiKey.expiration_Date).format("MMM DD, YYYY")}
                        </p>
                        {isExpiringSoon(apiKey.expiration_Date) && (
                          <Badge variant="destructive" className="text-xs">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Expiring Soon
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex gap-2">
                {/* Regenerate API Key */}
                <Dialog open={regenerateModalOpen} onOpenChange={setRegenerateModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <RefreshCcw className="mr-2 h-4 w-4" />
                      Regenerate Key
                    </Button>
                  </DialogTrigger>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <RefreshCcw className="h-5 w-5" />
                            Regenerate API Key
                          </DialogTitle>
                          <DialogDescription className="space-y-2">
                            <p>This will generate a new API key and invalidate your current one.</p>
                            <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200">
                              <p className="text-sm text-yellow-800 font-medium">
                                ⚠️ Warning: Your current API key will stop working immediately
                              </p>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="gap-2">
                          <Button 
                            variant="outline" 
                            onClick={() => setRegenerateModalOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button 
                            onClick={handleRegenerate}
                            disabled={regenerating}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            {regenerating ? "Regenerating..." : "Yes, Regenerate"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </AlertDialogTrigger>
                  </AlertDialog>
                </Dialog>

                {/* Renew/Upgrade Plan */}
                <Dialog open={renewModalOpen} onOpenChange={setRenewModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Zap className="mr-2 h-4 w-4" />
                      Change Plan
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Change Subscription Plan</DialogTitle>
                      <DialogDescription>
                        Select a new plan for your API key
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="plan-select">Choose Plan</Label>
                        <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a plan" />
                          </SelectTrigger>
                          <SelectContent>
                            {PLANS.map((plan) => (
                              <SelectItem key={plan.value} value={plan.value}>
                                <div className="flex flex-col">
                                  <span className="font-medium">{plan.label}</span>
                                  <span className="text-xs text-muted-foreground">{plan.limit}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <DialogFooter className="gap-2">
                      <Button 
                        variant="outline" 
                        onClick={() => setRenewModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleRenew}
                        disabled={renewing}
                      >
                        {renewing ? "Updating..." : "Update Plan"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {/* No API Key State */}
          <Card className="border-dashed border-2">
            <CardContent className="flex flex-col items-center justify-center py-10 text-center">
              <div className="p-4 bg-muted/50 rounded-full mb-4">
                <KeyRound className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No API Key Found</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Create your first API key to start using our services. It only takes a minute to get started.
              </p>
              
              {/* Create API Key Button */}
              <Dialog open={createModalOpen} onOpenChange={setCreateModalOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create API Key
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Create New API Key</DialogTitle>
                    <DialogDescription>
                      Fill in your organization details to generate your API key
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="domain">Domain *</Label>
                      <Input
                        id="domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="example.com"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="orgName">Organization Name *</Label>
                      <Input
                        id="orgName"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="My Organization"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="plan">Plan</Label>
                      <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent>
                          {PLANS.map((plan) => (
                            <SelectItem key={plan.value} value={plan.value}>
                              <div className="flex flex-col">
                                <span className="font-medium">{plan.label}</span>
                                <span className="text-xs text-muted-foreground">{plan.limit}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <DialogFooter className="gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => setCreateModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleCreate}
                      disabled={creating}
                    >
                      {creating ? "Creating..." : "Create API Key"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </>
      )}

      {/* API Key Display Modal */}
      <Dialog open={keyDisplayModalOpen} onOpenChange={setKeyDisplayModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              API Key Ready
            </DialogTitle>
            <DialogDescription>
              Your API key has been generated successfully. Please store it securely as it won't be shown again.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <Label className="text-sm font-medium mb-2 block">Your API Key</Label>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-background p-2 rounded border text-sm font-mono break-all">
                  {newApiKey}
                </code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(newApiKey)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
              <p className="text-sm text-blue-800">
                💡 <strong>Important:</strong> Save this key securely. For security reasons, you won't be able to see it again.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button onClick={() => setKeyDisplayModalOpen(false)}>
              I've Saved My Key
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}