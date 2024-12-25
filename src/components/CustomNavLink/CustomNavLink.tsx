import React from "react";
import { NavLink } from "react-router-dom";

// Props interface for type safety
interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? "active" : "")}
    style={{ textDecoration: "none" }}
  >
    {children}
  </NavLink>
);

export default CustomNavLink;
