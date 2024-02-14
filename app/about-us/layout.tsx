export const metadata = {
  title: "About Us",
  description: "The best movies on the best framework",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next Js is GREAT! Thank you for visiting our web sites.
    </div>
  );
}
