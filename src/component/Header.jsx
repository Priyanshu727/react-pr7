import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="section bg-secondary fw-bold">
        <div className="container text-center">
          <Link className="me-5 fs-3 fw-2 text-decoration-none text-dark" to={"/"}>
            HOME
          </Link>
          <Link className="me-5 fs-3 fw-2 text-decoration-none text-dark" to={"/add"}>
            ADD
          </Link>
        </div>

      </div>
    </>
  );
}
