import React from 'react';

export enum View {
  HOME = 'HOME',
  MEN = 'MEN',
  DISCOVER = 'DISCOVER',
  BOOKING = 'BOOKING'
}

export interface NavItem {
  label: string;
  view: View;
  sectionId?: string; // ID pour le scroll automatique
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}