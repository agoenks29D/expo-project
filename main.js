import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import { createRoot } from 'react-dom/client';
import App from './src/App';

if (Platform.OS === 'web') {
    const root = createRoot(document.getElementById('root') ?? document.getElementById('main'));
    root.render(<App />);
} else {
    registerRootComponent(App);
}
