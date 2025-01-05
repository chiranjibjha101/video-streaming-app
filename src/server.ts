import app from "./app";
import connectDB from "./config/database";

const PORT = process.env.PORT || 5000;

// Start the server only after MongoDB connects
const startServer = async () => {
  try {
    await connectDB(); // Ensure MongoDB is connected
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to connect to the database. Server not started.");
      console.error(error.message);
    } else {
      console.error("An unknown error occurred.");
    }
    process.exit(1); // Exit with failure code
  }
};

startServer();
