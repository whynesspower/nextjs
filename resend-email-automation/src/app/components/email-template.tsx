import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
    <h1 style={{ color: '#3d5a80' }}>Welcome, {firstName}!</h1>
    <p style={{ color: '#98c1d9' }}>
      We&apos;re excited to have you with us. Feel free to reach out if you need any help.
    </p>
  </div>
);
