import React from 'react';

const Education = () => {
  return (
    <section id="education" className="card mb-10">
      <h2 className="text-3xl gradient-text mb-6 text-center">Education</h2>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[hsl(var(--accent-blue))]">M.Sc. in Computer Science – CGPA: 7.5/10</h3>
        <p className="text-[hsl(var(--text-muted))] text-sm">Bharathiar University (Hindusthan College of Arts & Science), Coimbatore | 2020 – 2023</p>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[hsl(var(--accent-blue))]">B.Sc. in Computer Science – CGPA: 6.5/10</h3>
        <p className="text-[hsl(var(--text-muted))] text-sm">Periyar University (Muthayammal College of Arts & Science), Rasipuram | 2018 – 2020</p>
      </div>
    </section>
  );
};

export default Education;