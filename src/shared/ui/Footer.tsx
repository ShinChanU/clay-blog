export const Footer = () => {
  return (
    <footer className="bg-muted py-4 text-muted-foreground">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} clay.log. All rights reserved.</p>
      </div>
    </footer>
  );
};
