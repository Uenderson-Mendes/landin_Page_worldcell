import "./App.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  // Função para rolar até a seção clicada
  const [menuActive, setMenuActive] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    "https://img.odcdn.com.br/wp-content/uploads/2020/12/Apple_announce-iphone12pro_10132020.jpg",
    "https://img.freepik.com/fotos-premium/tecnico-que-repara-o-interior-do-telefone-celular-com-o-ferro-de-solda_39768-2780.jpg",
    "https://d1ih8jugeo2m5m.cloudfront.net/2022/09/revenda-eletronicos-1200x685.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    // Define o intervalo para trocar as imagens
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Troca a cada 2 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, [images.length]);
  
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };

  return (
    <div>
   <nav className="navbar">
      <div className="logo">
        <img onClick={() => scrollToSection("home")} className="logo_img" src={require("./world.png")} alt="Logo" />
      </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`nav-links ${menuActive ? "active" : ""}`}>
          <button className="button_nav" onClick={() => scrollToSection("contact")}>Contato</button>
          <button className="button_nav" onClick={() => scrollToSection("catalog")}>Catálogo</button>
          <button className="button_nav" onClick={() => scrollToSection("location")}>Localização</button>
        </div>
          </nav>

        {/* Navbar */}
      
      <section id="home"
      className="custom-section"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="center-text">World Cell</h1>
    </section>
      
   {/* Slider de Produtos */}
<section id="catalog" className="section catalogo_image">
  <h2>Produtos em Destaque</h2>
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={3}
    slidesToScroll={1}
    autoplay={true} // Habilita a rotação automática
    autoplaySpeed={3000} // Define o intervalo (3000ms = 3 segundos)
    responsive={[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]}
  >
    
   <div className="product-card">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      className="product-img"
      src="https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/Apple_iPhone_13_Pro_color_lineup_2022.jpg"
      alt="Xiaomi"
    />
    <div className="product-info">
      <h3>Xiaomi</h3>
      <p>Conheça os melhores smartphones da Xiaomi, com tecnologia de ponta e design inovador.</p>
    </div>
  </div>
</div>
<div className="product-card">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      className="product-img"
      src="https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/Apple_iPhone_13_Pro_color_lineup_2022.jpg"
      alt="Xiaomi"
    />
    <div className="product-info">
      <h3>Xiaomi</h3>
      <p>Conheça os melhores smartphones da Xiaomi, com tecnologia de ponta e design inovador.</p>
    </div>
  </div>
</div>
<div className="product-card">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      className="product-img"
      src="https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/Apple_iPhone_13_Pro_color_lineup_2022.jpg"
      alt="Xiaomi"
    />
    <div className="product-info">
      <h3>Xiaomi</h3>
      <p>Conheça os melhores smartphones da Xiaomi, com tecnologia de ponta e design inovador.</p>
    </div>
  </div>
</div>
<div className="product-card">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      className="product-img"
      src="https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/Apple_iPhone_13_Pro_color_lineup_2022.jpg"
      alt="Xiaomi"
    />
    <div className="product-info">
      <h3>Xiaomi</h3>
      <p>Conheça os melhores smartphones da Xiaomi, com tecnologia de ponta e design inovador.</p>
    </div>
  </div>
</div>


  </Slider>
</section>



     
      <section id="contact" className="section contact-section">
        <h2>Contato</h2>
        <p>Entre em contato com nossas lojas pelo WhatsApp:</p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Loja 1 - Centro</h3>
            <p>Endereço: Rua A, Nº 123, Centro</p>
            <a
              href="https://wa.me/559912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Fale conosco
            </a>
          </div>
          <div className="contact-card">
            <h3>Loja 2 - Bairro Sul</h3>
            <p>Endereço: Rua B, Nº 456, Bairro Sul</p>
            <a
              href="https://wa.me/559987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </section>

     

      {/* Seção de Localização */}
      <section id="location" className="section location-section">
        <h2>Localização</h2>
        <p>Confira onde estão nossas lojas:</p>
        <div className="maps-grid">
          <div className="map-card">
            <h3>Loja 1 - Centro</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Localização Loja 1"
            ></iframe>
          </div>
          <div className="map-card">
            <h3>Loja 2 - Bairro Sul</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Localização Loja 2"
            ></iframe>
          </div>
        </div>
      </section>
    </div>



  );
};

export default App;
