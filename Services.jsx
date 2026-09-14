import React from "react";

const Services = () => {
  const services = [
    {
      title: "Circulation",
      desc: "Issue and return of books for students and faculty members."
    },
    {
      title: "Reference Assistance",
      desc: "Help in locating books, journals, and other reference materials."
    },
    {
      title: "E-Library Access",
      desc: "Access to online databases, journals, and digital books."
    },
    {
      title: "Reprographic Services",
      desc: "Photocopying and printing services available at nominal cost."
    },
    {
      title: "Book Bank Facility",
      desc: "Semester-long issue of textbooks for financially weaker students."
    },
    {
      title: "Digital Laboratory",
      desc: "Digitization of rare books and access to digital learning tools."
    },
    {
      title: "Internet & Wi-Fi",
      desc: "High-speed Wi-Fi access for students and faculty throughout the library."
    },
    {
      title: "Seating Arrangement",
      desc: "Spacious seating for 180 students in a well-ventilated reading area."
    },
    {
      title: "Charging Facility",
      desc: "Every table includes charging ports for laptops and mobile devices."
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-success">Library Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
