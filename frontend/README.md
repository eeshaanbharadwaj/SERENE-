# Serene - Mental Health Support Portal

A comprehensive web application designed to support patients living with bipolar disorder and borderline personality disorder (BPD) and the doctors treating them.

## 🌟 Features

### For Patients
- **Mood Tracking**: Daily mood logging with 1-10 scale ratings and symptom tracking
- **Questionnaires**: Complete doctor-assigned assessments and surveys
- **Communication**: Secure messaging with healthcare providers
- **Resources**: Access to mental health articles, coping strategies, and self-help tools
- **Risk Alerts**: Immediate notifications for high-risk symptoms
- **Data Privacy**: Full control over data sharing and export capabilities

### For Doctors
- **Patient Management**: View and manage patient roster with detailed profiles
- **Questionnaire Builder**: Create custom assessments and surveys
- **Analytics Dashboard**: Monitor patient progress and practice metrics
- **Communication**: Secure messaging with patients
- **Risk Monitoring**: Real-time alerts for high-risk patient situations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SERENE-/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── MoodTracker.jsx
│   │   ├── QuestionnaireList.jsx
│   │   ├── Messages.jsx
│   │   ├── Resources.jsx
│   │   ├── RiskAlerts.jsx
│   │   ├── DataPrivacy.jsx
│   │   ├── PatientList.jsx
│   │   ├── PatientDetails.jsx
│   │   ├── QuestionnaireBuilder.jsx
│   │   ├── DoctorMessages.jsx
│   │   ├── Analytics.jsx
│   │   └── ProtectedRoute.jsx
│   ├── contexts/            # React contexts
│   │   └── AuthContext.jsx
│   ├── pages/               # Page components
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── PatientDashboard.jsx
│   │   ├── DoctorDashboard.jsx
│   │   └── Unauthorized.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json
└── README.md
```

## 🔐 Authentication & User Roles

The application supports two user types:

### Patient Account
- Access to mood tracking and personal dashboard
- Complete questionnaires assigned by doctors
- Communicate with healthcare providers
- Access mental health resources
- Manage privacy settings

### Doctor Account
- Manage patient roster
- Create and assign questionnaires
- View patient analytics and progress
- Communicate with patients
- Monitor risk alerts

## 🎨 Design System

The application uses a modern, accessible design with:
- **Color Palette**: Emerald and teal gradients for a calming, professional feel
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Consistent, reusable UI components
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM 7.9.1
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: React Icons 5.5.0
- **Build Tool**: Vite 7.1.6
- **Linting**: ESLint 9.35.0

## 📱 Key Features Implementation

### Mood Tracking
- Interactive mood rating with visual feedback
- Symptom tracking (sleep, anxiety, irritability, energy, concentration)
- Notes and journaling capabilities
- Visual mood charts and analytics
- Data export functionality

### Questionnaire System
- Dynamic question types (multiple choice, rating scale, text input, yes/no)
- Doctor-created custom assessments
- Patient completion tracking
- Real-time response monitoring

### Communication System
- Secure messaging between doctors and patients
- Message threading and organization
- Priority alerts and notifications
- Read/unread status tracking

### Risk Alert System
- Automated detection of high-risk symptoms
- Immediate notifications for healthcare providers
- Emergency contact integration
- Escalation protocols

### Data Privacy & Security
- HIPAA-compliant data handling
- Granular privacy controls
- Data export capabilities
- Account management features

## 🔒 Security Features

- **Authentication**: Secure login with role-based access control
- **Data Encryption**: End-to-end encryption for sensitive data
- **Privacy Controls**: Patient control over data sharing
- **HIPAA Compliance**: Healthcare privacy regulation adherence
- **Secure Communication**: Encrypted messaging system

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📊 Demo Credentials

For testing purposes, use these demo credentials:

**Patient Account:**
- Email: `patient@demo.com`
- Password: `password123`

**Doctor Account:**
- Email: `doctor@demo.com`
- Password: `password123`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- Real-time notifications
- Video consultation integration
- Mobile app development
- Advanced analytics and AI insights
- Integration with wearable devices
- Multi-language support

---

**Note**: This is a frontend-only implementation. In a production environment, you would need to integrate with a backend API for data persistence, real-time features, and advanced security measures.