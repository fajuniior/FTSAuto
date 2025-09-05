import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Car,
  Fuel,
  Gauge,
  Zap,
  Calendar,
  Tag,
  Heart,
  Share2,
  Eye,
  Filter,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';

// Importar imagens dos carros
import bmwX6Image from '@/assets/images/bmw-x6.jpg';
import mercedesGle400Image from '@/assets/images/mercedes-gle400.jpg';
import porsche911Image from '@/assets/images/porsche-911-gts.jpg';
import lamborghiniGallardoImage from '@/assets/images/lamborghini-gallardo.jpg';
import audiS3Image from '@/assets/images/audi-s3.jpg';
import lamborghiniHuracanImage from '@/assets/images/lamborghini-huracan.jpg';

const Carros = () => {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroCondicao, setFiltroCondicao] = useState('');

  // Mapeamento de imagens para os carros
  const carImages = {
    'bmw-x6.jpg': bmwX6Image,
    'mercedes-gle400.jpg': mercedesGle400Image,
    'porsche-911-gts.jpg': porsche911Image,
    'lamborghini-gallardo.jpg': lamborghiniGallardoImage,
    'audi-s3.jpg': audiS3Image,
    'lamborghini-huracan.jpg': lamborghiniHuracanImage,
  };

  useEffect(() => {
    fetchCarros();
  }, []);

  const fetchCarros = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/carros');
      if (!response.ok) {
        throw new Error('Erro ao carregar carros');
      }
      const data = await response.json();
      setCarros(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const carrosFiltrados = carros.filter(carro => {
    return (
      (filtroMarca === '' || carro.marca.toLowerCase().includes(filtroMarca.toLowerCase())) &&
      (filtroCategoria === '' || carro.categoria.toLowerCase().includes(filtroCategoria.toLowerCase())) &&
      (filtroCondicao === '' || carro.condicao.toLowerCase() === filtroCondicao.toLowerCase())
    );
  });

  const marcasUnicas = [...new Set(carros.map(carro => carro.marca))];
  const categoriasUnicas = [...new Set(carros.map(carro => carro.categoria))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Car className="h-16 w-16 text-yellow-400 animate-bounce mx-auto mb-4" />
          <p className="text-xl text-gray-600">Carregando carros...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600">Erro: {error}</p>
          <Button onClick={fetchCarros} className="mt-4">
            Tentar Novamente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos <span className="text-yellow-400">Carros</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra nossa coleção exclusiva de veículos de luxo e alta performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filtros:</span>
            </div>
            
            <select
              value={filtroMarca}
              onChange={(e) => setFiltroMarca(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="">Todas as Marcas</option>
              {marcasUnicas.map(marca => (
                <option key={marca} value={marca}>{marca}</option>
              ))}
            </select>

            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="">Todas as Categorias</option>
              {categoriasUnicas.map(categoria => (
                <option key={categoria} value={categoria}>{categoria}</option>
              ))}
            </select>

            <select
              value={filtroCondicao}
              onChange={(e) => setFiltroCondicao(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="">Todas as Condições</option>
              <option value="novo">Novo</option>
              <option value="usado">Usado</option>
            </select>

            <Button
              onClick={() => {
                setFiltroMarca('');
                setFiltroCategoria('');
                setFiltroCondicao('');
              }}
              variant="outline"
              size="sm"
            >
              Limpar Filtros
            </Button>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Mostrando {carrosFiltrados.length} de {carros.length} carros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carrosFiltrados.map((carro, index) => (
              <motion.div
                key={carro.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    {carro.imagem && carImages[carro.imagem.split('/').pop()] ? (
                      <img 
                        src={carImages[carro.imagem.split('/').pop()]}
                        alt={`${carro.marca} ${carro.modelo}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Car className="h-20 w-20 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant={carro.condicao === 'Novo' ? 'default' : 'secondary'}
                        className={carro.condicao === 'Novo' ? 'bg-green-500' : 'bg-blue-500'}
                      >
                        {carro.condicao}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {carro.marca} {carro.modelo}
                        </CardTitle>
                        <p className="text-gray-600">{carro.categoria}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-yellow-600">{carro.preco}</p>
                        <p className="text-sm text-gray-500">{carro.ano}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-gray-600">{carro.potencia}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Gauge className="h-4 w-4 text-blue-500" />
                        <span className="text-gray-600">{carro.aceleracao}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Fuel className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{carro.combustivel}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-purple-500" />
                        <span className="text-gray-600">{carro.ano}</span>
                      </div>
                    </div>

                    <Separator />

                    {/* Description */}
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {carro.descricao}
                    </p>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Detalhes
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Test Drive
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {carrosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum carro encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros para encontrar o carro ideal
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Carros;

