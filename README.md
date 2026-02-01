# 🎙️ EchoKhushi Voicebot

A sophisticated voice-enabled chatbot application that combines speech recognition, text-to-speech capabilities, and intelligent conversation handling. Built with modern web technologies and designed for seamless voice interactions.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Voice Input**: Real-time speech recognition for hands-free interaction
- **Text-to-Speech**: Natural voice responses from the bot
- **Interactive Chat Interface**: Clean and intuitive user interface
- **Backend Integration**: Robust backend for processing and managing conversations
- **Responsive Design**: Works seamlessly across different devices and screen sizes
- **Real-time Communication**: Instant voice and text message processing

## 📁 Project Structure

```
echokhushi-voicebot/
├── backend/              # Backend server and API logic
├── frontend/             # Frontend application components
├── index.html           # Main HTML entry point
├── style.css            # Global styles
├── package.json         # Node.js dependencies and scripts
├── package-lock.json    # Locked dependency versions
└── .gitignore          # Git ignore rules
```

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and responsive design
- **JavaScript**: Client-side logic and interactivity
- **Web Speech API**: Speech recognition and synthesis

### Backend
- **Node.js**: Server-side runtime environment
- **Express.js** (likely): Web application framework
- Additional dependencies as specified in package.json

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A modern web browser with Web Speech API support (Chrome, Edge, Safari)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khushi-60/echokhushi-voicebot.git
   cd echokhushi-voicebot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies** (if separate)
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Install frontend dependencies** (if separate)
   ```bash
   cd frontend
   npm install
   cd ..
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   # or
   node server.js
   ```

2. **Start the frontend** (in a new terminal)
   ```bash
   # If using a development server
   npm start
   # or simply open index.html in your browser
   ```

3. **Access the application**
   - Open your browser and navigate to `http://localhost:3000` (or the specified port)
   - Alternatively, open `index.html` directly in your browser

## 💡 Usage

1. **Allow Microphone Access**: When prompted, grant microphone permissions to enable voice input
2. **Start Conversation**: Click the microphone button or "Start" button to begin
3. **Speak Clearly**: Speak your message clearly into the microphone
4. **Receive Response**: Listen to the bot's voice response or read the text reply
5. **Continue Interaction**: Continue the conversation naturally

### Example Interactions

- "Hello, how are you?"
- "What can you help me with?"
- "Tell me a joke"
- "What's the weather like?"

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory for configuration:

```env
PORT=3000
API_KEY=your_api_key_here
# Add other necessary environment variables
```

### API Configuration

If using external APIs (speech services, chatbot APIs), configure them in the backend settings.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Write clear, commented code
- Follow existing code style and conventions
- Test your changes thoroughly
- Update documentation as needed
- Be respectful and constructive in discussions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Khushi** - [@Khushi-60](https://github.com/Khushi-60)

Project Link: [https://github.com/Khushi-60/echokhushi-voicebot](https://github.com/Khushi-60/echokhushi-voicebot)

---

## 🙏 Acknowledgments

- Web Speech API documentation
- Open source community
- All contributors to this project

## 📊 Project Status

This project is currently in active development. Check the [Issues](https://github.com/Khushi-60/echokhushi-voicebot/issues) page for ongoing work and feature requests.

## 🐛 Known Issues

- Check the [Issues](https://github.com/Khushi-60/echokhushi-voicebot/issues) page for current bugs and limitations
- Web Speech API is not supported in all browsers

## 🔮 Future Enhancements

- [ ] Multi-language support
- [ ] Custom voice selection
- [ ] Conversation history
- [ ] User authentication
- [ ] Advanced NLP integration
- [ ] Mobile app version
- [ ] Improved UI/UX

---

**Made with ❤️ by Khushi**
