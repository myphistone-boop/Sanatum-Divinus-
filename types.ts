import React from 'react';

export enum View {
  HOME = 'HOME',
  DISCOVER = 'DISCOVER',
  MEN = 'MEN',
  ABOUT = 'ABOUT',
  BOOKING = 'BOOKING'
}

export interface NavItem {
  label: string;
  view: View;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}