import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-4">
      <div className="container">
        <div>
          <h1 className="font-semibold text-3xl text-secondary">BankWorth</h1>
        </div>
        <div className="flex pt-4 text-2xl text-secondary justify-between">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 pt-8">
          <div>
            <h6 className="uppercase text-sm text-secondary">
              Buying Experience
            </h6>
            <ul>
              <li className="pb-2">Buying A Yacht</li>
              <li className="pb-2">Selling A Yacht</li>
              <li className="pb-2">Research</li>
              <li className="pb-2">Marine Services</li>
            </ul>
          </div>

          <div>
            <h6 className="uppercase text-sm text-secondary">Solution</h6>
            <ul>
              <li className="pb-2">Pricing</li>
              <li className="pb-2">Marketing</li>
              <li className="pb-2">Commerce</li>
              <li className="pb-2">Insights</li>
            </ul>
          </div>

          <div>
            <h6 className="uppercase text-sm text-secondary">Support</h6>
            <ul>
              <li className="pb-2">Help</li>
              <li className="pb-2">Advertise With Us</li>
              <li className="pb-2">Media Kit</li>
              <li className="pb-2">Membership</li>
            </ul>
          </div>

          <div>
            <h6 className="uppercase text-sm text-secondary">Company</h6>
            <ul>
              <li className="pb-2">About</li>
              <li className="pb-2">Blog</li>
              <li className="pb-2">Jobs</li>
              <li className="pb-2">Career</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center pt-8 text-secondary">
        Copyright &copy; 2024 BankWorth Boats All Reserved
      </p>
    </footer>
  );
};

export default Footer;
