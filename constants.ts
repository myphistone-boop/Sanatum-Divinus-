import { NavItem, View } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', view: View.HOME },
  { label: 'Découvrir', view: View.HOME, sectionId: 'discover' },
  { label: 'Hommes', view: View.MEN },
  { label: 'Réservation', view: View.HOME, sectionId: 'contact' },
];

export const LOGO_URL = "https://storage.googleapis.com/novelec_assets/Sanatum%20Divinus_V2.png";

export const COLORS = {
  GOLD: '#D9B95E',
  GREEN: '#284033',
  CREAM: '#FFF9EC',
};