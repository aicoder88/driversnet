export const CONTACT_EMAIL = 'Nathan@driversnet.io';
export const PARTNERSHIPS_EMAIL = 'Nathan@driversnet.io';
export const CALENDLY_URL = 'https://calendly.com/nathan-driversnet/driver-s-net-inquiry-meeting-1';

export type Contact = {
  role: string;
  name: string;
  email: string;
  phone?: string;
  focus: string;
  icon: string;
};

export const CONTACTS: Contact[] = [
  {
    role: 'General Inquiries',
    name: 'DriversNet Team',
    email: CONTACT_EMAIL,
    phone: '',
    focus: 'Primary contact for questions and coordination',
    icon: '📨',
  },
  {
    role: 'Partnerships',
    name: 'Partnership Team',
    email: PARTNERSHIPS_EMAIL,
    phone: '',
    focus: 'Strategic partnerships and business development',
    icon: '🤝',
  },
  {
    role: 'Request a Quote',
    name: 'Sales',
    email: CONTACT_EMAIL,
    phone: '',
    focus: 'Scope, pricing, and engagement timelines',
    icon: '🧾',
  },
];
