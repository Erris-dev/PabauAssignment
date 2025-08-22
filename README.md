# VibeStrings - Guitar Shop Application

This project is a 3-page guitar shop application built with React and Vite. It demonstrates a modern frontend architecture using Apollo Client to fetch data from a GraphQL API, with a focus on a clean user interface and a smooth, interactive user experience.

This application was created as a submission for the Pabau assignment.

## ✨ Features

-   **Brand Discovery**: A homepage that displays all available guitar brands from the API.
-   **Dynamic Collections Page**: Displays all models for a selected brand.
-   **Advanced Filtering**: Includes a search bar to filter models by name and a dropdown to filter by guitar type (e.g., Acoustic, Electric, Bass).
-   **Efficient Data Loading**: Implements pagination by default and switches to an infinite scroll for a seamless experience when searching.
-   **Detailed Product View**: A dedicated page for each instrument, showing detailed specifications and a list of notable musicians who play it.


## 🛠️ Tech Stack

-   **Framework**: React (with Vite)
-   **Data Fetching**: Apollo Client
-   **API**: GraphQL
-   **Styling**: Tailwind CSS
-   **UI Components**: shadcn/ui
-   **Routing**: React Router

## 🚀 Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- Node.js (v18.x or later is recommended)
- npm

### Installation & Setup

1.  **Clone the repository:**


2.  **Navigate to the client directory:**
    ```sh
    cd client
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will now be running and available at `http://localhost:5173` (or the next available port).

## 🎸 Usage Flow

-   The application opens on the **Homepage**, where you can see a grid of guitar brands.
-   Clicking on any brand logo will navigate you to the **Collections Page**, displaying all the instrument models for that specific brand.
-   Clicking on a product card on the Collections Page will take you to the **Instrument Details Page**, where you can view in-depth information.

test