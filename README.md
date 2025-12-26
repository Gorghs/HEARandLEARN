# 🤟 Hear and Learn - Sign Language Translation

A comprehensive sign language translation application with **AI-powered video transcription**.

## ✨ What This Project Does

1. **Video to Sign Language** - Upload videos, automatically transcribe speech, convert subtitles to sign language
2. **Text to Sign Language** - Type or speak text and see sign language animations
3. **Sign Language to Text** - Record sign language and convert to text
4. **Download Transcripts** - Export video transcripts as TXT or SRT files

## 🚀 Quick Start (2 Minutes)

### Option 1: Automated Startup (Recommended)

```bash
# Make sure you have your Google API key
cd gemini-transcribe
echo "GOOGLE_API_KEY=your_key_here" > .env
cd ..

# Start everything with one command
./start-project.sh
```

Then open: **http://localhost:4200**

### Option 2: Manual Startup

**Terminal 1 - Start Transcription Service:**

```bash
cd gemini-transcribe
npm install
echo "GOOGLE_API_KEY=your_key_here" > .env
npm run dev
```

**Terminal 2 - Start Main App:**

```bash
npm install
npm start
```

Then open: **http://localhost:4200**

## 📋 Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **Google API Key** for Gemini AI ([Get it here](https://makersuite.google.com/app/apikey))

## 🎯 Key Features

✅ **AI Video Transcription** - Powered by Google Gemini AI
✅ **Real-time Progress** - See transcription progress live
✅ **Multi-format Support** - MP4, AVI, MOV, MP3, WAV, etc.
✅ **Timestamp Sync** - Subtitles synced with video playback
✅ **Speaker Detection** - Identifies different speakers
✅ **Download Options** - TXT and SRT subtitle formats
✅ **Mobile Support** - Works on iOS and Android
✅ **Multiple Languages** - English, Spanish, French, German, and more

## 📚 Complete Documentation

For detailed information, see:

- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete project overview and setup
- **[QUICKSTART_VIDEO_TRANSCRIPTION.md](QUICKSTART_VIDEO_TRANSCRIPTION.md)** - 5-minute video integration guide
- **[VIDEO_TRANSCRIPTION_INTEGRATION.md](VIDEO_TRANSCRIPTION_INTEGRATION.md)** - Detailed technical documentation
- **[README_VIDEO_INTEGRATION.md](README_VIDEO_INTEGRATION.md)** - Quick reference guide

## 🏗️ Project Structure

```
translate-master/
├── src/app/                    # Main Angular application
│   ├── core/
│   │   ├── services/          # Video transcription service
│   │   └── config/            # Configuration
│   ├── pages/                 # UI components
│   └── modules/               # Feature modules
│
├── gemini-transcribe/         # Video transcription backend
│   ├── src/routes/api/       # API endpoints
│   └── .env                  # API keys (you create this)
│
└── Documentation/
    ├── PROJECT_SUMMARY.md
    ├── QUICKSTART_VIDEO_TRANSCRIPTION.md
    └── VIDEO_TRANSCRIPTION_INTEGRATION.md
```

## 🎬 Usage Example

```typescript
// Upload and transcribe a video
import { VideoTranscriptionService } from './core/services/video-transcription.service';

constructor(private transcription: VideoTranscriptionService) {
  // Listen for transcript results
  this.transcription.transcript$.subscribe(transcript => {
    const text = this.transcription.getTranscriptText(transcript);
    // Convert to sign language
    this.convertToSignLanguage(text);
  });
}
```

## 🛠️ Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Build mobile apps
npx cap sync android
npx cap sync ios
```

## 🌐 Supported Formats

**Video:** MP4, AVI, MOV, WebM, QuickTime (max 512MB)
**Audio:** MP3, WAV, M4A, OGG (max 512MB)
**Languages:** English, Spanish, French, German, Italian, Portuguese, and more

## 🐛 Troubleshooting

### Service not starting?

```bash
# Check if ports are free
lsof -ti:4200 -ti:5173

# Check if API key is set
cat gemini-transcribe/.env
```

### Need help?

1. Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for detailed troubleshooting
2. Review console logs: `app.log` and `transcribe.log`
3. Ensure both services are running on correct ports

## 🚀 Production Deployment

See [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for complete deployment instructions.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

See [LICENSE.md](LICENSE.md)

---

**Ready to start?** Run `./start-project.sh` and open http://localhost:4200 🎉
