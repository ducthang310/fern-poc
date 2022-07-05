import { Metric } from './contants';

export interface AuditTrail {
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
}

export interface ProductVariant {
  packagingType: string;
  volume: string;
  metric: Metric;
  mediaUrls: string[];
}