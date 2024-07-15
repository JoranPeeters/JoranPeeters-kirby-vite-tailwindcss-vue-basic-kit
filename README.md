# KVTV-Kirby-Stack

Welcome to the **KVTV-Kirby-Stack**! This stack uses **Kirby CMS**, **Vite**, **Tailwind CSS**, and **Vue.js** for a powerful, modern web development setup.

## Features

- **Kirby CMS**: A flexible and easy-to-use content management system.
- **Vite**: A fast and efficient build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vue.js**: A progressive JavaScript framework for building user interfaces.

## Getting Started

Follow these instructions to get your development environment set up.

### Prerequisites

- Ensure you have a local server running (e.g., Laravel Valet, MAMP, XAMPP).
- PHP installed.
- Node.js and npm installed.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/JoranPeeters/kirby-vite-tailwindcss-vue-plainkit.git
   ```

2. Navigate to the project directory:

   ```sh
   cd kirby-vite-tailwindcss-vue-plainkit
   ```

3. Install PHP dependencies with Composer:

   ```sh
   composer install
   ```
   
### Development

1. Start the Kirby CMS with PHP's built-in server:

   ```sh
   php -S localhost:8000
   ```

2. Open a new terminal and start the Vite development server:

   ```sh
   npm run dev
   ```

3. Open your browser and go to http://localhost:8000 to see the site.

### Building for Production

To build the assets for production, run:

   ```sh
   npm run build
   ```

### Project Structure

```sh
kvtv-kirby-stack/
├── src/
│   ├── assets/
│   │   └── fonts/
│   │       ├── Poppins-Regular.ttf
│   │       └── Poppins-Bold.ttf
│   ├── components/
│   │   └── MyComponent.vue
│   ├── main.js
│   └── tailwind.css
├── site/
│   ├── config/
│   │   ├── config.localhost.php
│   │   └── vite.config.php
│   ├── snippets/
│   │   ├── footer.php
│   │   └── header.php
│   └── templates/
│       └── default.php
├── public/
│   ├── dist/
│   ├── media/
│   ├── .htaccess
│   └── index.php
├── .gitignore
├── composer.json
├── composer.lock
├── package.json
└── vite.config.js
```

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

Enjoy building with the KVTV-Kirby-Stack! If you encounter any issues, feel free to open an issue or submit a pull request.
