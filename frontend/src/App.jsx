import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import UploadHub from './pages/UploadHub.jsx';
import ProcessingPage from './pages/ProcessingPage.jsx';
import EditorPage from './pages/EditorPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

function App() {
  return (
    <Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#0f1930',
            color: '#dee5ff',
            border: '1px solid rgba(167, 165, 255, 0.15)',
            borderRadius: '0px',
            fontFamily: 'JetBrains Mono',
            fontSize: '10px',
            textTransform: 'uppercase',
          }
        }}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadHub />} />
          <Route path="/analysis" element={<ProcessingPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
