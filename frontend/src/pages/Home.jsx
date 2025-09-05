import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Shield, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Importar imagens dos carros
import bmwX6Image from '@/assets/images/bmw-x6.jpg';
import porsche911Image from '@/assets/images/porsche-911-gts.jpg';
import lamborghiniHuracanImage from '@/assets/images/lamborghini-huracan.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "BMW X6 2024",
      subtitle: "Elegância e Performance",
      description: "O SUV cupê que redefine o conceito de luxo automotivo",
      price: "R$ 850.000",
      image: bmwX6Image
    },
    {
      title: "Porsche 911 Carrera GTS",
      subtitle: "Pura Adrenalina",
      description: "A perfeição da engenharia esportiva alemã",
      price: "R$ 1.200.000",
      image: porsche911Image
    },
    {
      title: "Lamborghini Huracán",
      subtitle: "Superesportivo Italiano",
      description: "O ápice da performance e design italiano",
      price: "R$ 2.800.000",
      image: lamborghiniHuracanImage
    }
  ];

  const features = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Qualidade Premium",
      description: "Apenas os melhores veículos de luxo do mercado"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantia Total",
      description: "Proteção completa e suporte pós-venda especializado"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excelência Reconhecida",
      description: "Mais de uma década de experiência no mercado premium"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Atendimento VIP",
      description: "Consultoria personalizada para cada cliente"
    }
  ];

  const stats = [
    { number: "1000+", label: "Carros Vendidos" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "3", label: "Lojas no Brasil" },
    { number: "98%", label: "Satisfação dos Clientes" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].image})`,
          }}
        />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                    {heroSlides[currentSlide].title}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-200">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
                  {heroSlides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <span className="text-3xl font-bold text-yellow-400">
                    {heroSlides[currentSlide].price}
                  </span>
                  <div className="flex gap-4">
                    <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                      <Link to="/carros">
                        Ver Carros <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black border-yellow-400 hover:border-yellow-500">
                      <Link to="/contato">Agendar Test Drive</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="text-yellow-400">FTSAuto</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em carros de luxo, oferecendo experiências únicas e atendimento excepcional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-8 text-center">
                    <div className="text-yellow-400 mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Pronto para encontrar seu carro dos sonhos?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Explore nossa coleção exclusiva de veículos de luxo e agende seu test drive hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Link to="/carros">
                  Explorar Carros <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                <Link to="/contato">Falar com Especialista</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

