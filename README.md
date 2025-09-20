# Serene - Mental Health Support Portal(Prototype)

A comprehensive web application designed to support patients living with bipolar disorder and borderline personality disorder (BPD) and the doctors treating them.

## 🎯 Project Overview

Serene is a secure, user-friendly web application that bridges the gap between patients and healthcare providers in mental health care. The platform enables effective mood tracking, symptom monitoring, and secure communication while maintaining the highest standards of privacy and security.

## ✨ Key Features

### Patient Features
- **Mood Tracking**: Daily mood logging with comprehensive symptom tracking
- **Questionnaire System**: Complete doctor-assigned assessments
- **Secure Messaging**: Direct communication with healthcare providers
- **Resource Library**: Access to mental health articles and self-help tools
- **Risk Alerts**: Immediate notifications for concerning symptoms
- **Data Privacy**: Full control over personal data sharing and export

### Doctor Features
- **Patient Management**: Comprehensive patient roster and profiles
- **Questionnaire Builder**: Create custom assessments and surveys
- **Analytics Dashboard**: Monitor patient progress and practice metrics
- **Communication Hub**: Secure messaging with patients
- **Risk Monitoring**: Real-time alerts for high-risk situations

## 🏗️ Architecture

This project contains a complete frontend implementation built with modern web technologies:

- **React 19** with functional components and hooks
- **React Router** for client-side routing
- **Tailwind CSS** for responsive, accessible styling
- **Context API** for state management
- **Component-based architecture** for maintainability

## 🚀 Quick Start

1. Navigate to the frontend directory:
```bash
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

4. Open `http://localhost:5173` in your browser

## 🔐 Demo Access

**Patient Account:**
- Email: `patient@demo.com`
- Password: `password123`

**Doctor Account:**
- Email: `doctor@demo.com`
- Password: `password123`

## 📁 Project Structure

```
SERENE-/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/         # React contexts for state management
│   │   ├── pages/           # Page components
│   │   └── App.jsx          # Main application component
│   ├── public/              # Static assets
│   ├── package.json         # Dependencies and scripts
│   └── README.md           # Detailed frontend documentation
└── LICENSE                  # Project license
```

## 🛡️ Security & Privacy

- **HIPAA Compliant**: Designed with healthcare privacy regulations in mind
- **End-to-End Encryption**: Secure data transmission and storage
- **Role-Based Access**: Separate interfaces for patients and doctors
- **Privacy Controls**: Granular data sharing preferences
- **Data Export**: Patient control over personal data

## 🎨 Design Philosophy

The application follows a patient-centered design approach:
- **Calming Color Palette**: Emerald and teal tones for a soothing experience
- **Accessible Interface**: WCAG compliant with proper contrast and navigation
- **Responsive Design**: Works seamlessly across all devices
- **Intuitive Navigation**: Clear, logical user flows

## 🔧 Technology Stack

- **Frontend**: React 19.1.1, React Router DOM 7.9.1
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: React Icons 5.5.0
- **Build Tool**: Vite 7.1.6
- **Development**: ESLint 9.35.0

## 📊 Features Implementation Status

✅ **Completed Features:**
- User authentication and role-based routing
- Patient and doctor dashboards
- Mood tracking with analytics
- Questionnaire system (creation and completion)
- Secure messaging system
- Mental health resources library
- Risk alert system
- Data privacy controls and export

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd SERENE-
```

2. **Navigate to frontend directory**
```bash
cd frontend
```

3. **Install dependencies**
```bash
npm install
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
Navigate to `http://localhost:5173`

## 📱 Usage

### For Patients
1. Sign up or log in with patient credentials
2. Access the mood tracker to log daily entries
3. Complete assigned questionnaires
4. Communicate with your healthcare provider
5. Access mental health resources
6. Manage privacy settings

### For Doctors
1. Log in with doctor credentials
2. View and manage patient roster
3. Create custom questionnaires
4. Monitor patient progress through analytics
5. Communicate with patients
6. Respond to risk alerts

## 🔮 Future Enhancements

- Backend API integration
- Real-time notifications
- Video consultation features
- Mobile application
- Advanced analytics and AI insights
- Integration with wearable devices
- Multi-language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines and code of conduct.

## 📞 Support

For support, questions, or feedback:
- Create an issue in the repository
- Contact the development team
- Review the detailed documentation in `/frontend/README.md`

---

**Note**: This is a frontend-only implementation demonstrating the complete user interface and user experience. In a production environment, integration with a secure backend API would be required for data persistence, real-time features, and advanced security measures.
