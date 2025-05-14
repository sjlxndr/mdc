# Markdown Converter (MDC)

A browser-based Markdown editor and HTML converter with live preview, installable as a Progressive Web App (PWA) for offline use.

## Features

- **Live Preview**: See your Markdown rendered as HTML in real-time
- **Progressive Web App (PWA)**: Install on your device for offline use
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Accessibility First**: Fully keyboard navigable with ARIA support for screen readers
- **Responsive Design**: Works on desktop and mobile with a tabbed interface for small screens
- **Adjustable Split View**: Resize panels with mouse drag or keyboard controls
- **Export Options**: Save as HTML or Markdown
- **Copy to Clipboard**: Copy formatted HTML with clean styling
- **Print Support**: Print your document directly from the app
- **Footnotes**: Full support for Markdown footnotes with multi-paragraph content
- **Local Storage**: Content persists between sessions
- **Secure Content Handling**: HTML sanitization using DOMPurify to prevent XSS attacks
- **Offline Capable**: Works without an internet connection after initial load

## Usage

You can use Markdown Converter in multiple ways:

1. **Web Version**: Visit the hosted version at [mdc.lxndr.net](mdc.lxndr.net)
2. **PWA Installation**: Click the install button in your browser's address bar to install as a Progressive Web App
3. **Local File**: Download the [`index.html`](https://raw.githubusercontent.com/sjlxndr/mdc/refs/heads/main/index.html) file and open it in any modern web browser
4. **Self-Host**: Place [the files](https://github.com/sjlxndr/mdc) on your own web server

### Basic Operation

1. Type Markdown text in the left panel
2. See the rendered HTML in the right panel (or Preview tab, on mobile)
3. Use the toolbar buttons to switch between light/dark mode
4. Export your document as HTML or Markdown
5. Copy the formatted HTML to paste into other applications
6. Print directly from the app

## Advanced Features

### Keyboard Navigation

Markdown Converter is fully keyboard accessible:

#### Global Shortcuts

  - <kbd>Alt</kbd> + <kbd>E</kbd>: Focus the editor
  - <kbd>Alt</kbd> + <kbd>P</kbd>: Focus the preview
  - <kbd>Alt</kbd> + <kbd>S</kbd>: Focus the splitter
  - <kbd>Alt</kbd> + <kbd>C</kbd>: Copy HTML to clipboard
  - <kbd>Alt</kbd> + <kbd>D</kbd>: Download HTML
  - <kbd>Alt</kbd> + <kbd>X</kbd>: Clear editor content
  - <kbd>Alt</kbd> + <kbd>R</kbd>: Print document
  - <kbd>Alt</kbd> + <kbd>H</kbd>: Open help dialog
  - <kbd>Alt</kbd> + <kbd>T</kbd>: Toggle light/dark theme

#### Splitter Controls (when focused)

  - <kbd>←</kbd>: Decrease editor width
  - <kbd>→</kbd>: Increase editor width
  - <kbd>↑</kbd>: Decrease editor width with bigger steps
  - <kbd>↓</kbd>: Increase editor width with bigger steps
  - <kbd>Home</kbd>: Minimize editor (maximize preview)
  - <kbd>End</kbd>: Maximize editor
  - <kbd>Space</kbd> or <kbd>Enter</kbd>: Reset to 50/50 split

### Footnotes

Markdown Converter supports footnotes with the following syntax:

```markdown
Here is text with a footnote reference[^1].

[^1]: This is the footnote content.

For multi-paragraph footnotes, indent the additional paragraphs with 4 spaces[^2].

[^2]: First paragraph of the footnote.

    Second paragraph of the footnote.
```

### Progressive Web App Features

As a PWA, Markdown Converter offers:

- **Offline functionality**: Works without an internet connection
- **Updates**: Automatically notifies when new versions are available
- **Installation**: Can be added to your home screen or start menu
- **Native-like experience**: Runs in its own window outside the browser

### Accessibility

- Fully keyboard navigable interface
- ARIA attributes for screen reader compatibility
- High contrast mode support
- Focus management for modals and interactive elements
- Screen reader announcements for dynamic content changes

### Mobile Support

On mobile devices, the interface automatically switches to a tabbed layout with "Editor" and "Preview" tabs for better space utilization.

### Security Features

HTML content is sanitized using DOMPurify to prevent Cross-Site Scripting (XSS) attacks, ensuring safe rendering of HTML generated from Markdown.

## Dependencies

- [Showdown](https://github.com/showdownjs/showdown) (v2.1.0): JavaScript Markdown to HTML converter
- [DOMPurify](https://github.com/cure53/DOMPurify) (v3.2.5): HTML sanitizer for security

All dependencies are loaded via CDN for ease of use.

## Project Structure

- `index.html`: The main application HTML file with embedded CSS and JavaScript
- `manifest.json`: Web app manifest file for PWA functionality
- `service-worker.js`: Service Worker for offline capabilities and updates
- `icons/`: Directory containing various icon sizes for PWA installation

## Browser Compatibility

Markdown Converter should work in any moderb browser - recent versions of:

- Chrome/Edge
- Firefox
- Safari
- Opera
- and derivatives of these.

## Development

To modify or extend Markdown Converter:

1. Clone the repository
2. Make changes to the files as needed
3. Test in a browser with a local server
   ```bash
   # Example using Python's built-in HTTP server
   python -m http.server 8000
   # Then navigate to http://localhost:8000/
   ```
4. For PWA testing, you'll need to use HTTPS or localhost

## License

MIT License

Copyright (c) 2025 Stephen Alexander

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Third-Party Licenses

This software includes third-party components:
- **Showdown** is licensed under the MIT License
- **DOMPurify** is dual-licensed under Apache License 2.0 and Mozilla Public License 2.0
- **linked photo** The photo linked in the example is Copyright Stephen Alexander 2008, [CC BY-NC-ND](https://creativecommons.org/licenses/by-nc-nd/4.0/) - more at [Flickr](https://www.flickr.com/photos/sjalex/)
