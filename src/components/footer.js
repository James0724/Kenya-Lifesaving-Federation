import React from "react"

export default function Footer() {
  return (
    <section id="footer">
      <div className="container-fluid">
        <p className="text-center p-3">
          Kenya Lifesaving Federation &copy; {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
