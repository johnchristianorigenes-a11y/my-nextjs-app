import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f4f5",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px 35px",
          borderRadius: "20px",
          maxWidth: "550px",
          width: "100%",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#171717",
            marginBottom: "15px",
          }}
        >
          Welcome to My Website!
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#525252",
            lineHeight: "1.6",
          }}
        >
          Hello! I'm John Christian Origenes.
          <br />
          This is my first Next.js project deployed using Vercel.
        </p>

        <div
          style={{
            marginTop: "25px",
            background: "#171717",
            color: "white",
            padding: "12px 25px",
            borderRadius: "8px",
            display: "inline-block",
          }}
        >
          Next.js + Vercel
        </div>
      </div>

      <p style={{ color: "#737373", marginTop: "25px" }}>
        © 2026 John Christian Origenes
      </p>
    </main>
  );
}
