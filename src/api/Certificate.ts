type Certificate = {
    title: string;
    role: string;
    keterangan: string;
    image: string; 
    link: string;
  };
  
  const Certificate: Certificate[] = [
    {
      title: "DIKTI",
      role: "Front-End Developer",
      keterangan: "Mengerjakan fitur data gaji PPNPN dan import/export data pegawai",
      image: "/assets/Certificate/CertificateMagang.jpg",
      link:""
    },
    {
      title: "Orbit",
      role: "Full-Stack Developer",
      keterangan: "Membuat website portofolio menggunakan Next.js dan Tailwind CSS",
      image: "/assets/Certificate/CertificateStupen.jpg",
      link:""
    },
    {
      title: "Udemy",
      role: "Full-Stack Developer",
      keterangan: "Membuat website portofolio menggunakan Next.js dan Tailwind CSS",
      image: "/assets/Certificate/CertificateUdemy.jpg",
      link:""
    }
  ];
  
  export default Certificate;  