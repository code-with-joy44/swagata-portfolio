# Swagata Sen Joy — Personal Portfolio

A modern, responsive personal portfolio website created to present my professional profile, technical skills, educational background, featured projects, and contact information. The website is built with a focus on clean design, fluid interactions, responsive typography, and a polished user experience.

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- TypeScript
- React

### Styling & Animation
- Tailwind CSS
- Motion
- Lucide React

### Contact Integration
- EmailJS

### Development Tools
- Git
- GitHub
- VS Code
- Vite

---

## Key Features

- **Fully Responsive Design**: Fluid layouts optimized for mobile, tablet, laptop, and desktop viewports.
- **Dark / Light Theme Toggle**: Built-in theme switcher with smooth transitions and persistent state.
- **Modern User Interface**: Clean typography, balanced spacing, and subtle glassmorphic styling.
- **Smooth Scrolling & Animations**: Scroll-based reveal effects and interactive micro-animations.
- **Interactive Project Cards**: Showcases project details, technology stacks, live demonstrations, and source repositories.
- **EmailJS Contact Form**: Client-side message submission with real-time validation and direct inbox delivery.
- **Accessible & User-Friendly**: Semantic HTML structure, intuitive navigation, and high readability.
- **Social Media Integration**: Direct links to professional networks and developer profiles.

---

## Website Sections

### Home
Introduction, professional title, call-to-action buttons, personal photo area, and social links.

### About Me
A short professional introduction and background.

### Educational Background
Current education at Dhaka Polytechnic Institute and SSC information from Dolairpar High School.

### Skills
A categorized presentation of my technical skills.

### Projects
Currently showcases:
- **Scientific Calculator**
- **Travel Agency Website**

### Contact
Contact information and an EmailJS-powered contact form.

---

## EmailJS Contact Form

The contact form enables visitors to send messages directly to a configured email inbox without requiring a custom backend server:

```text
Visitor → Contact Form → EmailJS → Configured Gmail Inbox
```

### Required EmailJS Configuration

Create a `.env` file in the project root with the following keys:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Email Template

The EmailJS template receives the following parameters and forwards them to the configured Gmail inbox:

```text
New Portfolio Contact Message

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

### Setup Steps

1. Create an EmailJS account.
2. Connect the Gmail account as an Email Service.
3. Create an EmailJS email template.
4. Copy the Service ID, Template ID, and Public Key.
5. Add them to the project's environment/configuration file.
6. Restart the development server.
7. Submit a test message through the portfolio contact form.

---

## Project Structure

The project follows a structured frontend architecture with separate components, styles, assets, and configuration.

---

## Design & Responsiveness

The website is designed for:
- Desktop
- Laptop
- Tablet
- Mobile

Key presentation highlights:
- Dark / Light theme
- Responsive layouts
- Smooth animations
- Consistent modern UI

---

## Author

**Swagata Sen Joy**

Computer Science & Technology Student  
Aspiring AI Engineer & Software Developer  

```text
GitHub: https://github.com/code-with-joy44
LinkedIn: https://linkedin.com/in/swagata-sen-joy-253565360
Facebook: https://www.facebook.com/swagata.sen.188
Email: joyswagatasengmail.com
```
