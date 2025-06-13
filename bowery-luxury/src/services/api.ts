import { supabase } from '../lib/supabase';
import type { 
  Contact, 
  Project, 
  ServicePackage, 
  Contract, 
  Payment,
  CommunicationLog,
  EmailTemplate,
  OnboardingStep,
  ProjectMilestone
} from '../lib/supabase';

const API_URL = import.meta.env.VITE_API_URL || 'https://bowerycreative-backend.onrender.com';
const API_KEY = import.meta.env.VITE_API_KEY || '';

// API Client with authentication and error handling
class APIClient {
  private baseURL: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseURL = API_URL;
    this.headers = {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY,
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(`${this.baseURL}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: this.headers,
    });

    return this.handleResponse<T>(response);
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    });

    return this.handleResponse<T>(response);
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data),
    });

    return this.handleResponse<T>(response);
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'DELETE',
      headers: this.headers,
    });

    return this.handleResponse<T>(response);
  }
}

const apiClient = new APIClient();

// Contact Management API
export const contactsAPI = {
  // Create a new contact with lead scoring
  async create(contact: Omit<Contact, 'id' | 'created_at' | 'updated_at'>): Promise<Contact> {
    return apiClient.post<Contact>('/api/contacts', contact);
  },

  // Get all contacts with filtering
  async getAll(filters?: {
    status?: string;
    leadScoreMin?: number;
    assignedTo?: string;
    tags?: string[];
  }): Promise<Contact[]> {
    return apiClient.get<Contact[]>('/api/contacts', filters);
  },

  // Get single contact
  async getById(id: string): Promise<Contact> {
    return apiClient.get<Contact>(`/api/contacts/${id}`);
  },

  // Update contact
  async update(id: string, updates: Partial<Contact>): Promise<Contact> {
    return apiClient.put<Contact>(`/api/contacts/${id}`, updates);
  },

  // Calculate lead score
  async calculateLeadScore(contactId: string): Promise<{ score: number; factors: Record<string, number> }> {
    return apiClient.post(`/api/contacts/${contactId}/calculate-lead-score`);
  },

  // Schedule follow-up
  async scheduleFollowUp(contactId: string, followUpDate: string, notes?: string): Promise<void> {
    return apiClient.post(`/api/contacts/${contactId}/schedule-follow-up`, { followUpDate, notes });
  }
};

// Onboarding API
export const onboardingAPI = {
  // Start onboarding process
  async startOnboarding(contactId: string): Promise<{ projectId: string; steps: OnboardingStep[] }> {
    return apiClient.post('/api/onboarding/start', { contactId });
  },

  // Get onboarding status
  async getStatus(contactId: string): Promise<{
    currentStep: OnboardingStep;
    completedSteps: number;
    totalSteps: number;
    progress: number;
  }> {
    return apiClient.get(`/api/onboarding/status/${contactId}`);
  },

  // Complete onboarding step
  async completeStep(stepId: string, data: any): Promise<OnboardingStep> {
    return apiClient.post(`/api/onboarding/steps/${stepId}/complete`, data);
  },

  // Skip step
  async skipStep(stepId: string, reason?: string): Promise<OnboardingStep> {
    return apiClient.post(`/api/onboarding/steps/${stepId}/skip`, { reason });
  },

  // Get all steps for a contact
  async getSteps(contactId: string): Promise<OnboardingStep[]> {
    return apiClient.get(`/api/onboarding/contacts/${contactId}/steps`);
  }
};

// Email Automation API
export const emailAPI = {
  // Send email using template
  async sendEmail(templateId: string, to: string, variables: Record<string, any>): Promise<{
    success: boolean;
    messageId: string;
  }> {
    return apiClient.post('/api/emails/send', {
      templateId,
      to,
      variables
    });
  },

  // Send custom email
  async sendCustomEmail(data: {
    to: string;
    subject: string;
    html: string;
    text?: string;
    cc?: string[];
    bcc?: string[];
  }): Promise<{ success: boolean; messageId: string }> {
    return apiClient.post('/api/emails/send-custom', data);
  },

  // Get email templates
  async getTemplates(category?: string): Promise<EmailTemplate[]> {
    return apiClient.get('/api/emails/templates', { category });
  },

  // Create email template
  async createTemplate(template: Omit<EmailTemplate, 'id' | 'created_at' | 'updated_at'>): Promise<EmailTemplate> {
    return apiClient.post('/api/emails/templates', template);
  },

  // Update template
  async updateTemplate(id: string, updates: Partial<EmailTemplate>): Promise<EmailTemplate> {
    return apiClient.put(`/api/emails/templates/${id}`, updates);
  },

  // Get email logs for contact
  async getContactEmails(contactId: string): Promise<CommunicationLog[]> {
    return apiClient.get(`/api/emails/contacts/${contactId}/logs`);
  }
};

// Service Packages API
export const servicesAPI = {
  // Get all active service packages
  async getPackages(category?: string): Promise<ServicePackage[]> {
    return apiClient.get('/api/services/packages', { category, isActive: true });
  },

  // Get package details
  async getPackageById(id: string): Promise<ServicePackage> {
    return apiClient.get(`/api/services/packages/${id}`);
  },

  // Calculate custom quote
  async calculateQuote(data: {
    packageIds: string[];
    customServices?: string[];
    urgency?: string;
    complexity?: string;
  }): Promise<{
    basePrice: number;
    adjustments: Record<string, number>;
    totalPrice: number;
    estimatedHours: number;
    estimatedDuration: string;
  }> {
    return apiClient.post('/api/services/calculate-quote', data);
  }
};

// Contract Management API
export const contractsAPI = {
  // Generate contract from template
  async generateContract(data: {
    projectId: string;
    contactId: string;
    templateId?: string;
    customTerms?: string;
  }): Promise<Contract> {
    return apiClient.post('/api/contracts/generate', data);
  },

  // Send contract for signing
  async sendForSigning(contractId: string): Promise<{
    success: boolean;
    signingUrl: string;
  }> {
    return apiClient.post(`/api/contracts/${contractId}/send`);
  },

  // Record signature
  async recordSignature(contractId: string, signatureData: {
    signatureImage?: string;
    ipAddress: string;
    signedAt: string;
  }): Promise<Contract> {
    return apiClient.post(`/api/contracts/${contractId}/sign`, signatureData);
  },

  // Get contracts for project
  async getProjectContracts(projectId: string): Promise<Contract[]> {
    return apiClient.get(`/api/contracts/projects/${projectId}`);
  }
};

// Payment Processing API
export const paymentsAPI = {
  // Create payment intent
  async createPaymentIntent(data: {
    amount: number;
    currency?: string;
    projectId: string;
    description?: string;
  }): Promise<{
    clientSecret: string;
    paymentIntentId: string;
  }> {
    return apiClient.post('/api/payments/create-intent', data);
  },

  // Process payment
  async processPayment(paymentIntentId: string): Promise<Payment> {
    return apiClient.post(`/api/payments/process/${paymentIntentId}`);
  },

  // Get payment history
  async getPaymentHistory(projectId: string): Promise<Payment[]> {
    return apiClient.get(`/api/payments/projects/${projectId}`);
  },

  // Create invoice
  async createInvoice(data: {
    projectId: string;
    items: { description: string; amount: number }[];
    dueDate?: string;
  }): Promise<{
    invoiceId: string;
    invoiceUrl: string;
    amount: number;
  }> {
    return apiClient.post('/api/payments/invoices', data);
  }
};

// Project Management API
export const projectsAPI = {
  // Create project
  async createProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<Project> {
    return apiClient.post('/api/projects', project);
  },

  // Update project
  async updateProject(id: string, updates: Partial<Project>): Promise<Project> {
    return apiClient.put(`/api/projects/${id}`, updates);
  },

  // Get project details with milestones
  async getProjectWithMilestones(id: string): Promise<{
    project: Project;
    milestones: ProjectMilestone[];
    progress: number;
  }> {
    return apiClient.get(`/api/projects/${id}/details`);
  },

  // Update milestone
  async updateMilestone(milestoneId: string, updates: Partial<ProjectMilestone>): Promise<ProjectMilestone> {
    return apiClient.put(`/api/projects/milestones/${milestoneId}`, updates);
  },

  // Complete milestone
  async completeMilestone(milestoneId: string, deliverableUrls?: string[]): Promise<ProjectMilestone> {
    return apiClient.post(`/api/projects/milestones/${milestoneId}/complete`, { deliverableUrls });
  }
};

// Analytics API
export const analyticsAPI = {
  // Get dashboard metrics
  async getDashboardMetrics(): Promise<{
    totalContacts: number;
    activeProjects: number;
    revenue: { total: number; monthly: number; growth: number };
    conversionRate: number;
    averageProjectValue: number;
    upcomingMilestones: ProjectMilestone[];
  }> {
    return apiClient.get('/api/analytics/dashboard');
  },

  // Get conversion funnel
  async getConversionFunnel(dateRange?: { start: string; end: string }): Promise<{
    stages: { name: string; count: number; conversionRate: number }[];
  }> {
    return apiClient.get('/api/analytics/funnel', dateRange);
  },

  // Get revenue analytics
  async getRevenueAnalytics(period: 'daily' | 'weekly' | 'monthly' | 'yearly'): Promise<{
    data: { date: string; revenue: number; projects: number }[];
    total: number;
    average: number;
  }> {
    return apiClient.get('/api/analytics/revenue', { period });
  }
};

// Health check
export const healthCheck = async (): Promise<{ status: string; timestamp: string }> => {
  return apiClient.get('/health');
};

// Export the API client for custom endpoints
export { apiClient };