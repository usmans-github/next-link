# Next-Link

A simple and efficient URL shortening service built with Next.js. Next-Link allows users to transform long URLs into compact, shareable links, with a clean and responsive UI.

## Features

- **Shorten URLs**: Quickly convert long links into short, user-friendly URLs.  
- **Customizable Aliases**: Option to specify your own custom alias for the shortened link.  
- **Analytics**: Track the number of clicks on your shortened URLs (coming soon).  
- **Responsive Design**: Optimized for both desktop and mobile devices.  

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)  
- **Database**: MongoDB  
- **Backend**: Node.js, Express  
- **Styling**: Tailwind CSS  

## Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/usmans-github/next-link.git
   cd next-link
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up your environment variables:  
   Create a `.env.local` file in the root directory and add the following:  
   ```env
   MONGO_URI=<Your MongoDB connection string>
   BASE_URL=<Your base URL, e.g., http://localhost:3000>
   ```

4. Start the development server:  
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. Enter a long URL into the input field.
2. (Optional) Provide a custom alias for your shortened link.
3. Click the "Shorten" button to generate your shortened link.
4. Copy and share the link as needed.

## Contributing

Contributions are welcome! Please follow these steps to contribute:  

1. Fork the repository.  
2. Create a feature branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push your branch:  
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/) for providing a robust React framework.
- [Tailwind CSS](https://tailwindcss.com/) for elegant and efficient styling.

## Contact

For questions or suggestions, feel free to contact me:  
- **GitHub**: [Usman's GitHub](https://github.com/usmans-github)  
- **Portfolio**: [Usman's Portfolio](https://usmans-portfolio.vercel.app)
