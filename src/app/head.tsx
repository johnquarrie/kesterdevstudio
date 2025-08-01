export default function Head() {
  return (
    <>
      <title>Kester Dev Studio</title>
      <meta
        name="description"
        content="Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses."
      />
      {/* Open Graph */}
      <meta property="og:title" content="Kester Dev Studio" />
      <meta
        property="og:description"
        content="Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses."
      />
      <meta
        property="og:image"
        content="https://www.kesterdevstudio.com/kester-logo.png?v=3"
      />
      <meta property="og:url" content="https://www.kesterdevstudio.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Kester Dev Studio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kester Dev Studio" />
      <meta
        name="twitter:description"
        content="Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses."
      />
      <meta
        name="twitter:image"
        content="https://www.kesterdevstudio.com/kester-logo.png?v=3"
      />
    </>
  );
}
