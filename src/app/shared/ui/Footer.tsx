export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} clay.log. All rights reserved.</p>
      </div>
    </footer>
  );
}
