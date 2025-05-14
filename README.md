# Markdown Converter (MDC)

A single-file, browser-based Markdown editor and HTML converter with live preview, dark mode, and export options.

## Features

- **Live Preview**: See your Markdown rendered as HTML in real-time
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Responsive Design**: Works on desktop and mobile with a tabbed interface for small screens
- **Drag to Resize**: Adjustable split view with draggable divider
- **Export Options**: Save as HTML or Markdown
- **Copy to Clipboard**: Copy formatted HTML with clean styling
- **Print Support**: Print your document directly from the app
- **Footnotes**: Full support for Markdown footnotes with multi-paragraph content
- **Local Storage**: Content persists between sessions
- **Completely Offline**: No server or internet connection required after download
- **Self-Contained**: Single HTML file with no external dependencies (except CDN for Showdown library)

## Usage

Simply download the `mdc.html` file and open it in any modern web browser.

1. Type Markdown in the left panel
2. See the rendered HTML in the right panel
3. Use the toolbar buttons to switch between light/dark mode
4. Export your document as HTML or Markdown
5. Copy the formatted HTML to paste into other applications
6. Print directly from the app

## Advanced Features

### Footnotes

Markdown Converter supports footnotes with the following syntax:

```markdown
Here is text with a footnote reference[^1].

[^1]: This is the footnote content.
```

For multi-paragraph footnotes, indent the additional paragraphs with 4 spaces:

```markdown
[^1]: First paragraph of the footnote.
    
    Second paragraph of the footnote.
```

### Mobile Support

On mobile devices, the interface automatically switches to a tabbed layout with "Editor" and "Preview" tabs for better space utilization.

### Clipboard Operations

When copying HTML content, Markdown Converter creates a clean version with appropriate styling for pasting into word processors or other applications. The copied content maintains proper formatting but removes any dark mode styling.

## Dependencies

- [Showdown](https://github.com/showdownjs/showdown) (v2.1.0): JavaScript Markdown to HTML converter, loaded via CDN

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
